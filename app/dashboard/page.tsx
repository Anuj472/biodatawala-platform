'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';

export default function DashboardPage() {
  const [userName] = useState('Guest User');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
              👤
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome to BioDatawala!</h1>
              <p className="text-gray-600">Free document design platform - No login required</p>
            </div>
          </div>
          
          <Link href="/">
            <Button variant="outline">
              ← Back to Home
            </Button>
          </Link>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">✨</span>
            <h2 className="text-2xl font-bold">100% Free - No Registration Needed!</h2>
          </div>
          <p className="text-blue-100">
            Create, customize, and download unlimited documents. All features are completely free.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">60+</h3>
            <p className="text-gray-600">Professional Templates</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">14</h3>
            <p className="text-gray-600">Service Categories</p>
          </div>
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">∞</h3>
            <p className="text-green-100">Unlimited Downloads</p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold">Quick Start - Choose a Template</h2>
            <p className="opacity-90">Click any category to start creating your document</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/marriage-biodata-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="font-semibold text-lg mb-2">Marriage Biodata</h3>
              <p className="text-gray-600 text-sm">Traditional & modern designs</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
            
            <Link href="/resume-cv-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Resume/CV</h3>
              <p className="text-gray-600 text-sm">ATS-friendly templates</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
            
            <Link href="/wedding-invitation-cards" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">💒</div>
              <h3 className="font-semibold text-lg mb-2">Wedding Cards</h3>
              <p className="text-gray-600 text-sm">Digital invitations</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
            
            <Link href="/business-card-designer" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🎴</div>
              <h3 className="font-semibold text-lg mb-2">Business Cards</h3>
              <p className="text-gray-600 text-sm">Professional designs</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
            
            <Link href="/certificate-generator" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-lg mb-2">Certificates</h3>
              <p className="text-gray-600 text-sm">Awards & achievements</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
            
            <Link href="/id-card-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🪪</div>
              <h3 className="font-semibold text-lg mb-2">ID Cards</h3>
              <p className="text-gray-600 text-sm">Employee & student IDs</p>
              <p className="text-blue-600 text-sm font-medium mt-2">→ 10 Free Templates</p>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose BioDatawala?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">✅</div>
              <h3 className="font-semibold mb-2">100% Free</h3>
              <p className="text-sm text-gray-600">No hidden charges or subscriptions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Instant Access</h3>
              <p className="text-sm text-gray-600">No registration or login required</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Easy Customization</h3>
              <p className="text-sm text-gray-600">Drag, drop, and edit with ease</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">💾</div>
              <h3 className="font-semibold mb-2">Download Anywhere</h3>
              <p className="text-sm text-gray-600">PDF, JPG, PNG formats available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
