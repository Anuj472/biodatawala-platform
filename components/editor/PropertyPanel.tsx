'use client';

import { useState } from 'react';
import Card from '@/components/common/Card';

interface PropertyPanelProps {
  selectedElement?: string | null;
  onPropertyChange?: (property: string, value: any) => void;
}

export default function PropertyPanel({ selectedElement, onPropertyChange }: PropertyPanelProps) {
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'layout'>('content');

  const tabs = [
    { id: 'content', label: 'Content', icon: '📝' },
    { id: 'style', label: 'Style', icon: '🎨' },
    { id: 'layout', label: 'Layout', icon: '📐' },
  ];

  return (
    <div className="w-80 bg-white border-l flex flex-col h-full">
      {/* Tabs */}
      <div className="border-b flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panel Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {!selectedElement ? (
          <div className="text-center py-12">
            <div className="text-4xl mb-3">👆</div>
            <p className="text-gray-500 text-sm">
              Click on any element in the canvas to edit its properties
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {activeTab === 'content' && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Text Content</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={4}
                    placeholder="Enter text content..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Font Family</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Arial</option>
                    <option>Times New Roman</option>
                    <option>Georgia</option>
                    <option>Helvetica</option>
                    <option>Courier New</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Upload Image</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <svg className="w-8 h-8 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 10MB</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'style' && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Font Size</label>
                  <input
                    type="range"
                    min="8"
                    max="72"
                    defaultValue="16"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>8px</span>
                    <span>72px</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Text Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      defaultValue="#000000"
                      className="w-12 h-12 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#000000"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Background Color</label>
                  <div className="flex gap-2">
                    <input
                      type="color"
                      defaultValue="#ffffff"
                      className="w-12 h-12 rounded border border-gray-300 cursor-pointer"
                    />
                    <input
                      type="text"
                      defaultValue="#ffffff"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Border</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">Width</label>
                      <input
                        type="number"
                        min="0"
                        max="10"
                        defaultValue="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Color</label>
                      <input
                        type="color"
                        defaultValue="#000000"
                        className="w-full h-10 rounded border border-gray-300 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'layout' && (
              <>
                <div>
                  <label className="block text-sm font-semibold mb-2">Position</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">X</label>
                      <input
                        type="number"
                        defaultValue="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Y</label>
                      <input
                        type="number"
                        defaultValue="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Size</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">Width</label>
                      <input
                        type="number"
                        defaultValue="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Height</label>
                      <input
                        type="number"
                        defaultValue="100"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Padding</label>
                  <div className="grid grid-cols-4 gap-2">
                    <div>
                      <label className="text-xs text-gray-600">Top</label>
                      <input type="number" defaultValue="0" className="w-full px-2 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Right</label>
                      <input type="number" defaultValue="0" className="w-full px-2 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Bottom</label>
                      <input type="number" defaultValue="0" className="w-full px-2 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600">Left</label>
                      <input type="number" defaultValue="0" className="w-full px-2 py-2 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Opacity</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="100"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>0%</span>
                    <span>100%</span>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
