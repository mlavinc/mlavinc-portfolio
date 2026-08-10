# Cloud Operations Lab

Cloud Operations Lab es un entorno pequeño de operaciones en AWS definido con Terraform y desplegado con GitHub Actions. No es una aplicación para usuarios finales. Es un plano de control real para aprovisionar, revisar, aplicar, observar y automatizar infraestructura con una huella modesta: una VPC, una instancia EC2 (Amazon Linux 2023), CloudWatch, SSM, SNS y una tabla DynamoDB de eventos operativos.

[Diagrama de arquitectura: plano de control (bootstrap, OIDC, roles CI/apply) frente a workload (VPC, EC2, SSM, CloudWatch, DynamoDB)]

## Motivación / Problema

La mayoría de los proyectos de portfolio muestran un servicio en marcha. Pocos muestran cómo se cambiaría con seguridad la plataforma sobre la que corre.

Construí este laboratorio para practicar el ciclo operativo que importa en Cloud y Platform Engineering: infraestructura como código con estado remoto, identidad de CI sin access keys permanentes, acceso con mínimo privilegio al compute, observabilidad cuando algo falla y aprobación humana antes de `terraform apply`. La pregunta era concreta: ¿cómo mantener bajo control un entorno AWS pequeño cuando los cambios llegan desde Git y no desde la consola?

No había requisito de producto ni stakeholder inventado. El objetivo era reproducir, en un lab compatible con Free Tier, las decisiones de equipos que tratan la infraestructura como artefacto revisable: separar plan de apply, separar bootstrap del workload y preferir SSM a abrir SSH.

## Arquitectura

Hay dos planos.

**Bootstrap** se ejecuta una vez con estado local. Crea el bucket S3 de estado (versionado, acceso público bloqueado, cifrado, `prevent_destroy`), la tabla DynamoDB de locks, el proveedor OIDC de GitHub y dos roles IAM: `github-ci` para plan y `github-apply` para apply.

**Workload** vive en `environments/dev` sobre el backend S3. Compone módulos (`vpc`, `iam`, `ec2`, `cloudwatch`, `dynamodb`, `ssm`) en lugar de declarar recursos a mano. El host está en una subnet pública con Internet Gateway para que los agentes de SSM y CloudWatch lleguen a las APIs de AWS. El security group solo permite egress: sin key pair y sin SSH inbound.

```text
PR → Actions (OIDC → rol CI) → fmt / validate / plan (comentario en el PR)
  → merge a main → aprobación del Environment "dev"
  → Actions (OIDC → rol apply) → terraform apply
  → AWS + estado en S3 (lock en DynamoDB)
```

En la instancia, `user_data` instala rsyslog y el CloudWatch Agent, y envía `/var/log/messages`, `/var/log/secure` y métricas de memoria/disco. Una alarma de CPU (80%, dos periodos de 5 minutos) notifica por SNS. Parameter Store guarda la config en runtime (tabla, región, entorno). Dos documentos Run Command embeben `health_check.sh` y `log_event.sh`, que escriben ítems en DynamoDB con TTL de 30 días.

[Flujo de despliegue: comentario del plan en el PR → aprobación del environment → apply]

## Decisiones de ingeniería

**Bootstrap frente a workload.** Crear el backend dentro del stack que depende de él es un problema del huevo y la gallina. El bootstrap con estado local deja backend e identidad de CI fuera de la composición del entorno, a cambio de un apply manual único.

**Composición modular.** Los módulos poseen los recursos; `environments/dev` solo cablea inputs. Una composición `prod` futura puede reutilizar módulos sin copiar bloques.

**SSM en lugar de SSH.** El acceso interactivo usa HTTPS e IAM. Sin puerto 22 ni material de claves en el repo. Trade-off: plugin de Session Manager en local y conectividad a los endpoints de SSM.

