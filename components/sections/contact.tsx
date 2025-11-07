"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Send email logic
    window.location.href = `mailto:chhotu6826@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`
  }

  const contactLinks = [
    { icon: Mail, label: "Email", value: "chhotu6826@gmail.com", href: "mailto:chhotu6826@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 7766861339", href: "tel:+917766861339" },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com",
      href: "https://github.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com",
      href: "https://linkedin.com",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-accent/20 transition-colors group"
                >
                  <link.icon className="text-primary group-hover:scale-110 transition-transform" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                    <p className="font-semibold text-foreground">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://leetcode.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover:scale-110"
              >
                <ExternalLink size={20} />
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/chhotusingh/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-muted hover:bg-accent/20 transition-all hover:scale-110"
              >
                <ExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Your message..."
              />
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
