'use client'

import dynamic from 'next/dynamic'

// Dynamically import all template components
const templates: Record<string, any> = {
  // Marriage Biodata
  'mb-001': dynamic(() => import('./marriage/TraditionalHindu')),
  'mb-002': dynamic(() => import('./marriage/ModernMinimalist')),
  // More templates will be added here
}

interface TemplateRendererProps {
  templateId: string
  data: Record<string, any>
  colors?: Record<string, string>
}

export default function TemplateRenderer({ templateId, data, colors }: TemplateRendererProps) {
  const TemplateComponent = templates[templateId]

  if (!TemplateComponent) {
    return (
      <div className="w-full h-full bg-gray-50 flex items-center justify-center p-8">
        <div className="text-center">
          <div className="text-6xl mb-4">🎨</div>
          <h3 className="text-2xl font-bold mb-2">Template Preview</h3>
          <p className="text-gray-600 mb-4">Template ID: {templateId}</p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto text-left">
            <h4 className="font-bold mb-2">Your Information:</h4>
            <pre className="text-sm bg-gray-100 p-4 rounded overflow-auto">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    )
  }

  return <TemplateComponent data={data} colors={colors} />
}