**OIDC con dos roles.** Plan usa `ReadOnlyAccess` más una política acotada al backend de estado. Apply usa otro rol cuya trust policy coincide con `repo:{org}/{repo}:environment:dev` mediante `StringEquals`. Las credenciales temporales sustituyen a las keys estáticas; el nombre del Environment debe alinearse con esa condición.

**Aprobación antes del apply.** El job declara `environment: dev`, así que los required reviewers pausan el workflow. `-auto-approve` es intencional: el gate humano es la aprobación de GitHub, no un prompt de Terraform en CI.

**PassRole e instancia acotados.** La instancia puede hacer `PutItem` en la tabla de ops y `GetParameter` en su config. El `iam:PassRole` de apply se limita a roles `cloud-ops-lab-*` y a `ec2.amazonaws.com`. Apply sigue necesitando permisos amplios de gestión para Terraform; la separación apunta a plan frente a apply y al radio de PassRole.

**Topología consciente del coste.** Una AZ, `t3.micro`, sin NAT, ALB ni RDS. Importaba más la claridad operativa que una red multi-tier.

## Desafíos

**AL2023 y logs en fichero para CloudWatch.** AL2023 usa journald y no crea `/var/log/messages` ni `/var/log/secure`. El agente esperaba esas rutas, así que los logs no aparecían hasta instalar rsyslog en `user_data`. Con replace-on-change, corregir una instancia ya existente implica reemplazarla.

**CRLF de Windows en documentos SSM.** Los scripts llevaban `\r`; Linux rechazaba `#!/bin/bash\r` (exit 127). El módulo SSM normaliza CRLF a LF con `replace()` antes de embeber el script.

**`count` en IAM y ARNs calculados.** Un `count` sobre `dynamodb_table_arn != null` fallaba en plan porque el ARN no se conoce hasta el apply. Un booleano conocido en plan (`enable_ops_automation`) lo resolvió sin soltar el ARN real en el resource de la policy.

**Salida del plan en Actions.** El stdout del step era poco fiable con planes largos y `continue-on-error`. El job hace tee a `/tmp/tfplan.txt` y sale con `${PIPESTATUS[0]}` para comentar el plan completo y fallar cuando falle el plan.

**`.gitignore` frente a var files de CI.** Ignorar `*.tfvars` ocultaba `dev.tfvars` y rompía CI. Ahora solo se ignoran ficheros auto-cargados (`terraform.tfvars`, `*.auto.tfvars`).

## Resultados

El lab se despliega como un stack coherente: estado remoto con locking, planes de PR como comentarios, apply protegido por el environment `dev`, acceso solo por SSM, CloudWatch con SNS, y escritura vía Run Command en DynamoDB con TTL. Las elecciones siguen un diseño orientado a Free Tier (instancia pequeña, DynamoDB PAY_PER_REQUEST, retención corta de logs). No hay demo interactiva de producto; el entregable es el entorno operable y su pipeline de cambio.

[Placeholder de captura: comentario del plan de Terraform en un PR]
[Placeholder de captura: aprobación del GitHub Environment en apply]
[Placeholder de captura: ítem en DynamoDB ops-logs tras un health-check]

## Qué aprendí

Las condiciones de trust de OIDC son parte del diseño de seguridad, no solo del YAML. Los valores desconocidos en plan aparecen enseguida cuando `count` depende de atributos calculados. Detalles del SO (journald frente a logs clásicos, CRLF frente a LF) rompen la automatización de formas que parecen fallos de IAM o red hasta inspeccionar el payload. Separar bootstrap es incómodo una vez y luego simplifica cada apply.

## Mejoras futuras

Cablear los parámetros SSM (`EventType`, `Message`) en el Run Command de `log-event` para que los `--parameters` de la CLI lleguen al script. Fijar `metadata_options` de EC2 para IMDSv2 de forma explícita, no solo tokens en los scripts. Añadir una segunda composición de entorno reutilizando los mismos módulos cuando `dev` esté estable.
