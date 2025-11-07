"use client"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "JavaScript", "Python"],
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React.js", "Next.js", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Django", "Firebase"],
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "Firestore"],
    },
    {
      title: "Tools & Cloud",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "VS Code", "Gemini APIs"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="inline-block px-3 py-1 rounded-full bg-muted text-sm font-medium mr-2 mb-2"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
