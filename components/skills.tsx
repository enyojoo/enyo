"use client"

import { motion } from "framer-motion"
import { Lightbulb, PenTool, Terminal, LayoutDashboard, Mic, Music } from "lucide-react"
import { Container } from "@/components/ui/container"

export default function Skills() {
  const skills = [
    {
      title: "Startup Building",
      description: "Experienced in launching and scaling innovative startups from concept to market.",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
    },
    {
      title: "Product Design",
      description: "Creating intuitive, user-centered designs that solve real problems and delight users.",
      icon: <PenTool className="h-10 w-10 text-primary" />,
    },
    {
      title: "AI Prompt Engineering",
      description: "Crafting effective prompts to leverage AI capabilities for innovative solutions.",
      icon: <Terminal className="h-10 w-10 text-primary" />,
    },
    {
      title: "Product Management",
      description: "Leading cross-functional teams to deliver successful products that meet business goals.",
      icon: <LayoutDashboard className="h-10 w-10 text-primary" />,
    },
    {
      title: "Podcast Hosting",
      description: "Hosting The Rescued Show, exploring fascinating stories and insights from diverse guests.",
      icon: <Mic className="h-10 w-10 text-primary" />,
    },
    {
      title: "Recording Artist",
      description: "Creating and performing original music as a recording artist.",
      icon: <Music className="h-10 w-10 text-primary" />,
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>

      <Container className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium">MY EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Skills & Services</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-3xl">
            A diverse set of skills and services across multiple disciplines
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 hover:border-primary/30 group"
            >
              <div className="mb-6 bg-primary/10 p-4 rounded-2xl inline-block group-hover:bg-primary/20 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{skill.title}</h3>
              <p className="text-foreground/70">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

