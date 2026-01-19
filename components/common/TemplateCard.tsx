'use client'

import Link from 'next/link'
import { Template } from '@/types'

interface TemplateCardProps {
  template: Template
}

export default function TemplateCard({ template }: TemplateCardProps) {
  // Generate visual preview based on template category
  const getPreviewGradient = () => {
    if (template.id.startsWith('mb-')) return 'from-orange-100 to-yellow-100'
    if (template.id.startsWith('res-')) return 'from-blue-100 to-purple-100'
    if (template.id.startsWith('wed-')) return 'from-pink-100 to-purple-100'
    if (template.id.startsWith('bc-')) return 'from-gray-100 to-blue-100'
    if (template.id.startsWith('cert-')) return 'from-yellow-100 to-orange-100'
    if (template.id.startsWith('id-')) return 'from-indigo-100 to-blue-100'
    return 'from-gray-100 to-gray-200'
  }

  const getPreviewIcon = () => {
    if (template.id.startsWith('mb-')) return '🕉️'
    if (template.id.startsWith('res-')) return '📄'
    if (template.id.startsWith('wed-')) return '💒'
    if (template.id.startsWith('bc-')) return '💼'
    if (template.id.startsWith('cert-')) return '🏆'
    if (template.id.startsWith('id-')) return '🎫'
    return '📝'
  }

  const getStyleBadgeColor = () => {
    const colors: Record<string, string> = {
      traditional: 'bg-orange-100 text-orange-800',
      modern: 'bg-blue-100 text-blue-800',
      classic: 'bg-purple-100 text-purple-800',
      creative: 'bg-pink-100 text-pink-800',
      elegant: 'bg-indigo-100 text-indigo-800',
      minimalist: 'bg-gray-100 text-gray-800',
      professional: 'bg-green-100 text-green-800',
      colorful: 'bg-red-100 text-red-800',
    }
    return colors[template.style] || 'bg-gray-100 text-gray-800'
  }

  return (
    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200">
      {/* Thumbnail Preview */}
      <div className={`h-64 bg-gradient-to-br ${getPreviewGradient()} flex items-center justify-center relative overflow-hidden`}>
        <div className="text-8xl opacity-20 group-hover:opacity-30 transition-opacity">
          {getPreviewIcon()}
        </div>
        
        {/* Mini Preview Overlay */}
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="bg-white rounded shadow-lg p-4 w-full h-full flex flex-col">
            <div className="text-center flex-1 flex flex-col justify-center">
              <div className="text-4xl mb-2">{getPreviewIcon()}</div>
              <p className="text-sm font-bold text-gray-700">{template.name}</p>
              <p className="text-xs text-gray-500 mt-1">{template.style}</p>
            </div>
            <div className="text-xs text-gray-400 text-center">
              ID: {template.id}
            </div>
          </div>
        </div>

        {/* Premium Badge */}
        {template.isPremium && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
            ⭐ Premium
          </div>
        )}

        {/* Style Badge */}
        <div className={`absolute top-3 left-3 ${getStyleBadgeColor()} px-3 py-1 rounded-full text-xs font-medium capitalize`}>
          {template.style}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
          {template.name}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {template.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            href={`/editor/${template.id}`}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-blue-700 transition"
          >
            Use Template
          </Link>
          <Link
            href={`/template/${template.id}`}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 transition"
          >
            Preview
          </Link>
        </div>
      </div>
    </div>
  )
}
