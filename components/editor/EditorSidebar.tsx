'use client';

import { useState } from 'react';

interface EditorSidebarProps {
  onFieldChange: (field: string, value: any) => void;
  documentData?: Record<string, any>;
}

export default function EditorSidebar({ onFieldChange, documentData = {} }: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'design' | 'photos'>('content');

  const colorOptions = [
    { name: 'Blue', value: '#1e40af' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Green', value: '#059669' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Orange', value: '#ea580c' },
    { name: 'Pink', value: '#db2777' },
  ];

  const fontOptions = [
    { name: 'Inter', value: 'Inter, sans-serif' },
    { name: 'Roboto', value: 'Roboto, sans-serif' },
    { name: 'Lato', value: 'Lato, sans-serif' },
    { name: 'Open Sans', value: '"Open Sans", sans-serif' },
    { name: 'Poppins', value: 'Poppins, sans-serif' },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'content'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📝 Content
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'design'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🎨 Design
        </button>
        <button
          onClick={() => setActiveTab('photos')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === 'photos'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📸 Photos
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'content' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={documentData.name || ''}
                onChange={(e) => onFieldChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={documentData.email || ''}
                onChange={(e) => onFieldChange('email', e.target.value)}
                placeholder="your.email@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={documentData.phone || ''}
                onChange={(e) => onFieldChange('phone', e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={documentData.description || ''}
                onChange={(e) => onFieldChange('description', e.target.value)}
                placeholder="Tell us about yourself..."
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Primary Color
              </label>
              <div className="grid grid-cols-3 gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onFieldChange('primaryColor', color.value)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      documentData.primaryColor === color.value
                        ? 'border-gray-900 ring-2 ring-gray-900'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div
                      className="w-full h-8 rounded"
                      style={{ backgroundColor: color.value }}
                    />
                    <p className="text-xs text-center mt-1">{color.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Family
              </label>
              <select
                value={documentData.fontFamily || fontOptions[0].value}
                onChange={(e) => onFieldChange('fontFamily', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {fontOptions.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Font Size
              </label>
              <input
                type="range"
                min="12"
                max="24"
                value={documentData.fontSize || 16}
                onChange={(e) => onFieldChange('fontSize', parseInt(e.target.value))}
                className="w-full"
              />
              <p className="text-sm text-gray-600 text-center mt-1">
                {documentData.fontSize || 16}px
              </p>
            </div>
          </div>
        )}

        {activeTab === 'photos' && (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">📸</div>
              <p className="text-sm text-gray-600 mb-3">
                Photo upload feature coming soon!
              </p>
              <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition">
                Browse Files
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
