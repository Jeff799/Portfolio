import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  href: string
  tags: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  href,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-[1.02] glass-card border-2">
        <div className="aspect-video relative">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}

