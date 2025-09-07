import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Visual Novel Portfolio',
  description: 'A personal portfolio website with visual novel inspired design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
