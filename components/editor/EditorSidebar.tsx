'use client';

import { useState } from 'react';
import { Template } from '@/types';

interface EditorSidebarProps {
  template: Template;
  onElementSelect: (id: string | null) => void;
  selectedElement: string | null;
}

export default function EditorSidebar({
  template,
  onElementSelect,
  selectedElement,
}: EditorSidebarProps) {
  const [activeTab, setActiveTab] = useState<'elements' | 'text' | 'images' | 'colors'>('elements');

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          onClick={() => setActiveTab('elements')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'elements'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Elements
        </button>
        <button
          onClick={() => setActiveTab('text')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'text'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Text
        </button>
        <button
          onClick={() => setActiveTab('images')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'images'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Images
        </button>
        <button
          onClick={() => setActiveTab('colors')}
          className={`flex-1 px-4 py-3 text-sm font-medium ${
            activeTab === 'colors'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Colors
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'elements' && (
          <div className="space-y-2">
            <h3 className="font-semibold text-sm mb-3">Template Elements</h3>
            <div className="space-y-2">
              <button className="w-full text-left p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50">
                Header
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50">
                Main Content
              </button>
              <button className="w-full text-left p-3 border border-gray-200 rounded hover:border-blue-500 hover:bg-blue-50">
                Footer
              </button>
            </div>
          </div>
        )}

        {activeTab === 'text' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Font Family</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded">
                <option>Arial</option>
                <option>Helvetica</option>
                <option>Times New Roman</option>
                <option>Georgia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Font Size</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                defaultValue={16}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Text Align</label>
              <div className="grid grid-cols-3 gap-2">
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">Left</button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">Center</button>
                <button className="p-2 border border-gray-300 rounded hover:bg-gray-50">Right</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'images' && (
          <div className="space-y-4">
            <button className="w-full p-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50">
              <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-600">Click to upload image</p>
            </button>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Primary Color</label>
              <input
                type="color"
                className="w-full h-10 rounded border border-gray-300"
                defaultValue="#3B82F6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Secondary Color</label>
              <input
                type="color"
                className="w-full h-10 rounded border border-gray-300"
                defaultValue="#8B5CF6"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Background Color</label>
              <input
                type="color"
                className="w-full h-10 rounded border border-gray-300"
                defaultValue="#FFFFFF"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
