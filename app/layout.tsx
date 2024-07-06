import type { Metadata } from "next"
import localFont from "next/font/local"
import { Lora, Inter } from "next/font/google"
import "./globals.css"

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "Kevin Ivan",
  description: "A product designer that loves to code.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${inter.variable} text-foreground font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
