import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kantin Larasati — Tongkol Suwir Kemangi Khas Jogja',
  description: 'Kantin favorit mahasiswa Jogja dengan rasa rumahan dan harga bersahabat. Tongkol Suwir Kemangi yang bikin orang balik lagi.',
  keywords: 'kantin larasati, tongkol suwir kemangi, makan murah jogja, kantin mahasiswa yogyakarta',
  openGraph: {
    title: 'Kantin Larasati — Tongkol Suwir Kemangi',
    description: 'Murah, hangat, ramai, dan bikin pengen balik lagi.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
