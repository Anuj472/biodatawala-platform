'use client';

import { useState, useEffect } from 'react';
import EditorSidebar from './EditorSidebar';
import EditorCanvas from './EditorCanvas';
import EditorToolbar from './EditorToolbar';

interface EditorLayoutProps {
  templateId: string;
  templateName: string;
}

export default function EditorLayout({ templateId, templateName }: EditorLayoutProps) {
  const [documentData, setDocumentData] = useState<Record<string, any>>({});

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem(`template_${templateId}`);
    if (savedData) {
      try {
        setDocumentData(JSON.parse(savedData));
      } catch (e) {
        console.error('Failed to load saved data:', e);
      }
    }
  }, [templateId]);

  const handleFieldChange = (field: string, value: any) => {
    setDocumentData(prev => {
      const newData = {
        ...prev,
        [field]: value,
      };
      // Auto-save to localStorage
      localStorage.setItem(`template_${templateId}`, JSON.stringify(newData));
      return newData;
    });
  };

  const handleSave = () => {
    localStorage.setItem(`template_${templateId}`, JSON.stringify(documentData));
    alert('✅ Document saved to your browser! Your changes are safe.');
  };

  const handleDownload = (format: 'pdf' | 'jpg' | 'png') => {
    console.log('Downloading as:', format);
    alert(`🚀 Download as ${format.toUpperCase()} feature coming soon!\n\nYour document will be downloaded in high quality ${format.toUpperCase()} format.`);
  };

  return (
    <div className="h-screen flex flex-col">
      <EditorToolbar 
        onSave={handleSave}
        onDownload={handleDownload}
        templateId={templateId}
        templateName={templateName}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar onFieldChange={handleFieldChange} documentData={documentData} />
        <EditorCanvas templateId={templateId} documentData={documentData} />
      </div>
    </div>
  );
}
