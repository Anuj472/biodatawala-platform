'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface EditorCanvasProps {
  templateId: string;
  data?: Record<string, any>;
  onDataChange?: (data: Record<string, any>) => void;
}

export default function EditorCanvas({ templateId, data = {}, onDataChange }: EditorCanvasProps) {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(100);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  useEffect(() => {
    // Load template structure and render
    // This will be implemented with actual canvas rendering logic
    console.log('Loading template:', templateId);
  }, [templateId]);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 10, 50));
  };

  const handleReset = () => {
    setZoom(100);
  };

  return (
    <div className="flex flex-col h-full bg-gray-100">
      {/* Zoom Controls */}
      <div className="bg-white border-b px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom Out"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <button
            onClick={handleZoomIn}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Zoom In"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-1 text-sm hover:bg-gray-100 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>

        <div className="text-sm text-gray-600">
          Template: <span className="font-medium">{templateId}</span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 overflow-auto p-8">
        <div
          className="mx-auto bg-white shadow-2xl"
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            width: '793px', // A4 width in pixels at 96 DPI
            minHeight: '1122px', // A4 height in pixels at 96 DPI
            transition: 'transform 0.2s ease',
          }}
        >
          <div ref={canvasRef} className="p-12">
            {/* Template Content Will Be Rendered Here */}
            <div className="space-y-6">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">
                  {data.title || 'Document Title'}
                </h1>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 p-8 rounded-lg text-center">
                <p className="text-gray-500">
                  Template preview will render here
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Click on elements to edit them
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold mb-2">Field 1</h3>
                  <p className="text-gray-600">{data.field1 || 'Content here'}</p>
                </div>
                <div className="border border-gray-200 p-4 rounded">
                  <h3 className="font-semibold mb-2">Field 2</h3>
                  <p className="text-gray-600">{data.field2 || 'Content here'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
