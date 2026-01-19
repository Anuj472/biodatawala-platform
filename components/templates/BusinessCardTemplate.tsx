'use client'

interface BusinessCardTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function BusinessCardTemplate({ data, templateId }: BusinessCardTemplateProps) {
  const primaryColor = data.primaryColor || '#1e40af'
  const fontFamily = data.fontFamily || 'Inter'

  // Business card is smaller - 3.5" x 2" landscape
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-8">
      <div 
        className="w-[600px] h-[350px] bg-white shadow-2xl rounded-lg overflow-hidden"
        style={{ fontFamily }}
      >
        {templateId === 'bc-001' ? (
          // Minimalist Professional
          <div className="h-full flex">
            <div className="w-1/3 p-6 flex flex-col justify-between" style={{ backgroundColor: primaryColor }}>
              <div className="text-white">
                <div className="text-4xl mb-2">👤</div>
                <h2 className="text-2xl font-bold">{data.fullName || 'Your Name'}</h2>
              </div>
            </div>
            <div className="w-2/3 p-6 flex flex-col justify-between">
              <div>
                <p className="text-lg font-semibold mb-1" style={{ color: primaryColor }}>{data.jobTitle || 'Job Title'}</p>
                <p className="text-sm font-medium text-gray-600 mb-4">{data.companyName || 'Company Name'}</p>
              </div>
              <div className="space-y-1 text-sm text-gray-700">
                <p>📞 {data.phone || '+91 98765 43210'}</p>
                <p>📧 {data.email || 'email@company.com'}</p>
                <p>🌐 {data.website || 'www.company.com'}</p>
                {data.address && <p>📍 {data.address}</p>}
              </div>
            </div>
          </div>
        ) : (
          // Default design
          <div className="h-full p-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1" style={{ color: primaryColor }}>
                {data.fullName || 'Your Name'}
              </h1>
              <p className="text-lg text-gray-700">{data.jobTitle || 'Job Title'}</p>
              <p className="text-sm font-medium text-gray-600">{data.companyName || 'Company Name'}</p>
            </div>
            <div className="space-y-1 text-sm">
              <p>📞 {data.phone || '+91 98765 43210'}</p>
              <p>📧 {data.email || 'email@company.com'}</p>
              <p>🌐 {data.website || 'www.company.com'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
