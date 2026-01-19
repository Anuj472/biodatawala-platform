import { auth } from '@/auth'

export default async function LoginPage() {
  const session = await auth()
  if (session?.user) {
    return (
      <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Already Logged In</h1>
        <p>Welcome, {session.user.name}!</p>
        <a href="/dashboard" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Go to Dashboard
        </a>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to BioDatawala</h1>
          <p className="text-gray-600">Sign in to start creating documents</p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              placeholder="demo@biodatawala.in"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              placeholder="demo123"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            formAction={async () => {
              'use server'
              await signIn('credentials', {
                email: 'demo@biodatawala.in',
                password: 'demo123',
                redirectTo: '/dashboard',
              })
            }}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Demo credentials: <br />
            <strong>demo@biodatawala.in</strong> / <strong>demo123</strong>
          </p>
        </div>
      </div>
    </div>
  )
}
