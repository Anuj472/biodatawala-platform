'use client';

import Button from '@/components/common/Button';

interface EditorToolbarProps {
  onSave?: () => void;
  onUndo?: () => void;
  onRedo?: () => void;
  onDownload?: () => void;
  canUndo?: boolean;
  canRedo?: boolean;
}

export default function EditorToolbar({
  onSave,
  onUndo,
  onRedo,
  onDownload,
  canUndo = false,
  canRedo = false,
}: EditorToolbarProps) {
  return (
    <div className="bg-white border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        {/* Undo/Redo */}
        <button
          onClick={onUndo}
          disabled={!canUndo}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Undo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Redo"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
          </svg>
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Text Tools */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Bold">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h5a4 4 0 001.855-7.53A3.5 3.5 0 0010 3H5zm5 5a1.5 1.5 0 100-3H6v3h4zm-4 2v4h5a2 2 0 100-4H6z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Italic">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-1.06l-2.4 8H11.5a.5.5 0 010 1h-3a.5.5 0 010-1h1.06l2.4-8H10.5a.5.5 0 01-.5-.5z"/>
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Underline">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 19h14v-1H3v1zm7-18a4 4 0 00-4 4v6a4 4 0 008 0V5a4 4 0 00-4-4zM9 5a1 1 0 012 0v6a1 1 0 01-2 0V5z"/>
          </svg>
        </button>

        <div className="w-px h-6 bg-gray-300 mx-2"></div>

        {/* Alignment */}
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Align Left">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Align Center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm-2 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm2 4a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Align Right">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1zm-4 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm4 4a1 1 0 011-1h8a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" onClick={onSave}>
          Save Draft
        </Button>
        <Button size="sm" onClick={onDownload}>
          Download PDF
        </Button>
      </div>
    </div>
  );
}
