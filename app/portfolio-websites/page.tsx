import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CallToAction from '@/components/common/CallToAction'

export const metadata: Metadata = {
  title: 'Portfolio Website Templates | Personal Portfolio Designs | BioDatawala',
  description: 'Create stunning portfolio websites for designers, developers, photographers, and creatives. Responsive templates with modern designs.',
}

export default function PortfolioWebsitesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Portfolio Website Templates
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Showcase your work with beautiful, responsive portfolio templates. Perfect for designers, developers, photographers, and all creatives.
              </p>
              <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
                Build Your Portfolio
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Portfolio Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Modern Designs</h3>
                <p className="text-gray-600">Clean, contemporary layouts that make your work shine</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-semibold mb-2">Fully Responsive</h3>
                <p className="text-gray-600">Perfect viewing experience on all devices and screen sizes</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Fast Loading</h3>
                <p className="text-gray-600">Optimized for speed and performance</p>
              </div>
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
