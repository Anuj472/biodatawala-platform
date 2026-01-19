'use client'

interface TemplateProps {
  data: {
    recipientName?: string
    achievementTitle?: string
    description?: string
    date?: string
    signatureName?: string
    organizationName?: string
  }
  colors?: {
    primary?: string
    secondary?: string
  }
}

export default function AchievementCert({ data = {}, colors = {} }: TemplateProps) {
  const primaryColor = colors.primary || '#1e40af'
  const secondaryColor = colors.secondary || '#fef3c7'

  return (
    <div className="w-full h-full bg-white p-8 flex items-center justify-center" style={{ fontFamily: 'Georgia, serif' }}>
      <div className="w-full max-w-4xl border-8 p-8" style={{ borderColor: primaryColor }}>
        {/* Decorative Inner Border */}
        <div className="border-4 p-8" style={{ borderColor: secondaryColor }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-6xl mb-4" style={{ color: primaryColor }}>🏆</div>
            <h1 className="text-5xl font-bold mb-2" style={{ color: primaryColor }}>
              CERTIFICATE
            </h1>
            <p className="text-2xl" style={{ color: primaryColor }}>OF ACHIEVEMENT</p>
          </div>

          {/* Recipient */}
          <div className="text-center mb-6">
            <p className="text-lg mb-2">This Certificate is Proudly Presented to</p>
            <h2 className="text-4xl font-bold mb-4" style={{ color: primaryColor, fontFamily: 'Brush Script MT, cursive' }}>
              {data.recipientName || 'Recipient Name'}
            </h2>
          </div>

          {/* Achievement */}
          <div className="text-center mb-6">
            <p className="text-lg mb-2">For</p>
            <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>
              {data.achievementTitle || 'Outstanding Achievement'}
            </h3>
            <p className="text-base text-gray-700 max-w-2xl mx-auto">
              {data.description || 'In recognition of exceptional performance and dedication'}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end mt-12">
            <div className="text-center">
              <div className="border-t-2 pt-2 mb-1" style={{ borderColor: primaryColor, width: '150px' }}>
                <p className="font-bold">{data.signatureName || 'Authority Name'}</p>
              </div>
              <p className="text-sm text-gray-600">Signature</p>
            </div>

            <div className="text-center">
              <p className="text-sm font-bold mb-1">{data.organizationName || 'Organization Name'}</p>
              <p className="text-sm text-gray-600">{data.date || 'Date: ' + new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
