import { ProjectGrid } from "@/components/project-grid"
import { projects } from "./constants"

export const metadata = {
  title: "Projects - Jefferey Lim",
  description: "Showcase of my UI/UX design and frontend development work",
}

const projectsList = Object.entries(projects).map(([id, project]) => ({
  id,
  ...project,
}))

export default function ProjectsPage() {
  return (
    <div className="container py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Projects</h1>
        <p className="text-xl text-muted-foreground mb-8">
          A collection of my work in UI/UX design and frontend development
        </p>
      </div>
      <ProjectGrid projects={projectsList} />
    </div>
  )
}

