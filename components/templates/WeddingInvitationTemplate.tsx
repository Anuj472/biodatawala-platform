'use client'

interface WeddingInvitationTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function WeddingInvitationTemplate({ data, templateId }: WeddingInvitationTemplateProps) {
  const primaryColor = data.primaryColor || '#db2777'
  const fontFamily = data.fontFamily || 'Playfair Display'

  return (
    <div className="h-full p-12 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50" style={{ fontFamily }}>
      <div className="h-full border-8 border-double border-pink-200 bg-white rounded-lg shadow-2xl">
        <div className="h-full p-12 flex flex-col items-center justify-between">
          {/* Header */}
          <div className="text-center">
            <div className="text-6xl mb-4">💒</div>
            <h1 className="text-4xl font-bold mb-4" style={{ color: primaryColor }}>
              Wedding Invitation
            </h1>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="text-2xl">👰</div>
              <div className="text-3xl">♥️</div>
              <div className="text-2xl">🤵</div>
            </div>
          </div>

          {/* Couple Names */}
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-2" style={{ color: primaryColor }}>
              {data.brideName || "Bride's Name"}
            </h2>
            <p className="text-3xl mb-2">&</p>
            <h2 className="text-5xl font-bold" style={{ color: primaryColor }}>
              {data.groomName || "Groom's Name"}
            </h2>
          </div>

          {/* Invitation Message */}
          {data.invitationMessage && (
            <div className="text-center max-w-2xl">
              <p className="text-lg italic text-gray-700 leading-relaxed">
                {data.invitationMessage}
              </p>
            </div>
          )}

          {/* Event Details */}
          <div className="text-center">
            <div className="mb-6">
              <p className="text-xl mb-2">Join us in celebrating our special day</p>
              <div className="w-32 h-1 bg-pink-300 mx-auto rounded mb-4"></div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-lg font-bold" style={{ color: primaryColor }}>📅 {data.weddingDate || 'DD/MM/YYYY'}</p>
                <p className="text-gray-700">🕒 {data.weddingTime || '10:00 AM'}</p>
              </div>
              
              <div>
                <p className="text-lg font-bold" style={{ color: primaryColor}}>🏛️ {data.venue || 'Venue Name'}</p>
                <p className="text-sm text-gray-600">{data.venueAddress || 'Venue Address'}</p>
              </div>

              {data.contactPhone && (
                <div className="mt-4 text-sm text-gray-600">
                  <p>For more details: {data.contactPhone}</p>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-500">Your presence is our greatest gift</p>
          </div>
        </div>
      </div>
    </div>
  )
}
