"use client"

export default function Achievements() {
  const achievements = [
    { title: "Institutional Rank 258", description: "GeeksforGeeks", icon: "🏆" },
    { title: "Solved 30 Days DSA Challenge", description: "HackerRank", icon: "✅" },
    { title: "100+ Problems Solved", description: "LeetCode & GeeksforGeeks", icon: "📊" },
    { title: "Multiple Full-Stack Projects", description: "Built and deployed", icon: "🚀" },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
