"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram, Youtube } from "lucide-react"

const XIcon = ({ size = 20 }: { size?: number }) => (
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

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background pt-12 pb-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-2 relative z-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8"
        >
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Link href="/" className="text-3xl font-bold text-primary">
              Enyo <span className="text-foreground">Sam</span>
            </Link>
          </div>

          <div className="flex gap-4">
            <Link
              href="https://x.com/enyosaam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <XIcon size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/enyosam/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/enyojoo"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/enyosam/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.youtube.com/@enyosam"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary/20 transition-colors"
            >
              <Youtube size={20} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-foreground/70 mb-2 md:mb-0">© {currentYear} Enyo Sam </p>
        </motion.div>
      </div>
    </footer>
  )
}

