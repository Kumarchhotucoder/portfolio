"use client"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-4xl font-bold gradient-text">About Me</h2>

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a results-driven Computer Science student passionate about problem-solving and full-stack web
            development. I specialize in building scalable applications using React, Node.js, and Firebase, and have
            solved 100+ DSA problems across LeetCode and GeeksforGeeks.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Data Structures & Algorithms", icon: "📊" },
              { label: "Object-Oriented Programming", icon: "🏗️" },
              { label: "Team Collaboration", icon: "👥" },
              { label: "Analytical Mindset", icon: "🧠" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
