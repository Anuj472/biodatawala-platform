
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import { SessionProvider } from '@/components/providers/SessionProvider'
import { auth } from '@/auth'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BioDatawala - Professional Document Design Platform',
  description: 'Create professional biodata, resumes, wedding cards, certificates and more. Online editor with 140+ templates.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Header />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
