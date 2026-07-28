import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="px-6 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <h2
          id="projects-heading"
          className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-zinc-50"
        >
          Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
