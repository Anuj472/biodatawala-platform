import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import Button from '@/components/common/Button'
import { allTemplates } from '@/lib/template-data'

interface TemplatePageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const { id } = await params
  const template = allTemplates.find((t) => t.id === id)
  
  if (!template) {
    return {
      title: 'Template Not Found - BioDatawala',
    }
  }

  return {
    title: `${template.name} - ${template.category} Template | BioDatawala`,
    description: template.description,
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params
  const template = allTemplates.find((t) => t.id === id)

  if (!template) {
    notFound()
  }

  // Get related templates (same category)
  const relatedTemplates = allTemplates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/templates" className="hover:text-blue-600">Templates</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{template.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Template Preview */}
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-12 flex items-center justify-center min-h-[600px]">
                <div className="text-center">
                  <div className="text-8xl mb-4">{template.preview}</div>
                  <p className="text-gray-600">Live preview coming soon</p>
                </div>
              </div>
            </div>

            {/* Template Details */}
            <div>
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {template.name}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {template.description}
                </p>

                <div className="flex gap-3 mb-6">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    template.isPremium
                      ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-white'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {template.isPremium ? '✨ Premium' : '🆓 Free'}
                  </span>
                  <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-700 capitalize">
                    {template.style}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {template.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4 mb-8">
                  <Link href={`/editor/${template.id}`} className="flex-1">
                    <Button size="lg" className="w-full">
                      🎨 Use This Template
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    👁️ Preview
                  </Button>
                </div>

                {/* Features */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-lg mb-4">Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Easy to customize with live preview</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Professional design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Download as PDF, JPG, or PNG</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>No login required</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Completely free</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Templates */}
          {relatedTemplates.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">Related Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedTemplates.map((related) => (
                  <Link
                    key={related.id}
                    href={`/template/${related.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-gray-100">
                      <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <div className="text-6xl">{related.preview}</div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                          {related.name}
                        </h3>
                        <p className="text-gray-600 text-sm">{related.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    id: template.id,
  }))
}
