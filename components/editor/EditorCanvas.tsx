'use client'

import { useState } from 'react'
import Button from '../common/Button'
import TemplateRenderer from '../templates/TemplateRenderer'

interface EditorCanvasProps {
  templateId: string
  documentData: Record<string, any>
}

export default function EditorCanvas({ templateId, documentData }: EditorCanvasProps) {
  const [zoom, setZoom] = useState(100)
  const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop')

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 font-medium">Zoom:</span>
          <button 
            onClick={() => setZoom(Math.max(25, zoom - 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold transition"
            disabled={zoom <= 25}
          >
            −
          </button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <button 
            onClick={() => setZoom(Math.min(200, zoom + 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold transition"
            disabled={zoom >= 200}
          >
            +
          </button>
          <button
            onClick={() => setZoom(100)}
            className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Reset
          </button>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-4 py-2 rounded transition ${
              viewMode === 'desktop'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🖥️ Desktop
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`px-4 py-2 rounded transition ${
              viewMode === 'mobile'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            📱 Mobile
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex items-start justify-center min-h-[800px]">
        <div 
          className="bg-white shadow-2xl transition-all duration-200 origin-top"
          style={{
            width: viewMode === 'desktop' ? '210mm' : '375px',
            minHeight: viewMode === 'desktop' ? '297mm' : '812px',
            transform: `scale(${zoom / 100})`,
            marginBottom: zoom < 100 ? '0' : '2rem',
          }}
        >
          {/* Actual Template Rendering */}
          <TemplateRenderer
            templateId={templateId}
            data={documentData}
            colors={{
              primary: documentData.primaryColor,
              secondary: documentData.secondaryColor,
            }}
          />
        </div>
      </div>
    </div>
  )
}
