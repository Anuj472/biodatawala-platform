import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allTemplates } from '@/lib/template-data';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

interface TemplatePageProps {
  params: {
    templateId: string;
  };
}

export async function generateMetadata({ params }: TemplatePageProps): Promise<Metadata> {
  const template = allTemplates.find((t) => t.id === params.templateId);
  
  if (!template) {
    return {
      title: 'Template Not Found',
    };
  }

  return {
    title: `${template.name} - BioDatawala Template`,
    description: template.description,
  };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const template = allTemplates.find((t) => t.id === params.templateId);

  if (!template) {
    notFound();
  }

  // Find related templates (same category)
  const relatedTemplates = allTemplates
    .filter((t) => t.category === template.category && t.id !== template.id)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              {template.isPremium && (
                <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  ⭐ Premium Template
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {template.name}
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                {template.description}
              </p>
              <div className="flex gap-4">
                <Link href={`/editor/${template.id}`}>
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Use This Template →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Template Preview */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Preview */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Template Preview</h2>
                  
                  {/* Template Preview Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 min-h-[600px] flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="text-8xl mb-6">{getTemplateIcon(template.category)}</div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">{template.name}</h3>
                      <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        This is a preview of the template. Click "Use This Template" to start customizing with your own information.
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {template.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Template Details Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Template Details</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Category</p>
                      <p className="font-semibold capitalize">{template.category}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Style</p>
                      <p className="font-semibold capitalize">{template.style}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Type</p>
                      <p className="font-semibold">{template.isPremium ? 'Premium' : 'Free'}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link href={`/editor/${template.id}`}>
                      <Button className="w-full">
                        Start Editing →
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Features Card */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4">What You Can Do</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Customize all text and colors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Upload your own photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Change fonts and styles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-0.5">✓</span>
                      <span>Download as PDF, JPG, or PNG</span>
                    </li>
                    {template.isPremium && (
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 mt-0.5">⭐</span>
                        <span>No watermark (Premium)</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Templates */}
        {relatedTemplates.length > 0 && (
          <section className="py-16 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold mb-8">Similar Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedTemplates.map((related) => (
                  <Link key={related.id} href={`/template/${related.id}`}>
                    <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="text-4xl mb-3">{getTemplateIcon(related.category)}</div>
                      <h3 className="font-bold mb-2">{related.name}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

function getTemplateIcon(category: string): string {
  const icons: Record<string, string> = {
    marriage: '💍',
    career: '💼',
    business: '🎯',
    creative: '🎨',
  };
  return icons[category] || '📄';
}

export async function generateStaticParams() {
  return allTemplates.map((template) => ({
    templateId: template.id,
  }));
}
