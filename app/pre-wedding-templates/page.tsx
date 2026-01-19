import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CallToAction from '@/components/common/CallToAction'
import { TEMPLATES } from '@/lib/template-data'

export const metadata: Metadata = {
  title: 'Pre-Wedding Photoshoot Templates | Save the Date Cards | BioDatawala',
  description: 'Beautiful pre-wedding templates, save-the-date cards, and engagement announcements. Create stunning digital and printable designs in minutes.',
}

export default function PreWeddingTemplatesPage() {
  const preWeddingTemplates = TEMPLATES.filter(t => t.category === 'Pre-Wedding')

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Pre-Wedding Templates & Save the Date Cards
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create beautiful pre-wedding photoshoot templates, save-the-date cards, and engagement announcements with our easy-to-use online editor.
              </p>
              <div className="flex gap-4 justify-center">
                <Link
                  href="#templates"
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Browse Templates
                </Link>
                <Link
                  href="/pricing"
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold border-2 border-gray-200 hover:border-pink-500 transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section id="templates" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Choose Your Template</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {preWeddingTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-64 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-6xl">{template.preview}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        template.isPremium 
                          ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {template.isPremium ? 'Premium' : 'Free'}
                      </span>
                      <Link
                        href={`/editor/${template.id}`}
                        className="px-6 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-medium hover:shadow-lg transition-all"
                      >
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Pre-Wedding Templates?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-xl font-semibold mb-2">Photo-Ready Designs</h3>
                <p className="text-gray-600">Beautiful layouts optimized for pre-wedding photoshoots and couple portraits</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">💌</div>
                <h3 className="text-xl font-semibold mb-2">Save the Date Cards</h3>
                <p className="text-gray-600">Elegant designs to announce your wedding date to friends and family</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Fully Customizable</h3>
                <p className="text-gray-600">Edit colors, fonts, add photos, and personalize every detail</p>
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
