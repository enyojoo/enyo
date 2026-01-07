"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ArrowRight, Github, Linkedin } from "lucide-react"

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)
import Link from "next/link"
import { motion } from "framer-motion"

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault()
  const targetId = href.replace(/.*#/, "")
  const elem = document.getElementById(targetId)
  if (elem) {
    elem.scrollIntoView({
      behavior: "smooth",
    })
  }
}

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 sm:pt-24"
      style={
        {
          "--x": `${mousePosition.x}px`,
          "--y": `${mousePosition.y}px`,
          "--spotlight-color": "185, 124, 85",
        } as React.CSSProperties
      }
    >
      <div className="absolute inset-0 spotlight -z-10 pointer-events-none"></div>
      <div
        className="absolute inset-0 -z-20 opacity-30 pointer-events-none"
        style={
          {
            "--grid-color": "185, 124, 85",
          } as React.CSSProperties
        }
      >
        <div className="absolute inset-0 gradient-grid"></div>
      </div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
            >
              Building the future
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I'm <span className="text-primary">Enyo Sam</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl text-foreground/80 font-light">
                <span className="font-medium text-primary">Startup Builder</span> •
                <span className="font-medium text-primary"> Product Designer</span> •
                <span className="font-medium text-primary"> AI-native Developer</span> •
                <span className="font-medium text-primary"> Podcast Host</span> •
                <span className="font-medium text-primary"> Recording Artist</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="rounded-full" asChild>
                <a href="#portfolio" onClick={(e) => scrollToSection(e, "#portfolio")}>
                  My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <Link href="https://calendar.app.google/obrJpyVW6ZE4JwTt5" target="_blank" rel="noopener noreferrer">
                  Let's Talk
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <Link
                href="https://x.com/enyosaam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <XIcon size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/enyosam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="https://github.com/enyojoo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </Link>
            </motion.div>
          </div>

          <div className="relative mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-[#D4A985]/20 rounded-full blur-lg"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09300.jpg-5EagAjq91KaQPZE74UIfvt1IAkeWcj.jpeg"
                  alt="Enyo Sam"
                  className="w-full h-full object-cover scale-[1.05]"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}

