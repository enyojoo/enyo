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
  title: "Enyo Sam - Entrepreneur | AI-native Developer | Recording Artist",
  description:
    "Entrepreneur, 2x Startup founder & AI-native developer with 7+ years experience. Expert in AI, product management, business development & design. Podcast host & recording artist.",
  keywords: [
    "Enyo Sam",
    "Startup Founder",
    "AI-native Developer",
    "Product Designer",
    "Product Manager",
    "Business Development",
    "Entrepreneur",
    "Fintech",
    "SaaS",
    "EdTech",
    "Product Strategy",
    "User Experience",
    "UX Design",
    "Cross-border Payments",
    "Stablecoin",
    "Estonian Startup Visa",
    "Easner",
    "Podcast Host",
    "The Rescued Show",
    "Recording Artist",
    "Contemporary Christian Music",
    "R&B Soul Artist",
    "Innovation",
    "Entrepreneurship",
    "User-centered Design",
    "AI Solutions",
    "MVP Development",
    "Tech Startup",
    "Product Launch",
    "Compliance-driven Fintech",
  ],
  authors: [{ name: "Enyo Sam" }],
  creator: "Enyo Sam",
  publisher: "Enyo Sam",
  metadataBase: new URL("https://enyosam.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Enyo Sam - Entrepreneur | AI-native Developer | Recording Artist",
    description:
      "2x Startup founder and AI-native developer with 7+ years of entrepreneurial experience. Expert in product management, business development, and design. Built fintech, SaaS, and EdTech platforms. Host of The Rescued Show podcast and contemporary Christian recording artist.",
    url: "https://enyosam.com",
    siteName: "Enyo Sam",
    images: [
      {
        url: "https://cldup.com/qr7qMsOwSs.png",
        width: 1200,
        height: 630,
        alt: "Enyo Sam - Entrepreneur, AI-native Developer, Recording Artist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enyo Sam - Entrepreneur | AI-native Developer | Recording Artist",
    description:
      "2x Startup founder and AI-native developer with 7+ years of entrepreneurial experience. Expert in product management, business development, and design. Built fintech, SaaS, and EdTech platforms.",
    images: ["https://cldup.com/qr7qMsOwSs.png"],
    creator: "@enyosaam",
    site: "@enyosaam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enyo%20Favicon-lUWfBfyWO8vxRvp7y8sQgcx0mi7aHh.svg",
        type: "image/svg+xml",
      },
    ],
    apple: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Enyo%20Favicon-lUWfBfyWO8vxRvp7y8sQgcx0mi7aHh.svg",
        type: "image/svg+xml",
      },
    ],
  },
  verification: {
    google: undefined, // Add Google Search Console verification code if available
  },
  category: "Technology",
  generator: "Next.js",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Enyo Sam",
  jobTitle: "Entrepreneur, Startup Founder, AI-native Developer, Product Designer, Recording Artist",
  description:
    "2x Startup founder and AI-native developer with 7+ years of entrepreneurial experience. Expert in product management, business development, and design.",
  url: "https://enyosam.com",
  image: "https://cldup.com/qr7qMsOwSs.png",
  sameAs: [
    "https://x.com/enyosaam",
    "https://www.linkedin.com/in/enyosam/",
    "https://github.com/enyojoo",
    "https://www.instagram.com/enyosam/",
    "https://www.youtube.com/@enyosam",
    "https://podcasts.apple.com/us/podcast/the-rescued-show/id1517107406",
    "https://open.spotify.com/show/70ND2FoyboV6q0tC45jrIG",
  ],
  knowsAbout: [
    "Startup Building",
    "Product Design",
    "AI-native Development",
    "Product Management",
    "Business Development",
    "Fintech",
    "SaaS",
    "EdTech",
    "UX Design",
    "Song writing",
    "Music production",
    "Recording",
    "Performing",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "Various",
  },
  worksFor: {
    "@type": "Organization",
    name: "Easner, Inc.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}