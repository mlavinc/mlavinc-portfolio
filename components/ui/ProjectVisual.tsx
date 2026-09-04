/**
 * ProjectVisual — abstract technical visualizations per project.
 *
 * Each visual derives exclusively from the project's real architecture.
 * These are design elements: they set a technical atmosphere and give the
 * viewer an intuition of each project before reading the description.
 *
 * They are purely decorative (aria-hidden) and complement — never replace —
 * the textual content.
 */

const MONO_FONT = "var(--font-geist-mono), 'Geist Mono', monospace";
const DIM = "rgb(255 255 255 / 0.22)";
const BRIGHT = "rgb(255 255 255 / 0.68)";
const LABEL_DIM = "rgb(255 255 255 / 0.3)";
const CONTEXT_LABEL = "rgb(255 255 255 / 0.28)";
const NODE_FILL = "rgb(255 255 255 / 0.04)";
const NODE_STROKE = "rgb(255 255 255 / 0.18)";
const LINE_COLOR = "rgb(255 255 255 / 0.18)";
const ARROW_COLOR = "rgb(255 255 255 / 0.22)";

function ContextLabel({
  x,
  y,
  text,
}: {
  x: number;
  y: number;
  text: string;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor="end"
      fontSize={7}
      fill={CONTEXT_LABEL}
      fontFamily={MONO_FONT}
      letterSpacing={1.4}
    >
      {text}
    </text>
  );
}

/* ─── Arrow between two x-positions at a given y ─────────────────── */
function Arrow({
  x1,
  y1,
  x2,
  y2 = y1,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2?: number;
}) {
  const head = 5;
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2 - head}
        y2={y2}
        stroke={LINE_COLOR}
        strokeWidth={0.75}
      />
      <polygon
        points={`${x2},${y2} ${x2 - head - 1},${y2 - 3} ${x2 - head - 1},${y2 + 3}`}
        fill={ARROW_COLOR}
      />
    </g>
  );
}

