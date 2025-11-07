"use client"

import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      title: "LinkedIn Clone",
      description:
        "Full-stack app with React.js, Firebase, and Firestore featuring authentication and real-time post sharing.",
      technologies: ["React.js", "Firebase", "Firestore", "Tailwind CSS"],
      github: "https://github.com",
      liveDemo: "https://linkedin-clone-demo.com",
    },
    {
      title: "Uber Ride Booking App",
      description:
        "React Native application with Google Maps API and Firebase, including live tracking and fare estimation.",
      technologies: ["React Native", "Google Maps API", "Firebase", "Redux"],
      github: "https://github.com",
      liveDemo: "https://uber-booking-demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Featured Projects</h2>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Github size={16} />
                    GitHub
                  </Button>
                </a>
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="gap-2">
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
