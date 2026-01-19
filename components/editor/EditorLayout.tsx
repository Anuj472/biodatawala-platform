'use client';

import { useState } from 'react';
import EditorSidebar from './EditorSidebar';
import EditorCanvas from './EditorCanvas';
import EditorToolbar from './EditorToolbar';

interface EditorLayoutProps {
  templateId: string;
  templateName: string;
}

export default function EditorLayout({ templateId, templateName }: EditorLayoutProps) {
  const [documentData, setDocumentData] = useState<Record<string, any>>({});

  const handleFieldChange = (field: string, value: any) => {
    setDocumentData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving document:', documentData);
    alert('Document saved! (Database integration coming soon)');
  };

  const handleDownload = (format: 'pdf' | 'jpg' | 'png') => {
    console.log('Downloading as:', format);
    alert(`Download as ${format.toUpperCase()} will be available soon!`);
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
        <EditorSidebar onFieldChange={handleFieldChange} />
        <EditorCanvas templateId={templateId} documentData={documentData} />
      </div>
    </div>
  );
}
