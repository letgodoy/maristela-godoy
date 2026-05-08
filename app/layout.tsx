import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { publicUrl } from '@/lib/public-url'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Maristela Godoy | Psicóloga Clínica',
  description:
    'Psicóloga clínica especializada em EMDR e Terapia Sistêmica. Atendimento individual, de casal e familiar. Agende sua consulta.',
  keywords:
    'psicóloga, psicologia, EMDR, terapia sistêmica, terapia de casal, terapia familiar, saúde mental',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: publicUrl('/images/logo.png'),
        media: '(prefers-color-scheme: light)',
      },
      {
        url: publicUrl('/images/logo.png'),
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: publicUrl('/images/logo.png'),
        type: 'image/png',
      },
    ],
    apple: publicUrl('/images/logo.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
