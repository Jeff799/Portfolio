import { Github, Linkedin, Mail } from 'lucide-react'
import Link from "next/link"

export function Footer() {
  return (
    <footer className="absolute bottom-0 w-full border-t">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-1 items-center justify-center gap-4 md:justify-start">
          <Link
            href="mailto:jefferey0709@gmail.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://github.com/Jeff799"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/jefferey-lim-746211211/"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        <div className="flex-1 text-center md:text-right text-sm leading-loose text-muted-foreground">
          Built by{" "}
          <Link href="/" className="font-medium underline underline-offset-4">
            Jefferey Lim
          </Link>
          . © 2024.
        </div>
      </div>
    </footer>
  )
}

