"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Youtube } from "lucide-react"

const SpotifyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const AppleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52 4.17 4.17 0 0 0-1 3.09 3.69 3.69 0 0 0 2.94-1.42zm2.52 7.44a4.51 4.51 0 0 1 2.16-3.81 4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91-.83 0-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53 1.24-.05 1.71-.8 3.21-.8s1.93.8 3.24.77c1.34 0 2.2-1.19 3-2.41a11 11 0 0 0 1.35-2.78 4.42 4.42 0 0 1-2.46-4.15z" />
  </svg>
)

export default function Podcast() {
  return (
    <section id="podcast" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-secondary/30">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left relative z-10"
          >
            <span className="text-primary font-medium select-text">MY PODCAST</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold select-text">The Rescued Show</h2>
            <p className="text-lg text-foreground/70 select-text">
              Join me as I explore fascinating stories and insights from innovators, creators, and thought leaders
              across various industries. Each episode dives deep into their journeys, challenges, and the insights
              they've gained along the way.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 relative z-20">
              <Link
                href="https://open.spotify.com/show/70ND2FoyboV6q0tC45jrIG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary text-primary-foreground px-6 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative z-10"
              >
                <SpotifyIcon className="h-5 w-5" /> Spotify
              </Link>
              <Link
                href="https://podcasts.apple.com/us/podcast/your-apple-podcasts-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background px-6 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative z-10"
              >
                <AppleIcon className="h-5 w-5" />
                Apple
              </Link>
              <Link
                href="https://www.youtube.com/channel/your-youtube-channel-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-input bg-background px-6 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative z-10"
              >
                <Youtube className="h-4 w-4" /> YouTube
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full h-[352px] rounded-xl overflow-hidden shadow-lg mx-auto lg:mx-0"
          >
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/show/70ND2FoyboV6q0tC45jrIG?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

