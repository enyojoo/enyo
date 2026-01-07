"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium">ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4">Who I Am</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl">
            A multidisciplinary professional with a passion for innovation and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-3xl blur-lg"></div>
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC09298.jpg-nukuXdx1JyFAtWbSulOD7l109MxfEu.jpeg"
                alt="Enyo Sam"
                className="w-full h-full object-cover scale-[1.05]"
                style={{ objectPosition: "50% 25%" }}
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-2xl shadow-lg">
              <p className="text-2xl sm:text-3xl font-bold">7</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 sm:space-y-6 max-w-lg mx-auto lg:max-w-none text-center lg:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              I'm Enyo Sam, a versatile professional with a passion for building innovative solutions
            </h3>
            <p className="text-foreground/70">
              2x Startup founder, AI-Native Developer, experienced in product management, business development, and a design professional with over 7 years of entrepreneurial experience, leading cross-functional teams in developing user-centric products, blending expertise in fintech, SaaS, and product development. I have built and launched multiple technology projects, including EdTech, SaaS platforms and MVPs for startups.
            </p>
            <p className="text-foreground/70">
              With a strong passion for innovation in startup environments, I specialize in product strategy, user experience, and business development, taking products from ideation to launch across various industries.
            </p>
            <p className="text-foreground/70">
              Most recently, my work with building Easner as an API-first, invisible stablecoin cross-border payment infrastructure has been recognized under the Estonian Startup Visa program, providing a strong EU base to scale globally in compliance-driven fintech.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

