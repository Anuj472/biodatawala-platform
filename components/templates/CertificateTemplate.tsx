'use client'

interface CertificateTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function CertificateTemplate({ data, templateId }: CertificateTemplateProps) {
  const primaryColor = data.primaryColor || '#1e40af'
  const fontFamily = data.fontFamily || 'Inter'

  return (
    <div className="h-full p-8 bg-gradient-to-br from-yellow-50 to-orange-50" style={{ fontFamily }}>
      <div className="h-full border-8 border-double" style={{ borderColor: primaryColor }}>
        <div className="h-full border-4" style={{ borderColor: primaryColor }}>
          <div className="h-full flex flex-col items-center justify-between p-12 bg-white">
            {/* Header */}
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h1 className="text-5xl font-bold mb-2" style={{ color: primaryColor }}>
                {data.certificateTitle || 'Certificate of Achievement'}
              </h1>
              <div className="w-32 h-1 bg-yellow-400 mx-auto rounded"></div>
            </div>

            {/* Body */}
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="text-xl mb-6">This certificate is proudly presented to</p>
              <h2 className="text-4xl font-bold mb-6" style={{ color: primaryColor }}>
                {data.recipientName || 'Recipient Name'}
              </h2>
              <p className="text-lg leading-relaxed max-w-2xl mx-auto">
                {data.description || 'For outstanding achievement and exceptional performance in...'}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end w-full">
              <div className="text-center">
                <div className="w-48 border-t-2 border-gray-400 mb-2"></div>
                <p className="font-bold">{data.signatoryName || 'Signatory Name'}</p>
                <p className="text-sm text-gray-600">{data.signatoryTitle || 'Director'}</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{data.organizationName || 'Organization Name'}</p>
                <p className="text-sm text-gray-600">Date: {data.dateIssued || 'DD/MM/YYYY'}</p>
                {data.certificateNumber && (
                  <p className="text-xs text-gray-500 mt-1">No: {data.certificateNumber}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
