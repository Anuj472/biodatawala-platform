'use client';

import { useState } from 'react';
import EditorToolbar from './EditorToolbar';
import EditorCanvas from './EditorCanvas';
import EditorSidebar from './EditorSidebar';
import { Template } from '@/types';

interface TemplateEditorProps {
  template: Template;
}

export default function TemplateEditor({ template }: TemplateEditorProps) {
  const [zoom, setZoom] = useState(100);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [canvasData, setCanvasData] = useState<any>({});

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 10, 50));
  };

  const handleReset = () => {
    setZoom(100);
  };

  const handleSave = () => {
    // Save logic here
    console.log('Saving template...', canvasData);
  };

  const handleDownload = (format: 'pdf' | 'jpg' | 'png') => {
    // Download logic here
    console.log(`Downloading as ${format}...`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Toolbar */}
      <EditorToolbar
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
        onSave={handleSave}
        onDownload={handleDownload}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <EditorSidebar
          template={template}
          onElementSelect={setSelectedElement}
          selectedElement={selectedElement}
        />

        {/* Canvas */}
        <div className="flex-1 p-8 overflow-auto">
          <EditorCanvas
            template={template}
            zoom={zoom}
            selectedElement={selectedElement}
            onElementSelect={setSelectedElement}
            canvasData={canvasData}
            onCanvasDataChange={setCanvasData}
          />
        </div>
      </div>
    </div>
  );
}
