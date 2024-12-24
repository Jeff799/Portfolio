import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import Link from "next/link"
import { projects } from "./projects/constants"

export default function Home() {
  const featuredProjects = Object.entries(projects)
    .filter(([_, project]) => project.featured)
    .map(([id, project]) => ({ id, ...project }))

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
            UI/UX Designer & Frontend Developer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Creating user-friendly designs and functional web solutions
          </p>
          <Button asChild size="lg">
            <Link href="/projects">View My Projects</Link>
          </Button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold tracking-tighter mb-8">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
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
      </section>
    </div>
  )
}

