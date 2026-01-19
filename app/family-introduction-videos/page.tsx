import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CallToAction from '@/components/common/CallToAction'

export const metadata: Metadata = {
  title: 'Family Introduction Videos for Marriage | Video Biodata Maker | BioDatawala',
  description: 'Create professional family introduction videos for matrimonial purposes. Modern video templates with scripts and examples.',
}

export default function FamilyIntroductionVideosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Family Introduction Videos for Marriage
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create professional video biodatas and family introduction videos with our guided templates and scripts.
              </p>
              <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
                Start Creating
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Video Templates & Scripts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">🎥</div>
                <h3 className="text-xl font-semibold mb-2">Professional Scripts</h3>
                <p className="text-gray-600">Pre-written introduction scripts for family videos</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-semibold mb-2">Family Presentation</h3>
                <p className="text-gray-600">Structured format to present your family background</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-2">Video Guidelines</h3>
                <p className="text-gray-600">Tips for lighting, background, and presentation</p>
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
