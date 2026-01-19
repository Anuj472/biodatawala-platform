'use client'

import Link from 'next/link'
import Button from './Button'

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Create Your Perfect Document?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of users who create professional documents with BioDatawala. 
          No login required, completely free!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
              🎨 Browse All Templates
            </Button>
          </Link>
          <Link href="/marriage-biodata-maker">
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600">
              💍 Start Creating
            </Button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Instant Access</h3>
            <p className="text-blue-100 text-sm">No signup, no waiting. Start editing immediately.</p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl mb-3">🆓</div>
            <h3 className="font-bold text-lg mb-2">100% Free</h3>
            <p className="text-blue-100 text-sm">All features free forever. No hidden costs.</p>
          </div>
          
          <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm">
            <div className="text-4xl mb-3">💾</div>
            <h3 className="font-bold text-lg mb-2">Auto-Save</h3>
            <p className="text-blue-100 text-sm">Your work is saved automatically to your browser.</p>
          </div>
        </div>

        <p className="mt-8 text-blue-200 text-sm">
          🔒 Privacy First - Your data never leaves your browser
        </p>
      </div>
    </section>
  )
}
