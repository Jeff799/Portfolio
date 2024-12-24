import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download } from 'lucide-react'

export const metadata = {
  title: "About - Jefferey Lim",
  description: "UI/UX designer with expertise in creating seamless interfaces and frontend development",
}

const skills = [
  "HTML", "CSS", "JavaScript", "React.js", "Figma", "AWS", "Uizard",
  "Python", "Java", "C#", "Node.js", "SQL", "NoSQL", "EF Core", "LINQ",
  "JavaFX", "Python Flask"
]

const education = [
  {
    degree: "Masters of Information Technology",
    institution: "Royal Melbourne Institute of Technology (RMIT)",
    period: "March 2022 - March 2024"
  },
  {
    degree: "Bachelor of Commerce - Finance and Management Major",
    institution: "The University of Melbourne",
    period: "March 2019 - 2021"
  }
]

const awards = [
  {
    title: "General Excellence Award",
    institution: "Scotch College",
    year: "2018"
  },
  {
    title: "PTE Academic",
    description: "90 overall"
  }
]

export default function AboutPage() {
  return (
    <div className="container py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="glass-card p-8 rounded-lg border-2">
          <h1 className="text-4xl font-bold tracking-tighter mb-4 text-primary">About Me</h1>
          <p className="text-xl text-muted-foreground mb-6">
            UI/UX designer with expertise in creating seamless interfaces and frontend development using React.js, Figma, and AWS.
          </p>
          <p className="mb-6">
            Responsible, diligent, and straightforward. Experienced in team-oriented environments and working with clients. Quick to adapt and always willing to learn more. Good communication skills.
          </p>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <ul className="space-y-2">
              <li>Phone: 0431888722</li>
              <li>Email: jefferey0709@gmail.com</li>
              <li>Address: 570 Swanston St, Carlton</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Languages</h2>
            <ul className="space-y-2">
              <li>English</li>
              <li>Chinese</li>
            </ul>
          </div>
          <Button asChild>
            <a href="/jefferey-lim-resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
        </div>
        <div className="space-y-8">
          <div className="glass-card border-2 rounded-lg overflow-hidden p-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QhdAYzfAehqlxq9VoifUnQgNbiiNen.png"
              alt="Jefferey Lim Resume Preview"
              width={800}
              height={1131}
              className="w-full object-contain"
              priority
            />
          </div>
          <div className="glass-card p-8 rounded-lg border-2">
            <h2 className="text-2xl font-bold mb-4 text-primary">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 rounded-lg border-2">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
          <div className="glass-card p-8 rounded-lg border-2">
            <h2 className="text-2xl font-bold mb-4">Awards</h2>
            {awards.map((award, index) => (
              <div key={index} className="mb-2">
                <h3 className="text-lg font-semibold">{award.title}</h3>
                <p className="text-muted-foreground">{award.institution || award.description}</p>
                {award.year && <p className="text-sm text-muted-foreground">{award.year}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

