import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata = {
  title: "LUMEN",
  description:
    "Convierte el lenguaje de señas en voz en tiempo real para mejorar la comunicación en reuniones y entornos cotidianos.",
  lang: "es",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="font-sans bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-aqua text-white px-4 py-2 rounded-md z-50"
        >
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  )
}
