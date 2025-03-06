"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
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

export default function Music() {
  return (
    <section id="music" className="py-16 sm:py-20 md:py-24 relative overflow-hidden bg-background">
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left"
          >
            <span className="text-primary font-medium">MY MUSIC</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Faith. Love. Hope.</h2>
            <p className="text-lg text-foreground/70">
              I'm a contemporary Christian and R&B/Soul artist, blending heartfelt lyrics with soulful melodies. I have a passion for authentic spirituality with my music reflecting my deep connection to God. I seek to inspire faith, love, hope and personal transformation through music.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Button className="rounded-full" asChild>
                <Link
                  href="https://open.spotify.com/artist/1woz0y6hDwUzug2uIz6M7v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SpotifyIcon className="mr-2 h-5 w-5" /> Spotify
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link
                  href="https://music.apple.com/us/artist/enyo-sam/1468330821"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleIcon className="mr-2 h-5 w-5" /> Music
                </Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link href="https://www.youtube.com/@enyosam/releases" target="_blank" rel="noopener noreferrer">
                  <Youtube className="mr-2 h-4 w-4" /> YouTube
                </Link>
              </Button>
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
              src="https://open.spotify.com/embed/artist/1woz0y6hDwUzug2uIz6M7v?utm_source=generator&theme=0"
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

