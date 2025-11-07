"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-muted-foreground">© {currentYear} Chhotu Kumar — Built with ❤️ using v0.dev</p>
      </div>
    </footer>
  )
}
