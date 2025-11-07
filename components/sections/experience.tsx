"use client"

import { Briefcase } from "lucide-react"

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Experience</h2>

        <div className="space-y-8">
          <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="text-primary" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">Full Stack Developer (Self Project Internship)</h3>
                <p className="text-primary font-semibold mb-2">May – June 2025</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Built LinkedIn Clone from scratch</li>
                  <li>• Designed scalable, responsive UI and real-time sync using Firebase</li>
                  <li>• Implemented authentication and post sharing features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
