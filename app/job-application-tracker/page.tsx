import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import CallToAction from '@/components/common/CallToAction'

export const metadata: Metadata = {
  title: 'Job Application Tracker | Organize Your Job Search | BioDatawala',
  description: 'Track your job applications efficiently. Manage interviews, follow-ups, and job offers in one organized dashboard.',
}

export default function JobApplicationTrackerPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Job Application Tracker
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay organized during your job search. Track applications, interviews, follow-ups, and offers all in one place.
              </p>
              <Link href="/login" className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all inline-block">
                Start Tracking
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Tracker Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-2">Application Status</h3>
                <p className="text-gray-600">Track every application from submission to offer</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-semibold mb-2">Interview Schedule</h3>
                <p className="text-gray-600">Never miss an interview with calendar integration</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-gray-600">Insights on your job search progress and success rate</p>
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
