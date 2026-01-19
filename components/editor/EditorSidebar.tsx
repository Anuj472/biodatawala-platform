'use client'

import { useState, useEffect } from 'react'
import { getFieldsByTemplateId, TemplateFieldGroup } from '@/lib/template-fields'

interface EditorSidebarProps {
  onFieldChange: (field: string, value: any) => void
  documentData?: Record<string, any>
  templateId: string
}

export default function EditorSidebar({ onFieldChange, documentData = {}, templateId }: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'design'>('content')
  const [fieldGroups, setFieldGroups] = useState<TemplateFieldGroup[]>([])

  useEffect(() => {
    const fields = getFieldsByTemplateId(templateId)
    setFieldGroups(fields)
  }, [templateId])

  const colors = [
    { name: 'Blue', value: '#1e40af' },
    { name: 'Purple', value: '#7c3aed' },
    { name: 'Green', value: '#059669' },
    { name: 'Red', value: '#dc2626' },
    { name: 'Orange', value: '#ea580c' },
    { name: 'Pink', value: '#db2777' },
  ]

  const fonts = [
    'Inter',
    'Roboto',
    'Playfair Display',
    'Montserrat',
    'Lora',
  ]

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('content')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'content'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          📝 Content
        </button>
        <button
          onClick={() => setActiveTab('design')}
          className={`flex-1 px-4 py-3 text-sm font-medium transition ${
            activeTab === 'design'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          🎨 Design
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6">
        {activeTab === 'content' && (
          <div className="space-y-6">
            {fieldGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-4">
                <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  {group.title}
                </h3>
                {group.fields.map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    
                    {field.type === 'textarea' ? (
                      <textarea
                        value={documentData[field.id] || ''}
                        onChange={(e) => onFieldChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      />
                    ) : field.type === 'select' ? (
                      <select
                        value={documentData[field.id] || ''}
                        onChange={(e) => onFieldChange(field.id, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      >
                        <option value="">Select {field.label}</option>
                        {field.options?.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={documentData[field.id] || ''}
                        onChange={(e) => onFieldChange(field.id, e.target.value)}
                        placeholder={field.placeholder}
                        maxLength={field.maxLength}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    )}
                    
                    {field.maxLength && (
                      <p className="text-xs text-gray-500 mt-1">
                        {(documentData[field.id] || '').length} / {field.maxLength}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
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
                        ? 'border-gray-900 scale-105'
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
                  <option key={font} value={font}>
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
                className="w-full"
              />
            </div>
          </div>
        )}
      </div>

      {/* Info Banner */}
      <div className="p-4 bg-blue-50 border-t border-blue-100">
        <p className="text-xs text-blue-800">
          💡 <strong>Free Forever!</strong> No login required. Your work is saved in your browser.
        </p>
      </div>
    </div>
  )
}
