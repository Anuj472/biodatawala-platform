import { Metadata } from 'next'
import { marriageBiodataTemplates } from '@/lib/template-data'
import TemplateCard from '@/components/common/TemplateCard'

export const metadata: Metadata = {
  title: 'Marriage Biodata Maker - Create Professional Biodata Online | BioDatawala',
  description: 'Create stunning marriage biodata online for free. Choose from beautiful templates and download instantly. No login required!',
}

export default function MarriageBiodataPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            🕉️ Marriage Biodata Maker
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create professional marriage biodata online for free. Choose from beautiful templates, customize, and download instantly.
          </p>
          <div className="flex gap-4 justify-center">
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">{marriageBiodataTemplates.length}</p>
              <p className="text-sm">Templates</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">∞</p>
              <p className="text-sm">100% Free</p>
            </div>
            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-lg">
              <p className="text-3xl font-bold">🔓</p>
              <p className="text-sm">No Login</p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Template</h2>
            <p className="text-gray-600">Select a template and start editing immediately - no signup required!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {marriageBiodataTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Biodata Maker?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Instant Access</h3>
              <p className="text-gray-600">No registration, no login. Start creating immediately.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Beautiful Templates</h3>
              <p className="text-gray-600">Professional designs for Hindu, Muslim, Christian & more.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📥</div>
              <h3 className="text-xl font-bold mb-2">Easy Download</h3>
              <p className="text-gray-600">Download as PDF, JPG, or PNG. Share anywhere.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
