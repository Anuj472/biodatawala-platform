'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import TemplateCard from '@/components/common/TemplateCard';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import {
  marriageBiodataTemplates,
  resumeTemplates,
  weddingInvitationTemplates,
  certificateTemplates,
  businessCardTemplates,
} from '@/lib/template-data';
import { SERVICES } from '@/lib/constants';

const allTemplates = [
  ...marriageBiodataTemplates,
  ...resumeTemplates,
  ...weddingInvitationTemplates,
  ...certificateTemplates,
  ...businessCardTemplates,
];

export default function TemplatesGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStyle, setSelectedStyle] = useState<string>('all');
  const [showPremiumOnly, setShowPremiumOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All Templates' },
    { id: 'marriage', name: 'Marriage & Wedding' },
    { id: 'career', name: 'Career & Professional' },
    { id: 'business', name: 'Business & Corporate' },
  ];

  const styles = [
    { id: 'all', name: 'All Styles' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'modern', name: 'Modern' },
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'elegant', name: 'Elegant' },
    { id: 'creative', name: 'Creative' },
    { id: 'professional', name: 'Professional' },
  ];

  const filteredTemplates = allTemplates.filter((template) => {
    if (selectedCategory !== 'all' && template.category !== selectedCategory) return false;
    if (selectedStyle !== 'all' && template.style !== selectedStyle) return false;
    if (showPremiumOnly && !template.isPremium) return false;
    return true;
  });

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Browse All Templates</h1>
            <p className="text-xl">
              {allTemplates.length}+ professional templates across all categories. Find the perfect design for your needs.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 bg-white border-b">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Category Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Filter */}
              <div className="flex-1">
                <label className="block text-sm font-semibold mb-2">Style</label>
                <div className="flex flex-wrap gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedStyle === style.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium Toggle */}
            <div className="mt-4">
              <label className="flex items-center gap-2 cursor-pointer w-fit">
                <input
                  type="checkbox"
                  checked={showPremiumOnly}
                  onChange={(e) => setShowPremiumOnly(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <span className="text-sm font-medium">Show Premium Templates Only</span>
              </label>
            </div>
          </div>
        </section>

        {/* Results Count */}
        <section className="py-4 px-4 bg-gray-50">
          <div className="container mx-auto">
            <p className="text-gray-600">
              Showing <strong>{filteredTemplates.length}</strong> template{filteredTemplates.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {filteredTemplates.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTemplates.map((template) => (
                  <TemplateCard key={template.id} template={template} />
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <div className="max-w-md mx-auto">
                  <svg
                    className="w-16 h-16 mx-auto text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">No templates found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your filters or browse all templates.
                  </p>
                  <Button onClick={() => {
                    setSelectedCategory('all');
                    setSelectedStyle('all');
                    setShowPremiumOnly(false);
                  }}>
                    Reset Filters
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
            <p className="text-xl mb-6">New templates added every week. Request a custom design!</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Request Custom Template
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
