'use client';

import { useState } from 'react';
import Button from '../common/Button';

interface EditorCanvasProps {
  templateId: string;
  documentData: Record<string, any>;
}

export default function EditorCanvas({ templateId, documentData }: EditorCanvasProps) {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Zoom:</span>
          <button 
            onClick={() => setZoom(Math.max(25, zoom - 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
          >
            −
          </button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <button 
            onClick={() => setZoom(Math.min(200, zoom + 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 font-bold"
          >
            +
          </button>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">📱 Mobile View</Button>
          <Button variant="outline" size="sm">🖥️ Desktop View</Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex items-center justify-center min-h-[800px]">
        <div 
          className="bg-white shadow-2xl transition-transform"
          style={{
            width: '210mm',
            height: '297mm',
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
          }}
        >
          {/* Template Preview Area */}
          <div className="w-full h-full p-12 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4" style={{ color: documentData.primaryColor || '#1e40af' }}>
                {documentData.name || 'Your Name Here'}
              </h1>
              <p className="text-lg text-gray-600">
                {documentData.email || 'your.email@example.com'}
              </p>
              <p className="text-lg text-gray-600">
                {documentData.phone || '+91 XXXXX XXXXX'}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-3" style={{ color: documentData.primaryColor || '#1e40af' }}>
                About
              </h2>
              <p className="text-gray-700 leading-relaxed" style={{ fontFamily: documentData.fontFamily || 'inherit' }}>
                {documentData.description || 'Enter your description in the sidebar to see it appear here. This is a live preview of your template.'}
              </p>
            </div>

            <div className="text-center text-gray-400 text-sm mt-8">
              <p>Template ID: {templateId}</p>
              <p className="mt-2">✨ Customize using the sidebar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
