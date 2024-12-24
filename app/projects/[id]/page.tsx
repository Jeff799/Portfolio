import { notFound } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from "next/link"
import { projects } from "../constants"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <article className="container py-20">
      <Button
        variant="ghost"
        asChild
        className="mb-8"
      >
        <Link href="/projects">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>
      </Button>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tighter mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <p className="text-xl text-muted-foreground mb-6">
            {project.description}
          </p>
          {project.link && (
  <Button asChild className="mb-8">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      Visit Website
      <ExternalLink className="ml-2 h-4 w-4" />
    </a>
  </Button>
)}

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Tools Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-muted-foreground">{project.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Solution</h2>
              <p className="text-muted-foreground">{project.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Outcomes</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                {project.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="space-y-8">
          {project.gallery.map((image) => (
            <figure key={image.alt} className="space-y-3">
              <div className="overflow-hidden rounded-lg border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  className="w-full object-cover transition-all hover:scale-105"
                />
              </div>
              <figcaption className="text-sm text-muted-foreground text-center">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </article>
  )
}

