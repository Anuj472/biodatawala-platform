'use client'

interface ResumeTemplateProps {
  data: Record<string, any>
  templateId: string
}

export default function ResumeTemplate({ data, templateId }: ResumeTemplateProps) {
  const primaryColor = data.primaryColor || '#1e40af'
  const fontFamily = data.fontFamily || 'Inter'

  if (templateId === 'res-001') {
    // ATS-Friendly Professional Resume
    return (
      <div className="h-full p-10 bg-white" style={{ fontFamily }}>
        {/* Header */}
        <div className="text-center mb-6 pb-4 border-b-2" style={{ borderColor: primaryColor }}>
          <h1 className="text-4xl font-bold mb-2" style={{ color: primaryColor }}>
            {data.fullName || 'Your Full Name'}
          </h1>
          <p className="text-xl text-gray-700 mb-3">{data.jobTitle || 'Professional Title'}</p>
          <div className="flex justify-center gap-4 text-sm text-gray-600">
            <span>📧 {data.email || 'email@example.com'}</span>
            <span>📞 {data.phone || '+91 98765 43210'}</span>
            <span>📍 {data.location || 'City, State'}</span>
          </div>
          {data.linkedin && <p className="text-sm text-gray-600 mt-1">🔗 {data.linkedin}</p>}
        </div>

        {/* Professional Summary */}
        {data.summary && (
          <section className="mb-6">
            <h2 className="text-xl font-bold mb-2 pb-1 border-b" style={{ color: primaryColor }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-sm leading-relaxed text-gray-700">{data.summary}</p>
          </section>
        )}

        {/* Work Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor }}>
            WORK EXPERIENCE
          </h2>
          {data.experience1Title && (
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h3 className="text-lg font-bold">{data.experience1Title}</h3>
                <span className="text-sm text-gray-600">{data.experience1Duration || '2020 - Present'}</span>
              </div>
              <p className="text-sm font-medium text-gray-700 mb-1">{data.experience1Company || 'Company Name'}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{data.experience1Description || 'Key responsibilities and achievements...'}</p>
            </div>
          )}
        </section>

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor }}>
            EDUCATION
          </h2>
          <div>
            <h3 className="text-lg font-bold">{data.degree || 'Bachelor of Technology'}</h3>
            <p className="text-sm font-medium text-gray-700">{data.university || 'University Name'}</p>
            <p className="text-sm text-gray-600">{data.graduationYear || '2020'}</p>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-xl font-bold mb-3 pb-1 border-b" style={{ color: primaryColor }}>
            SKILLS
          </h2>
          {data.technicalSkills && (
            <div className="mb-3">
              <h3 className="text-sm font-bold mb-1">Technical Skills</h3>
              <p className="text-sm text-gray-700">{data.technicalSkills}</p>
            </div>
          )}
          {data.softSkills && (
            <div>
              <h3 className="text-sm font-bold mb-1">Soft Skills</h3>
              <p className="text-sm text-gray-700">{data.softSkills}</p>
            </div>
          )}
        </section>
      </div>
    )
  }

  // Default resume template
  return (
    <div className="h-full p-10 bg-white" style={{ fontFamily }}>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold" style={{ color: primaryColor }}>
          {data.fullName || 'Your Name'}
        </h1>
        <p className="text-xl">{data.jobTitle || 'Job Title'}</p>
      </div>
      <div className="bg-gray-50 rounded p-6 text-center">
        <p className="text-gray-600">Start filling in the sidebar to build your resume!</p>
      </div>
    </div>
  )
}
