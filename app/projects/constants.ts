export const projects = {
  "pythaverse": {
    title: "Pythaverse Onboarding",
    description: "A comprehensive redesign of the user onboarding experience for Pythaverse's educational platform",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dxNy1HhCttJlafkpNkUHmydafIh21m.png",
    link: "http://qa.pythaverse.space/",
    tags: ["UI/UX", "Frontend", "React"],
    tools: ["Figma", "React", "Next.js", "Tailwind CSS", "Uizard"],
    challenge: "The challenge was to create an intuitive onboarding experience that would help new users understand and navigate the platform's educational features while maintaining engagement.",
    solution: "Implemented a streamlined dashboard design with clear visual hierarchy and progress tracking. Created an intuitive interface for course management and progress tracking.",
    outcomes: [
      "Successfully implemented user dashboard with course tracking",
      "Integrated leaderboard system for engagement",
      "Created clear visual hierarchy for course progress"
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dxNy1HhCttJlafkpNkUHmydafIh21m.png",
        alt: "Pythaverse Dashboard",
        caption: "Main dashboard showing student progress and activities"
      }
    ],
    featured: true
  },
  "cake-website": {
    title: "Cake Website",
    description: "Full-stack web application for Magnolia Cakes & Cupcakes with integrated order management",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iqL3FSjffLjk4kgUhhTKwrpBg0Ea1L.png",
    link: "https://main.dfnn8skwc3oul.amplifyapp.com/home",
    tags: ["Full Stack", "AWS", "Next.js"],
    tools: ["Next.js", "AWS Amplify", "DynamoDB", "S3", "Figma"],
    challenge: "Build a modern e-commerce platform that allows the business to showcase their products, manage orders, and handle customer interactions efficiently.",
    solution: "Developed a responsive web application with a custom CMS for product management, integrated AWS services for scalable image storage and database management.",
    outcomes: [
      "Created a visually appealing showcase for custom cakes",
      "Implemented responsive design for all devices",
      "Integrated AWS backend for image management"
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iqL3FSjffLjk4kgUhhTKwrpBg0Ea1L.png",
        alt: "Cake Website Home",
        caption: "Homepage showcasing featured products"
      }
    ],
    featured: true
  },
  "twinspace": {
    title: "TwinSpace Platform",
    description: "AI-powered avatar customization platform featuring diverse character styles and themes",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8dc447bb-b040-4ec1-9f78-70ead05af340.jpg-fG4T0fPtSoGgf9s16PXliscbEJkYFT.jpeg",
    tags: ["UI/UX", "React", "AI"],
    tools: ["React", "AI Models", "Next.js", "Tailwind CSS"],
    challenge: "Create an engaging and intuitive platform for users to generate and customize AI-powered avatars with various themes and styles.",
    solution: "Developed a user-friendly interface for AI avatar generation with multiple style options and customization features.",
    outcomes: [
      "Successfully implemented AI avatar generation with multiple themes",
      "Created an intuitive gallery interface for browsing avatars",
      "Integrated avatar customization features"
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8dc447bb-b040-4ec1-9f78-70ead05af340.jpg-fG4T0fPtSoGgf9s16PXliscbEJkYFT.jpeg",
        alt: "TwinSpace Avatar Gallery",
        caption: "AI-powered avatar gallery showing various character styles"
      }
    ],
    featured: false
  },
  "dynabook": {
    title: "Dynabook Webpage",
    description: "Student registration and enrollment system with an intuitive form interface",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JanpXlvP2pGZOAic9pPMSRkMMfT3S8.png",
    link: "https://dynabook-qa.pythaverse.space/",
    tags: ["Frontend", "React", "Form Design"],
    tools: ["React", "Next.js", "Tailwind CSS"],
    challenge: "Design and implement a user-friendly registration system for student enrollment in educational activities.",
    solution: "Created a streamlined registration form with clear input validation and intuitive payment process integration.",
    outcomes: [
      "Implemented responsive form design with validation",
      "Integrated activity selection and pricing calculation",
      "Created seamless payment flow for enrollments"
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JanpXlvP2pGZOAic9pPMSRkMMfT3S8.png",
        alt: "Dynabook Registration Form",
        caption: "Student registration interface with activity selection"
      }
    ],
    featured: false
  }
} as const

