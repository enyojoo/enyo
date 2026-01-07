import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Enyo Sam - Recording Artist | AI-native Developer | Entrepreneur",
  description:
    "2x Startup Founder with 7+ years experience in Product Design & Management. AI-native Developer crafting innovative solutions. Host of The Rescued Show podcast and Contemporary Christian Recording Artist.",
  keywords: [
    "Enyo Sam",
    "Startup Founder",
    "Product Designer",
    "AI-native Developer",
    "Product Manager",
    "Podcast Host",
    "Recording Artist",
    "Contemporary Christian",
    "The Rescued Show",
    "Innovation",
    "Entrepreneurship",
    "User-centered Design",
    "AI Solutions",
    "Creative Expression",
    "Tech Startup",
  ],
  metadataBase: new URL("https://enyosam.com"),
  openGraph: {
    title: "Enyo Sam - Recording Artist | AI-native Developer | Entrepreneur",
    description:
      "2x Startup Founder with 7+ years experience in Product Design & Management. AI-native Developer crafting innovative solutions. Host of The Rescued Show podcast and Contemporary Christian Recording Artist.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wprBiEoW0TMuUeKO6fnwiDQNwsqg99.png",
        width: 1200,
        height: 630,
        alt: "Enyo Sam - Startup Builder, Product Designer, AI-native Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enyo Sam - Recording Artist | AI-native Developer | Entrepreneur",
    description:
      "2x Startup Founder with 7+ years experience in Product Design & Management. AI-native Developer crafting innovative solutions. Host of The Rescued Show podcast and Contemporary Christian Recording Artist.",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wprBiEoW0TMuUeKO6fnwiDQNwsqg99.png"],
    creator: "@enyosaam",
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enyo%20Favicon-lUWfBfyWO8vxRvp7y8sQgcx0mi7aHh.svg",
        type: "image/svg+xml",
      },
    ],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'