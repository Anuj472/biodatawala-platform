'use client'

import { useState, useEffect } from 'react'
import EditorSidebar from './EditorSidebar'
import EditorCanvas from './EditorCanvas'
import EditorToolbar from './EditorToolbar'

interface EditorLayoutProps {
  templateId: string
  templateName: string
}

export default function EditorLayout({ templateId, templateName }: EditorLayoutProps) {
  const [documentData, setDocumentData] = useState<Record<string, any>>({
    primaryColor: '#1e40af',
    fontFamily: 'Inter',
    fontSize: 16,
  })

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(`template-${templateId}`)
    if (savedData) {
      try {
        setDocumentData(JSON.parse(savedData))
      } catch (e) {
        console.error('Failed to load saved data:', e)
      }
    }
  }, [templateId])

  const handleFieldChange = (field: string, value: any) => {
    setDocumentData(prev => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSave = () => {
    // Save to browser localStorage (no account needed)
    localStorage.setItem(`template-${templateId}`, JSON.stringify(documentData))
    alert('✅ Saved to your browser! Your work is safe even if you close the page.')
  }

  const handleDownload = (format: 'pdf' | 'jpg' | 'png') => {
    alert(`📥 Download as ${format.toUpperCase()} will be available soon!\n\nFor now, you can:\n- Take a screenshot (Print Screen)\n- Use browser's Print to PDF (Ctrl+P)\n- Right-click on canvas and Save Image`)
  }

  return (
    <div className="h-screen flex flex-col">
      <EditorToolbar 
        onSave={handleSave}
        onDownload={handleDownload}
        templateId={templateId}
        templateName={templateName}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar 
          onFieldChange={handleFieldChange} 
          documentData={documentData}
          templateId={templateId}
        />
        <EditorCanvas templateId={templateId} documentData={documentData} />
      </div>
    </div>
  )
}
