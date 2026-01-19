'use client'

import { useState } from 'react'
import MarriageBiodataFields from './fields/MarriageBiodataFields'

interface EditorSidebarProps {
  onFieldChange: (field: string, value: any) => void
  documentData?: Record<string, any>
  templateId?: string
}

export default function EditorSidebar({ onFieldChange, documentData = {}, templateId = '' }: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'design' | 'photos'>('content')

  // Determine template type from ID
  const getTemplateType = () => {
    if (templateId.startsWith('mb-') || templateId.startsWith('wed-')) return 'marriage'
    if (templateId.startsWith('res-')) return 'resume'
    if (templateId.startsWith('bc-')) return 'business-card'
    if (templateId.startsWith('cert-')) return 'certificate'
    if (templateId.startsWith('id-')) return 'id-card'
    return 'marriage' // default
  }

  const templateType = getTemplateType()

  const colors = [
    { name: 'Blue', value: '#1e40af' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Green', value: '#059669' },
    { name: 'Orange', value: '#ea580c' },
    { name: 'Pink', value: '#db2777' },
  ]

  const secondaryColors = [
    { name: 'Light Yellow', value: '#fef3c7' },
    { name: 'Light Blue', value: '#dbeafe' },
    { name: 'Light Purple', value: '#f3e8ff' },
    { name: 'Light Green', value: '#d1fae5' },
    { name: 'Light Pink', value: '#fce7f3' },
    { name: 'Light Gray', value: '#f3f4f6' },
  ]

  const fonts = [
    'Inter',
    'Georgia',
    'Roboto',
    'Playfair Display',
    'Montserrat',
    'Lora',
  ]

  return (
    <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-gray-50">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'content'
              ? 'text-blue-600 bg-white border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📝 Content
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'design'
              ? 'text-blue-600 bg-white border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🎨 Design
        </button>
        <button
          onClick={() => setActiveTab('photos')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'photos'
              ? 'text-blue-600 bg-white border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📷 Photos
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'content' && (
          <div>
            {templateType === 'marriage' && (
              <MarriageBiodataFields data={documentData} onChange={onFieldChange} />
            )}
            {/* Add more template type fields here */}
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Primary Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onFieldChange('primaryColor', color.value)}
                    className={`h-12 rounded-lg border-2 transition ${
                      documentData.primaryColor === color.value
                        ? 'border-gray-900 scale-105 ring-2 ring-offset-2 ring-gray-900'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Secondary Color
              </label>
              <div className="grid grid-cols-3 gap-2">
                {secondaryColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onFieldChange('secondaryColor', color.value)}
                    className={`h-12 rounded-lg border-2 transition ${
                      documentData.secondaryColor === color.value
                        ? 'border-gray-900 scale-105 ring-2 ring-offset-2 ring-gray-900'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Family
              </label>
              <select
                value={documentData.fontFamily || 'Inter'}
                onChange={(e) => onFieldChange('fontFamily', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {fonts.map((font) => (
                  <option key={font} value={font} style={{ fontFamily: font }}>
                    {font}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size: {documentData.fontSize || 16}px
              </label>
              <input
                type="range"
                min="12"
                max="24"
                value={documentData.fontSize || 16}
                onChange={(e) => onFieldChange('fontSize', parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition">
              <div className="text-4xl mb-2">📸</div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Upload Your Photo
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Click to browse or drag and drop
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0]
                  if (file) {
                    const reader = new FileReader()
                    reader.onload = (event) => {
                      onFieldChange('photo', event.target?.result)
                    }
                    reader.readAsDataURL(file)
                  }
                }}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                Choose Photo
              </label>
            </div>

            {documentData.photo && (
              <div className="relative">
                <img
                  src={documentData.photo}
                  alt="Preview"
                  className="w-full rounded-lg border-2 border-gray-200"
                />
                <button
                  onClick={() => onFieldChange('photo', '')}
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Info Banner */}
      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
        <p className="text-xs text-gray-700 leading-relaxed">
          💡 <strong>Free Forever!</strong> No login required. All changes are automatically saved to your browser.
        </p>
      </div>
    </div>
  )
}
