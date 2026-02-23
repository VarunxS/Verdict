import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Libre_Baskerville, IBM_Plex_Mono, IBM_Plex_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const libreBaskerville = Libre_Baskerville({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-serif' })
const ibmPlexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-ibm-mono' })
const ibmPlexSans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-ibm-sans' })
const playfairDisplay = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-headline' })

export const metadata: Metadata = {
  title: 'Verdict — Institutional Intelligence',
  description: 'Investment banking frameworks and management consulting methodology applied automatically.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "min-h-screen bg-transparent antialiased",
        inter.variable,
        jetbrainsMono.variable,
        libreBaskerville.variable,
        ibmPlexMono.variable,
        ibmPlexSans.variable,
        playfairDisplay.variable
      )}>
        {children}
      </body>
    </html>
  )
}
