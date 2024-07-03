import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import ContacFormModalProvider from "@/providers/contact-form-modal-provider"
import { ThemeProvider } from "@/providers/theme-provider"

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
      suppressHydrationWarning
      lang="en"
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ContacFormModalProvider />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
