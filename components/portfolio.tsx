"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/ui/container"

export default function Portfolio() {
  const projects = [
    {
      title: "EaseLMS",
      category: "Education",
      image: "https://cldup.com/xDE0cJVUSK.png",
      link: "https://www.easelms.org/",
      description: "The Modern Open-Source Learning Management System",
    },
    {
      title: "ElectivePRO",
      category: "Platform",
      image: "https://cldup.com/wYCOQU0RFs.png",
      link: "https://www.electivepro.net/",
      description: "An open-source platform that automates elective course selection",
    },
    {
      title: "Fidarr",
      category: "Startups",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3dNNJ3XYr1PqCeDpvUozUf2cOdUvrx.png",
      link: "https://github.com/enyojoo/fidarr",
      description: "Built a content streaming platform with music, video and podcast features.",
    },
    {
      title: "Bukable",
      category: "Education",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2u9BGEI9dTMyXRftMl48QoBdq7UEQ0.png",
      link: "https://bukableco.webflow.io/",
      description: "Co-founded a career mentorship and global internship platform for students.",
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
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <Container className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Showcasing my work across different disciplines and industries
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-background rounded-3xl overflow-hidden shadow-lg group hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground hover:underline flex items-center gap-2 font-medium"
                  >
                    View Project <ExternalLink size={16} />
                  </Link>
                </div>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                  {project.category}
                </div>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                </Link>
                <p className="text-foreground/70">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}

