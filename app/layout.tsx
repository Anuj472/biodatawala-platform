import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BioDatawala - Free Marriage Biodata, Resume & Document Maker | 140+ Templates',
  description: 'Create professional marriage biodata, resumes, wedding cards, and business documents online. 140+ free templates. No design skills needed. Download instantly as PDF/JPG.',
  keywords: 'marriage biodata maker, resume builder, wedding invitation, biodata format, free CV maker, online document creator, Indian biodata template, shaadi biodata, job resume',
  authors: [{ name: 'BioDatawala' }],
  openGraph: {
    title: 'BioDatawala - Create Professional Documents in Minutes',
    description: "India's #1 free document maker. Create biodata, resumes, cards & more with 140+ templates.",
    url: 'https://biodatawala.in',
    siteName: 'BioDatawala',
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
