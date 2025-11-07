"use client"

import { Download, Mail, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl font-bold text-balance">
            <span className="gradient-text">Chhotu Kumar</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
            Full Stack Developer | Java & React Enthusiast
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable, real-time apps with clean code and creative design.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="gap-2 px-8 py-6 text-base"
            onClick={() =>
              window.open("https://bloblabchhotu.blob.core.windows.net/document/chhotu_resume.pdf", "_blank")
            }
          >
            <Download size={20} />
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="gap-2 px-8 py-6 text-base bg-transparent"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail size={20} />
            Contact Me
          </Button>
        </div>

        <div className="flex gap-4 justify-center pt-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-accent/20 transition-all hover:scale-110"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.638h3.554v1.364c.429-.663 1.682-1.61 4.099-1.61 2.991 0 5.23 1.953 5.23 6.158v3.727zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.71 0-.955.77-1.71 1.916-1.71 1.144 0 1.915.755 1.915 1.71 0 .952-.771 1.71-1.915 1.71zm1.595 11.597H3.635V9.172h3.297v11.28zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
