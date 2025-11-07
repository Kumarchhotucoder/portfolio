"use client"

import { GraduationCap } from "lucide-react"

export default function Education() {
  const education = [
    {
      degree: "B.Tech (Computer Science & Engineering)",
      school: "Rungta College of Engineering & Technology (RCET)",
      location: "Bhilai, Chhattisgarh",
      period: "2023 – 2027",
      cgpa: "CGPA: 7.5",
    },
    {
      degree: "Class XII (BSEB)",
      school: "Bihar Board of Education",
      location: "Bihar",
      period: "2023",
      percentage: "Percentage: 74.8%",
    },
    {
      degree: "Class X (BSEB)",
      school: "Bihar Board of Education",
      location: "Bihar",
      period: "2021",
      percentage: "Percentage: 81.6%",
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Education</h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <p className="text-primary font-semibold mb-1">{item.school}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {item.location} • {item.period}
                  </p>
                  <p className="text-sm font-medium">{item.cgpa || item.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
