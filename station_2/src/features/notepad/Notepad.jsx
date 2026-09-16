import React, { useState } from 'react';
import MenuBar from '../../components/menus/MenuBar';
import fileSystem from '../../data/fileSystem';
import HiddenChar from '../../components/puzzle/HiddenChar';

// Default clue content for new Notepad
const DEFAULT_NOTEPAD = `A-17 ________.\n\nA-17 ________.`;

function resolveContent(filePath, content) {
  if (content !== undefined) return content;
  if (!filePath) return DEFAULT_NOTEPAD;
  const parts = filePath.replace(/\\/g, '/').split('/').filter(Boolean);
  const drive = parts[0];
  if (!fileSystem[drive]) return 'File not found.';
  let node = fileSystem[drive];
  for (let i = 1; i < parts.length; i++) {
    node = node.children?.[parts[i]];
    if (!node) return 'File not found.';
  }
  return node.content || '';
}

export default function Notepad({ winId, filePath, panel, content: propContent, readOnly, isReadmeProp }) {
  const [text, setText] = useState(() => resolveContent(filePath, propContent));
  const [wordWrap, setWordWrap] = useState(true);

  const filename = filePath ? filePath.split('/').pop() : 'Untitled';

  // If this is opened as the README properties dialog
  if (isReadmeProp) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11, background: '#c0c0c0', padding: 10, gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, borderBottom: '1px solid #808080', paddingBottom: 8 }}>
          <span style={{ fontSize: 32 }}>📄</span>
          <div>
            <strong>README.TXT</strong>
            <div style={{ color: '#505050', fontSize: 10 }}>Laboratory Record & Orientation Document</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div>
            <strong>Type:</strong> Text Document <HiddenChar clueId="clue-02" fallbackChar="-" /> Plain text
          </div>
          <div>
            <strong>Location:</strong> C:\Lab\Records
          </div>
          <div>
            <strong>Size:</strong> 2.41 KB (2,472 bytes)
          </div>
          <div>
            <strong>Created:</strong> Thursday, December 03, 1998, 14:22:10
          </div>
          <div>
            <strong>Modified:</strong> Friday, December 04, 1998, 23:18:04
          </div>
          <div>
            <strong>Attributes:</strong> Read-only, Archive
          </div>
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end', gap: 6, borderTop: '1px solid #808080', paddingTop: 8 }}>
          <button className="btn-win" style={{ width: 70 }} onClick={() => {}}>OK</button>
        </div>
      </div>
    );
  }

  const menus = [
    {
      label: 'File',
      items: [
        { label: 'New', action: () => setText(''), disabled: readOnly },
        { separator: true },
        { label: 'Save', disabled: true },
        { label: 'Save As...', disabled: true },
        { separator: true },
        { label: 'Print...', disabled: true },
        { separator: true },
        { label: 'Exit', action: () => {} },
      ],
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', disabled: true },
        { separator: true },
        { label: 'Cut', disabled: readOnly },
        { label: 'Copy', disabled: true },
        { label: 'Paste', disabled: readOnly },
        { label: 'Delete', disabled: readOnly },
        { separator: true },
        { label: 'Select All', action: () => {} },
        { separator: true },
        { label: 'Time/Date', action: () => setText((t) => t + new Date().toLocaleString()) },
      ],
    },
    {
      label: 'Format',
      items: [
        { label: wordWrap ? '✓ Word Wrap' : '  Word Wrap', action: () => setWordWrap((w) => !w) },
        { label: 'Font...', disabled: true },
      ],
    },
    {
      label: 'View',
      items: [{ label: 'Status Bar', disabled: true }],
    },
    {
      label: 'Help',
      items: [{ label: 'Help Topics', disabled: true }, { separator: true }, { label: 'About Notepad', disabled: true }],
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      <MenuBar menus={menus} />
      <textarea
        style={{
          flex: 1,
          resize: 'none',
          border: 'none',
          outline: 'none',
          fontFamily: 'Courier New, monospace',
          fontSize: 12,
          padding: 6,
          background: 'white',
          color: '#000',
          whiteSpace: wordWrap ? 'pre-wrap' : 'pre',
          overflowX: wordWrap ? 'hidden' : 'auto',
          overflowY: 'auto',
          lineHeight: 1.4,
        }}
        value={text}
        onChange={(e) => !readOnly && setText(e.target.value)}
        readOnly={readOnly}
        spellCheck={false}
      />
      <div className="win-statusbar">
        <div className="win-statusbar-panel">{filename}</div>
        <div className="win-statusbar-panel" style={{ marginLeft: 'auto' }}>
          {text.length} chars
        </div>
      </div>
    </div>
  );
}
