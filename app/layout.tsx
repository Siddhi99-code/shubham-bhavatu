import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Shubham Bhavatu Classes - Quality Education from 1st to 12th Standard",
  description:
    "Shubham Bhavatu Classes provides quality education from 1st to 12th standard across three branches in Lavel, Gunade, and Lote. Expert teachers, proven results.",
  keywords: ["tuition classes", "education", "Lavel", "Gunade", "Lote", "coaching classes", "1st to 12th"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
