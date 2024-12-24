import { ProjectCard } from "@/components/project-card"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          image={project.image}
          href={`/projects/${project.id}`}
          tags={project.tags}
        />
      ))}
    </div>
  )
}

