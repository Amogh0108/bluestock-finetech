import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IPO Dashboard",
  description: "Track and manage IPO information",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 overflow-auto p-6">{children}</main>
            <footer className="border-t p-4 text-center text-sm text-gray-600">
              © 2024 Bluestock Fintech. All rights reserved. Registered with SEBI.
            </footer>
          </div>
        </div>
      </body>
    </html>
  )
}



import './globals.css'