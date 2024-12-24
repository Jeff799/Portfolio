import { ContactForm } from "@/components/contact-form"

export const metadata = {
  title: "Contact - Jeffrey Lim",
  description: "Get in touch with Jeffrey Lim for UI/UX design and frontend development projects",
}

export default function ContactPage() {
  return (
    <div className="container py-20">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tighter mb-4">Contact Me</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Have a project in mind? Get in touch and let's create something amazing together.
        </p>
        <ContactForm />
      </div>
    </div>
  )
}

