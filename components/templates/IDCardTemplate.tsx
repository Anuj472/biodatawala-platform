'use client'

interface IDCardTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function IDCardTemplate({ data, templateId }: IDCardTemplateProps) {
  const primaryColor = data.primaryColor || '#1e40af'
  const fontFamily = data.fontFamily || 'Inter'

  // ID Card size - similar to credit card
  return (
    <div className="flex items-center justify-center h-full bg-gray-100 p-8">
      <div className="w-[600px] h-[380px] bg-white shadow-2xl rounded-lg overflow-hidden" style={{ fontFamily }}>
        {/* Header */}
        <div className="p-4 text-white text-center" style={{ backgroundColor: primaryColor }}>
          <h2 className="text-2xl font-bold">{data.organizationName || 'Organization Name'}</h2>
          <p className="text-sm">{data.department || 'Department'}</p>
        </div>

        {/* Body */}
        <div className="p-6 flex gap-6">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-6xl">
              👤
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3" style={{ color: primaryColor }}>
              {data.fullName || 'Full Name'}
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Designation:</strong> {data.designation || 'Job Title'}</p>
              <p><strong>ID Number:</strong> {data.employeeId || 'EMP001'}</p>
              {data.dateOfBirth && <p><strong>DOB:</strong> {data.dateOfBirth}</p>}
              {data.bloodGroup && <p><strong>Blood Group:</strong> {data.bloodGroup}</p>}
              {data.phone && <p><strong>Phone:</strong> {data.phone}</p>}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-4 flex justify-between items-center text-xs text-gray-600">
          <div>
            <p><strong>Issue:</strong> {data.issueDate || 'DD/MM/YYYY'}</p>
            {data.expiryDate && <p><strong>Expiry:</strong> {data.expiryDate}</p>}
          </div>
          <div className="text-right">
            <p className="font-bold" style={{ color: primaryColor }}>Authorized ID Card</p>
          </div>
        </div>
      </div>
    </div>
  )
}
