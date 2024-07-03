import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--plus-jakarta-sans",
})

export const metadata: Metadata = {
  title: "Misbahur Rahman",
  description: "Full-stack Web Develoepr from Sylhet, Bangladesh",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={cn(plusJakartaSans.className, "scroll-smooth")}
      suppressHydrationWarning={true}
      lang="en"
    >
      <body>{children}</body>
    </html>
  )
}
