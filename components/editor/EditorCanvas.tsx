'use client';

import { useState } from 'react';
import Button from '../common/Button';

interface EditorCanvasProps {
  templateId: string;
}

export default function EditorCanvas({ templateId }: EditorCanvasProps) {
  const [zoom, setZoom] = useState(100);

  return (
    <div className="flex-1 bg-gray-100 p-8 overflow-auto">
      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">Zoom:</span>
          <button 
            onClick={() => setZoom(Math.max(25, zoom - 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <button 
            onClick={() => setZoom(Math.min(200, zoom + 25))}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm">Preview</Button>
          <Button size="sm">Save</Button>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex items-center justify-center min-h-[800px]">
        <div 
          className="bg-white shadow-2xl"
          style={{
            width: `${(210 * zoom) / 100}mm`,
            height: `${(297 * zoom) / 100}mm`,
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
          }}
        >
          {/* Template content will be rendered here */}
          <div className="w-full h-full p-8 border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-400 mt-20">
              <svg className="w-24 h-24 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <p className="text-lg">Template: {templateId}</p>
              <p className="text-sm mt-2">Editor canvas will render here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
