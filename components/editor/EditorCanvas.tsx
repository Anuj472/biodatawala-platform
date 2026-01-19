'use client'

import { useState } from 'react'
import MarriageBiodataTemplate from '../templates/MarriageBiodataTemplate'
import ResumeTemplate from '../templates/ResumeTemplate'
import BusinessCardTemplate from '../templates/BusinessCardTemplate'
import CertificateTemplate from '../templates/CertificateTemplate'
import IDCardTemplate from '../templates/IDCardTemplate'
import WeddingInvitationTemplate from '../templates/WeddingInvitationTemplate'

interface EditorCanvasProps {
  templateId: string
  documentData: Record<string, any>
}

export default function EditorCanvas({ templateId, documentData }: EditorCanvasProps) {
  const [zoom, setZoom] = useState(75)

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 10, 200))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 10, 25))
  const handleZoomReset = () => setZoom(75)

  // Determine which template component to render based on template ID
  const renderTemplate = () => {
    const props = { data: documentData, templateId }

    if (templateId.startsWith('mb-')) {
      return <MarriageBiodataTemplate {...props} />
    } else if (templateId.startsWith('res-')) {
      return <ResumeTemplate {...props} />
    } else if (templateId.startsWith('wed-')) {
      return <WeddingInvitationTemplate {...props} />
    } else if (templateId.startsWith('bc-')) {
      return <BusinessCardTemplate {...props} />
    } else if (templateId.startsWith('cert-')) {
      return <CertificateTemplate {...props} />
    } else if (templateId.startsWith('id-')) {
      return <IDCardTemplate {...props} />
    }

    // Fallback
    return (
      <div className="h-full flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Template Preview</h2>
          <p className="text-gray-500">Template ID: {templateId}</p>
          <p className="text-sm text-gray-400 mt-4">Start filling the form to see live preview</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 bg-gray-100 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Zoom:</span>
          <button
            onClick={handleZoomOut}
            className="w-8 h-8 rounded hover:bg-gray-100 transition flex items-center justify-center"
            title="Zoom Out"
          >
            −
          </button>
          <span className="text-sm font-medium w-12 text-center">{zoom}%</span>
          <button
            onClick={handleZoomIn}
            className="w-8 h-8 rounded hover:bg-gray-100 transition flex items-center justify-center"
            title="Zoom In"
          >
            +
          </button>
          <button
            onClick={handleZoomReset}
            className="ml-2 px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>
        <div className="text-sm text-gray-500">
          💡 Tip: Changes update in real-time
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto p-8 flex items-center justify-center">
        <div
          className="bg-white shadow-2xl transition-transform duration-200"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'center center',
            width: '210mm', // A4 width
            height: '297mm', // A4 height
          }}
        >
          {renderTemplate()}
        </div>
      </div>
    </div>
  )
}
