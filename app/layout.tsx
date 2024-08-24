import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import ContacFormModalProvider from "@/providers/contact-form-modal-provider"
import { ThemeProvider } from "@/providers/theme-provider"
import Footer from "@/components/home/footer"

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
      <head>
        <script>
          {(function (w, d, s, l, i) {
            w[l] = w[l] || []
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : ""
            j.async = true
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
            f.parentNode.insertBefore(j, f)
          })(window, document, "script", "dataLayer", "GTM-PKMT3WZL")}
        </script>
      </head>
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
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
