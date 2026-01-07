"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Mail, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-primary" />,
      title: "Email",
      value: "hello@enyosam.com",
    },
    {
      icon: <Calendar className="h-8 w-8 text-primary" />,
      title: "Availability",
      value: "Open for collaborations",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Let's Talk",
      action: (
        <Button className="mt-2" asChild>
          <Link href="https://calendar.app.google/obrJpyVW6ZE4JwTt5" target="_blank" rel="noopener noreferrer">
            Schedule Meeting
          </Link>
        </Button>
      ),
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-primary font-medium">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Contact Me</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-background rounded-3xl p-8 shadow-lg flex flex-col items-center text-center">
              <div className="bg-primary/10 p-4 rounded-full mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              {item.value && <p className="text-foreground/70">{item.value}</p>}
              {item.action && item.action}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

