import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CallToAction from '@/components/common/CallToAction'
import { TEMPLATES } from '@/lib/template-data'

export const metadata: Metadata = {
  title: 'Biodata Posters for Marriage | Creative Matrimonial Designs | BioDatawala',
  description: 'Create eye-catching biodata posters for matrimonial purposes. Modern, creative designs that stand out on social media and WhatsApp.',
}

export default function BiodataPostersPage() {
  const posterTemplates = TEMPLATES.filter(t => t.category === 'Biodata Poster')

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Creative Biodata Posters for Marriage
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stand out with modern, Instagram-ready biodata posters. Perfect for WhatsApp, social media, and matrimonial apps.
              </p>
              <div className="flex gap-4 justify-center">
                <Link href="#templates" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Browse Posters
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="templates" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Modern Poster Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posterTemplates.map((template) => (
                <div key={template.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-6xl">{template.preview}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{template.description}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${template.isPremium ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white' : 'bg-green-100 text-green-700'}`}>
                        {template.isPremium ? 'Premium' : 'Free'}
                      </span>
                      <Link href={`/editor/${template.id}`} className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transition-all">
                        Use Template
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
