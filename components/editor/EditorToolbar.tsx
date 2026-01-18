'use client';

import Button from '../common/Button';

interface EditorToolbarProps {
  zoom: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onSave: () => void;
  onDownload: (format: 'pdf' | 'jpg' | 'png') => void;
}

export default function EditorToolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onReset,
  onSave,
  onDownload,
}: EditorToolbarProps) {
  return (
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold">Template Editor</h2>
      </div>

      <div className="flex items-center gap-2">
        {/* Zoom Controls */}
        <div className="flex items-center gap-2 border-r pr-4">
          <Button variant="ghost" size="sm" onClick={onZoomOut}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </Button>
          <span className="text-sm font-medium min-w-[60px] text-center">{zoom}%</span>
          <Button variant="ghost" size="sm" onClick={onZoomIn}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </Button>
          <Button variant="ghost" size="sm" onClick={onReset}>
            Reset
          </Button>
        </div>

        {/* Action Buttons */}
        <Button variant="outline" size="sm" onClick={onSave}>
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
          </svg>
          Save
        </Button>

        <div className="relative group">
          <Button size="sm">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </Button>
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
            <button
              onClick={() => onDownload('pdf')}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 first:rounded-t-lg"
            >
              Download as PDF
            </button>
            <button
              onClick={() => onDownload('jpg')}
              className="w-full text-left px-4 py-2 hover:bg-gray-50"
            >
              Download as JPG
            </button>
            <button
              onClick={() => onDownload('png')}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 last:rounded-b-lg"
            >
              Download as PNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
