"use client"

export default function Certifications() {
  const certifications = [
    {
      title: "Java & Data Structures",
      issuer: "HackerRank",
      icon: "☕",
    },
    {
      title: "Google Cloud Fundamentals",
      issuer: "Google Cloud",
      icon: "☁️",
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Certifications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
              <p className="text-muted-foreground">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
