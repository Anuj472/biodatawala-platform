import { auth, signOut } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
              {session.user.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session.user.name}!</h1>
              <p className="text-gray-600">{session.user.email}</p>
            </div>
          </div>
          
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <button
              type="submit"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">0</h3>
            <p className="text-gray-600">Saved Documents</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">0</h3>
            <p className="text-gray-600">Downloads This Month</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-3xl font-bold mb-2">Free</h3>
            <p className="text-blue-100">Upgrade to Premium</p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl font-bold">Quick Start</h2>
            <p className="opacity-90">Create a new document from any template</p>
          </div>
          
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/marriage-biodata-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="font-semibold text-lg mb-2">Marriage Biodata</h3>
              <p className="text-gray-600 text-sm">Traditional & modern designs</p>
            </a>
            
            <a href="/resume-cv-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="font-semibold text-lg mb-2">Resume/CV</h3>
              <p className="text-gray-600 text-sm">ATS-friendly templates</p>
            </a>
            
            <a href="/wedding-invitation-cards" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">💒</div>
              <h3 className="font-semibold text-lg mb-2">Wedding Cards</h3>
              <p className="text-gray-600 text-sm">Digital invitations</p>
            </a>
            
            <a href="/business-card-designer" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🎴</div>
              <h3 className="font-semibold text-lg mb-2">Business Cards</h3>
              <p className="text-gray-600 text-sm">Professional designs</p>
            </a>
            
            <a href="/certificate-generator" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="font-semibold text-lg mb-2">Certificates</h3>
              <p className="text-gray-600 text-sm">Awards & achievements</p>
            </a>
            
            <a href="/id-card-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
              <div className="text-4xl mb-4">🪪</div>
              <h3 className="font-semibold text-lg mb-2">ID Cards</h3>
              <p className="text-gray-600 text-sm">Employee & student IDs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
