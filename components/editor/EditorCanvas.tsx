'use client';

import { Template } from '@/types';

interface EditorCanvasProps {
  template: Template;
  zoom: number;
  selectedElement: string | null;
  onElementSelect: (id: string | null) => void;
  canvasData: any;
  onCanvasDataChange: (data: any) => void;
}

export default function EditorCanvas({
  template,
  zoom,
  selectedElement,
  onElementSelect,
  canvasData,
  onCanvasDataChange,
}: EditorCanvasProps) {
  return (
    <div className="flex items-center justify-center">
      <div
        className="bg-white shadow-2xl relative"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: 'center',
          width: '210mm', // A4 width
          height: '297mm', // A4 height
        }}
      >
        {/* Canvas Content */}
        <div className="w-full h-full p-8 border border-gray-200">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{template.name}</h1>
            <p className="text-gray-600 mb-6">{template.description}</p>
            
            {/* Placeholder content */}
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <p className="text-gray-400">Template Canvas Area</p>
                <p className="text-sm text-gray-400 mt-2">Click to edit elements</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded p-4">
                  <p className="text-sm text-gray-500">Text Field 1</p>
                </div>
                <div className="border border-gray-200 rounded p-4">
                  <p className="text-sm text-gray-500">Text Field 2</p>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-16 bg-gray-50">
                <p className="text-gray-400">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
