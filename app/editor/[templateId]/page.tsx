'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import EditorCanvas from '@/components/editor/EditorCanvas';
import EditorToolbar from '@/components/editor/EditorToolbar';
import PropertyPanel from '@/components/editor/PropertyPanel';

export default function TemplateEditor() {
  const params = useParams();
  const templateId = params.templateId as string;
  
  const [templateData, setTemplateData] = useState<Record<string, any>>({});
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const handleSave = () => {
    console.log('Saving template...', templateData);
    // Implement save functionality
  };

  const handleUndo = () => {
    console.log('Undo');
    // Implement undo functionality
  };

  const handleRedo = () => {
    console.log('Redo');
    // Implement redo functionality
  };

  const handleDownload = () => {
    console.log('Downloading...');
    // Implement PDF download
  };

  const handleDataChange = (data: Record<string, any>) => {
    setTemplateData(data);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Toolbar */}
      <EditorToolbar
        onSave={handleSave}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onDownload={handleDownload}
        canUndo={canUndo}
        canRedo={canRedo}
      />

      {/* Main Editor Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div className="flex-1">
          <EditorCanvas
            templateId={templateId}
            data={templateData}
            onDataChange={handleDataChange}
          />
        </div>

        {/* Property Panel */}
        <PropertyPanel />
      </div>
    </div>
  );
}
