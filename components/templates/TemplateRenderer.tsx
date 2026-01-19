'use client'

import dynamic from 'next/dynamic'

// Dynamically import all template components
const templates: Record<string, any> = {
  // Marriage Biodata
  'mb-001': dynamic(() => import('./marriage/TraditionalHindu')),
  'mb-002': dynamic(() => import('./marriage/ModernMinimalist')),
  
  // Resume/CV
  'res-001': dynamic(() => import('./resume/ATSFriendly')),
  'res-002': dynamic(() => import('./resume/ATSFriendly')), // Using same template for now
  'res-003': dynamic(() => import('./resume/ATSFriendly')),
  'res-004': dynamic(() => import('./resume/ATSFriendly')),
  'res-005': dynamic(() => import('./resume/ATSFriendly')),
  
  // Business Cards
  'bc-001': dynamic(() => import('./business/MinimalistCard')),
  'bc-002': dynamic(() => import('./business/MinimalistCard')),
  'bc-003': dynamic(() => import('./business/MinimalistCard')),
  'bc-004': dynamic(() => import('./business/MinimalistCard')),
  'bc-005': dynamic(() => import('./business/MinimalistCard')),
  
  // Certificates
  'cert-001': dynamic(() => import('./certificate/AchievementCert')),
  'cert-002': dynamic(() => import('./certificate/AchievementCert')),
  'cert-003': dynamic(() => import('./certificate/AchievementCert')),
  
  // Wedding Invitations (using marriage templates for now)
  'wed-001': dynamic(() => import('./marriage/TraditionalHindu')),
  'wed-002': dynamic(() => import('./marriage/ModernMinimalist')),
}

interface TemplateRendererProps {
  templateId: string
  data: Record<string, any>
  colors?: Record<string, string>
}

export default function TemplateRenderer({ templateId, data, colors }: TemplateRendererProps) {
  const TemplateComponent = templates[templateId]

  if (!TemplateComponent) {
    // Fallback for templates without specific components yet
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl text-center">
          <div className="text-8xl mb-6">🎨</div>
          <h3 className="text-3xl font-bold mb-4 text-gray-900">Template Preview</h3>
          <p className="text-lg text-gray-600 mb-6">Template ID: <strong>{templateId}</strong></p>
          
          <div className="bg-gray-50 p-6 rounded-lg text-left">
            <h4 className="font-bold mb-3 text-lg">Your Information:</h4>
            <div className="space-y-2 text-sm">
              {Object.keys(data).filter(key => data[key]).map(key => (
                <div key={key} className="flex gap-2">
                  <span className="font-medium text-gray-700 capitalize">{key}:</span>
                  <span className="text-gray-600">{String(data[key]).substring(0, 50)}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              💡 This template's visual design is being created. Your data is saved and will appear when the design is ready!
            </p>
          </div>
        </div>
      </div>
    )
  }

  return <TemplateComponent data={data} colors={colors} />
}