/* ─── Circular node ──────────────────────────────────────────────── */
function CircleNode({
  cx,
  cy,
  r,
  label,
  sub,
}: {
  cx: number;
  cy: number;
  r: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill={NODE_FILL}
        stroke={NODE_STROKE}
        strokeWidth={0.75}
      />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize={6.5}
        fill={BRIGHT}
        fontFamily={MONO_FONT}
        letterSpacing={0.5}
      >
        {label}
      </text>
      {sub && (
        <text
          x={cx}
          y={cy + r + 13}
          textAnchor="middle"
          fontSize={7}
          fill={LABEL_DIM}
          fontFamily={MONO_FONT}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

/* ─── Rounded-rect node (used in Cloud Ops for IaC stages) ──────── */
function RectNode({
  cx,
  cy,
  w = 28,
  h = 22,
  rx = 4,
  label,
  sub,
}: {
  cx: number;
  cy: number;
  w?: number;
  h?: number;
  rx?: number;
  label: string;
  sub?: string;
}) {
  return (
    <g>
      <rect
        x={cx - w / 2}
        y={cy - h / 2}
        width={w}
        height={h}
        rx={rx}
        fill={NODE_FILL}
        stroke={NODE_STROKE}
        strokeWidth={0.75}
      />
      <text
        x={cx}
        y={cy + 4}
        textAnchor="middle"
        fontSize={6.5}
        fill={BRIGHT}
        fontFamily={MONO_FONT}
        letterSpacing={0.5}
      >
        {label}
      </text>
      {sub && (
        <text
          x={cx}
          y={cy + h / 2 + 13}
          textAnchor="middle"
          fontSize={7}
          fill={LABEL_DIM}
          fontFamily={MONO_FONT}
        >
          {sub}
        </text>
      )}
    </g>
  );
}

/* ══════════════════════════════════════════════════════════════════
   DAG — Document Knowledge Agent
   RAG pipeline: DOC → PARSE → EMBED → VDB → LLM
   ══════════════════════════════════════════════════════════════════ */
function DAGVisual() {
  const r = 15;
  const cy = 54;
  const nodes: { x: number; label: string; sub: string }[] = [
    { x: 46, label: "DOC", sub: "input" },
    { x: 126, label: "PARSE", sub: "chunks" },
    { x: 220, label: "EMBED", sub: "vectors" },
    { x: 314, label: "VDB", sub: "retrieve" },
    { x: 394, label: "LLM", sub: "generate" },
  ];

  return (
    <div
      className="relative h-44 w-full overflow-hidden bg-zinc-900/25"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 122"
        className="h-full w-full opacity-50 transition-opacity duration-300 group-hover/card:opacity-75"
        preserveAspectRatio="xMidYMid meet"
      >
        <ContextLabel x={432} y={14} text="rag · pipeline" />
        {/* Connector arrows */}
        {nodes.slice(0, -1).map((node, i) => (
          <Arrow
            key={`a-${i}`}
            x1={node.x + r + 2}
            y1={cy}
            x2={nodes[i + 1].x - r - 2}
          />
        ))}
        {/* Nodes */}
        {nodes.map((n) => (
          <CircleNode key={n.label} cx={n.x} cy={cy} r={r} label={n.label} sub={n.sub} />
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Cloud Operations Lab
   IaC pipeline: GHA → OIDC → TF → AWS with SSM / CW branches
   Rounded-rect nodes to visually distinguish from DAG circles.
   ══════════════════════════════════════════════════════════════════ */
function CloudOpsVisual() {
  const cy = 56;
  const flow: { x: number; label: string; sub: string }[] = [
    { x: 50, label: "GHA", sub: "trigger" },
    { x: 148, label: "OIDC", sub: "auth" },
    { x: 248, label: "TF", sub: "terraform" },
    { x: 345, label: "AWS", sub: "deploy" },
  ];
  // Branch sub-services from AWS
  const branches = [
    { x: 413, y: 34, label: "SSM" },
    { x: 413, y: 80, label: "CW" },
  ];
  const nodeW = 32;
  const nodeH = 22;

  return (
    <div
      className="relative h-44 w-full overflow-hidden bg-zinc-900/25"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 118"
        className="h-full w-full opacity-50 transition-opacity duration-300 group-hover/card:opacity-75"
        preserveAspectRatio="xMidYMid meet"
      >
        <ContextLabel x={432} y={14} text="iac · pipeline" />

        {/* Main flow arrows */}
        {flow.slice(0, -1).map((node, i) => (
          <Arrow
            key={`fa-${i}`}
            x1={node.x + nodeW / 2 + 2}
            y1={cy}
            x2={flow[i + 1].x - nodeW / 2 - 2}
          />
        ))}

        {/* Branch lines from AWS center → branch nodes */}
        <line
          x1={345 + nodeW / 2}
          y1={cy - 4}
          x2={branches[0].x - 13}
          y2={branches[0].y + 4}
          stroke={LINE_COLOR}
          strokeWidth={0.75}
        />
        <line
          x1={345 + nodeW / 2}
          y1={cy + 4}
          x2={branches[1].x - 13}
          y2={branches[1].y - 4}
          stroke={LINE_COLOR}
          strokeWidth={0.75}
        />

        {/* Main flow nodes */}
        {flow.map((n) => (
          <RectNode
            key={n.label}
            cx={n.x}
            cy={cy}
            w={nodeW}
            h={nodeH}
            label={n.label}
            sub={n.sub}
          />
        ))}

        {/* Branch nodes (smaller) */}
        {branches.map((b) => (
          <RectNode key={b.label} cx={b.x} cy={b.y} w={26} h={16} rx={3} label={b.label} />
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ECG-AI Serverless
   ECG waveform (2 cycles) + ML inference pipeline: ECG → ML → API → OUT
   The waveform is the unique identifier of this project.
   ══════════════════════════════════════════════════════════════════ */
function ECGVisual() {
  // 2-cycle ECG: P wave, QRS complex (sharp spike), T wave
  const waveformPath =
    "M 0,40 L 28,40 Q 36,40 40,32 Q 44,40 48,40 " +
    "L 60,40 L 66,46 L 72,8 L 78,46 L 84,40 " +
    "L 96,40 Q 104,40 110,28 Q 116,40 122,40 " +
    "L 165,40 " +
    "Q 173,40 177,32 Q 181,40 185,40 " +
    "L 197,40 L 203,46 L 209,8 L 215,46 L 221,40 " +
    "L 233,40 Q 241,40 247,28 Q 253,40 259,40 " +
    "L 440,40";

  const r = 12;
  const pY = 90;
  const pipeline: { x: number; label: string }[] = [
    { x: 68, label: "ECG" },
    { x: 178, label: "ML" },
    { x: 278, label: "API" },
    { x: 378, label: "OUT" },
  ];

  return (
    <div
      className="relative h-44 w-full overflow-hidden bg-zinc-900/25"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 116"
        className="h-full w-full opacity-50 transition-opacity duration-300 group-hover/card:opacity-75"
        preserveAspectRatio="xMidYMid meet"
      >
        <ContextLabel x={432} y={14} text="ml · inference" />

        {/* ECG waveform */}
        <path
          d={waveformPath}
          fill="none"
          stroke={DIM}
          strokeWidth={1.1}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Subtle divider */}
        <line
          x1={0}
          y1={62}
          x2={440}
          y2={62}
          stroke="rgb(255 255 255 / 0.05)"
          strokeWidth={0.75}
        />

        {/* Inference pipeline arrows */}
        {pipeline.slice(0, -1).map((node, i) => (
          <Arrow
            key={`pa-${i}`}
            x1={node.x + r + 2}
            y1={pY}
            x2={pipeline[i + 1].x - r - 2}
          />
        ))}

        {/* Inference pipeline nodes */}
        {pipeline.map((n) => (
          <CircleNode key={n.label} cx={n.x} cy={pY} r={r} label={n.label} />
        ))}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Skill Tracker
   Activity heatmap — evokes "tracking progress over time"
   without inventing specific data values.
   ══════════════════════════════════════════════════════════════════ */
function SkillTrackerVisual() {
  const COLS = 14;
  const ROWS = 5;
  const CELL = 9;
  const GAP = 3;
  const GRID_W = COLS * (CELL + GAP) - GAP; // 165
  const GRID_H = ROWS * (CELL + GAP) - GAP; // 57
  const startX = (440 - GRID_W) / 2; // ~137.5
  const startY = (110 - GRID_H) / 2 + 4; // centered with slight downward nudge

  // 0 = empty, 1 = low, 2 = medium, 3 = high activity
  const GRID = [
    [0, 2, 0, 3, 1, 0, 0, 2, 0, 0, 3, 0, 2, 0],
    [1, 0, 2, 0, 3, 0, 1, 0, 2, 1, 0, 0, 3, 1],
    [0, 3, 0, 1, 0, 2, 3, 0, 0, 2, 0, 1, 0, 2],
    [1, 1, 0, 0, 3, 0, 0, 1, 2, 0, 1, 0, 2, 0],
    [0, 0, 1, 2, 0, 3, 0, 0, 1, 0, 0, 2, 3, 1],
  ];

  function cellFill(intensity: number): string {
    if (intensity === 0) return "rgb(255 255 255 / 0.06)";
    if (intensity === 1) return "rgb(255 255 255 / 0.24)";
    if (intensity === 2) return "rgb(255 255 255 / 0.48)";
    return "rgb(255 255 255 / 0.76)";
  }

  return (
    <div
      className="relative h-44 w-full overflow-hidden bg-zinc-900/25"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 440 110"
        className="h-full w-full opacity-50 transition-opacity duration-300 group-hover/card:opacity-75"
        preserveAspectRatio="xMidYMid meet"
      >
        <ContextLabel x={432} y={14} text="activity · log" />

        {GRID.map((row, r) =>
          row.map((intensity, c) => (
            <rect
              key={`${r}-${c}`}
              x={startX + c * (CELL + GAP)}
              y={startY + r * (CELL + GAP)}
              width={CELL}
              height={CELL}
              rx={2}
              fill={cellFill(intensity)}
              stroke="rgb(255 255 255 / 0.07)"
              strokeWidth={0.4}
            />
          )),
        )}
      </svg>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   Public API
   ══════════════════════════════════════════════════════════════════ */
interface ProjectVisualProps {
  projectId: string;
}

export function ProjectVisual({ projectId }: ProjectVisualProps) {
  switch (projectId) {
    case "document-knowledge-agent":
      return <DAGVisual />;
    case "cloud-operations-lab":
      return <CloudOpsVisual />;
    case "ecg-ai-serverless":
      return <ECGVisual />;
    case "skill-tracker":
      return <SkillTrackerVisual />;
    default:
      return (
        <div
          className="h-44 w-full bg-zinc-900/25"
          aria-hidden="true"
        />
      );
  }
}
