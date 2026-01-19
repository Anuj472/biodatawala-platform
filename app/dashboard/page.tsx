import { auth } from '@/auth'

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user) {
    return (
      <div className="max-w-2xl mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p>Please <a href="/login" className="text-blue-600 hover:underline">sign in</a> to access your documents.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8">
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white">
            {session.user.name?.[0]?.toUpperCase()}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session.user.name}!</h1>
            <p className="text-gray-600">Manage your documents and templates</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">0</h3>
            <p className="text-gray-600">Saved Documents</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-semibold mb-2">0</h3>
            <p className="text-gray-600">Downloads This Month</p>
          </div>
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-blue-100">Upgrade to Premium</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <h2 className="text-2xl font-bold">Quick Start</h2>
          <p className="opacity-90">Create a new document from any template</p>
        </div>
        
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="/marriage-biodata-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              💍
            </div>
            <h3 className="font-semibold text-lg mb-2">Marriage Biodata</h3>
            <p className="text-gray-600 text-sm">Traditional & modern designs</p>
          </a>
          
          <a href="/resume-cv-maker" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              📄
            </div>
            <h3 className="font-semibold text-lg mb-2">Resume/CV</h3>
            <p className="text-gray-600 text-sm">ATS-friendly templates</p>
          </a>
          
          <a href="/wedding-invitation-cards" className="group p-6 bg-gray-50 rounded-xl hover:bg-white transition-all border hover:shadow-lg hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              💒
            </div>
            <h3 className="font-semibold text-lg mb-2">Wedding Cards</h3>
            <p className="text-gray-600 text-sm">Digital invitations</p>
          </a>
        </div>
      </div>
    </div>
  )
}
