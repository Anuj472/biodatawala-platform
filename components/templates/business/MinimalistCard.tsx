'use client'

interface TemplateProps {
  data: {
    name?: string
    title?: string
    company?: string
    email?: string
    phone?: string
    website?: string
    address?: string
  }
  colors?: {
    primary?: string
    secondary?: string
  }
}

export default function MinimalistCard({ data = {}, colors = {} }: TemplateProps) {
  const primaryColor = colors.primary || '#000000'
  const secondaryColor = colors.secondary || '#ffffff'

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 p-8">
      <div className="relative" style={{ width: '350px', height: '200px' }}>
        {/* Front Side */}
        <div 
          className="w-full h-full rounded-lg shadow-2xl p-6 flex flex-col justify-between"
          style={{ backgroundColor: secondaryColor, color: primaryColor, border: `2px solid ${primaryColor}` }}
        >
          {/* Top Section */}
          <div>
            <h1 className="text-2xl font-bold mb-1" style={{ color: primaryColor }}>
              {data.name || 'YOUR NAME'}
            </h1>
            <p className="text-sm opacity-80">{data.title || 'Professional Title'}</p>
            <p className="text-xs opacity-60 mt-1">{data.company || 'Company Name'}</p>
          </div>

          {/* Bottom Section */}
          <div className="space-y-1 text-xs">
            <div className="flex items-center gap-2">
              <span>📧</span>
              <span>{data.email || 'email@example.com'}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📱</span>
              <span>{data.phone || '+91 98765 43210'}</span>
            </div>
            {data.website && (
              <div className="flex items-center gap-2">
                <span>🌐</span>
                <span>{data.website}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
