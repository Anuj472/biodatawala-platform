'use client';

import { useState } from 'react';
import EditorSidebar from './EditorSidebar';
import EditorCanvas from './EditorCanvas';
import EditorToolbar from './EditorToolbar';

interface EditorLayoutProps {
  templateId: string;
}

export default function EditorLayout({ templateId }: EditorLayoutProps) {
  const [documentData, setDocumentData] = useState({});

  const handleFieldChange = (field: string, value: any) => {
    setDocumentData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log('Saving document:', documentData);
    // TODO: Implement save functionality
  };

  const handleDownload = (format: 'pdf' | 'jpg' | 'png') => {
    console.log('Downloading as:', format);
    // TODO: Implement download functionality
  };

  return (
    <div className="h-screen flex flex-col">
      <EditorToolbar 
        onSave={handleSave}
        onDownload={handleDownload}
        templateId={templateId}
      />
      
      <div className="flex-1 flex overflow-hidden">
        <EditorSidebar onFieldChange={handleFieldChange} />
        <EditorCanvas templateId={templateId} />
      </div>
    </div>
  );
}
