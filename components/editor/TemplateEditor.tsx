'use client';

import { useState } from 'react';
import Button from '@/components/common/Button';
import { Template } from '@/types';

interface TemplateEditorProps {
  template: Template;
}

export default function TemplateEditor({ template }: TemplateEditorProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [selectedFont, setSelectedFont] = useState('Inter');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleDownload = async (format: 'pdf' | 'jpg') => {
    // TODO: Implement actual download logic
    console.log('Downloading as', format, formData);
    alert(`Downloading as ${format.toUpperCase()}...`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Sidebar - Form */}
        <div className="lg:w-1/3 bg-white border-r overflow-y-auto p-6">
          <h2 className="text-2xl font-bold mb-6">Customize Your {template.category.replace('-', ' ')}</h2>
          
          {/* Personal Information */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">Personal Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter full name"
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                />
              </div>
              
              {template.category === 'marriage-biodata' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      onChange={(e) => handleInputChange('dob', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Height</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., 5'6\""
                      onChange={(e) => handleInputChange('height', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Education</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Highest qualification"
                      onChange={(e) => handleInputChange('education', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Occupation</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Current profession"
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                    />
                  </div>
                </>
              )}

              {template.category === 'resume-cv' && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Professional Title *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="e.g., Software Engineer"
                      onChange={(e) => handleInputChange('title', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 9876543210"
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Summary</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Brief professional summary"
                      onChange={(e) => handleInputChange('summary', e.target.value)}
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">Upload Photo</label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) => {
                    // TODO: Handle file upload
                    console.log('File uploaded:', e.target.files?.[0]);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Design Customization */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg mb-4">Design Customization</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Primary Color</label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="h-10 w-20 border rounded cursor-pointer"
                  />
                  <span className="text-sm text-gray-600">{selectedColor}</span>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Font Family</label>
                <select
                  value={selectedFont}
                  onChange={(e) => setSelectedFont(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Inter">Inter (Default)</option>
                  <option value="Poppins">Poppins</option>
                  <option value="Roboto">Roboto</option>
                  <option value="Playfair Display">Playfair Display</option>
                  <option value="Montserrat">Montserrat</option>
                </select>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button fullWidth onClick={() => handleDownload('pdf')}>
              Download as PDF
            </Button>
            <Button fullWidth variant="outline" onClick={() => handleDownload('jpg')}>
              Download as JPG
            </Button>
            {template.isPremium && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                <p className="text-amber-800">
                  🌟 This is a premium template. Upgrade to download without watermark.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Preview */}
        <div className="lg:w-2/3 bg-gray-100 flex items-center justify-center p-8 overflow-y-auto">
          <div className="bg-white shadow-2xl rounded-lg" style={{ width: '794px', height: '1123px' }}>
            {/* Canvas Preview */}
            <div className="w-full h-full flex items-center justify-center p-12 text-center">
              <div>
                <div className="text-6xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: selectedColor }}>
                  {formData.fullName || 'Your Name Here'}
                </h3>
                <p className="text-gray-600" style={{ fontFamily: selectedFont }}>
                  Template: {template.name}
                </p>
                <div className="mt-8 text-sm text-gray-500">
                  <p>Live preview will appear here as you type</p>
                  <p className="mt-2">This is a placeholder for the actual canvas implementation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
