import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Quicksand } from 'next/font/google'
// import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/components/auth-provider'
import { AuthGuard } from '@/components/auth-guard'
import './globals.css'

const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const _quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Be My Shanedo',
  description: 'A romantic Valentine\'s Day experience',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/favicon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <AuthProvider>
          <AuthGuard>
            {children}
          </AuthGuard>
        </AuthProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
