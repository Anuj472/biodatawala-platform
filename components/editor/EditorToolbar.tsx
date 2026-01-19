'use client';

import Link from 'next/link';
import Button from '../common/Button';

interface EditorToolbarProps {
  onSave: () => void;
  onDownload: (format: 'pdf' | 'jpg' | 'png') => void;
  templateId: string;
  templateName: string;
}

export default function EditorToolbar({ onSave, onDownload, templateId, templateName }: EditorToolbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard" className="text-xl font-bold text-blue-600 hover:text-blue-700">
          BioDatawala
        </Link>
        <span className="text-gray-400">|</span>
        <div>
          <span className="text-sm text-gray-600">{templateName}</span>
          <p className="text-xs text-gray-400">Template ID: {templateId}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button 
          onClick={onSave}
          className="text-sm text-gray-600 hover:text-gray-900 transition px-3 py-1.5 rounded hover:bg-gray-100"
        >
          💾 Save Draft
        </button>
        
        <div className="relative group">
          <Button size="sm">
            Download ▾
          </Button>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <button
              onClick={() => onDownload('pdf')}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span>📄</span> Download as PDF
            </button>
            <button
              onClick={() => onDownload('jpg')}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span>🖼️</span> Download as JPG
            </button>
            <button
              onClick={() => onDownload('png')}
              className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition flex items-center gap-2"
            >
              <span>🎨</span> Download as PNG
            </button>
          </div>
        </div>
        
        <Link href="/pricing">
          <Button variant="outline" size="sm">
            ⭐ Upgrade
          </Button>
        </Link>
      </div>
    </div>
  );
}
