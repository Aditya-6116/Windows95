import React, { useState } from 'react';

const CHARACTERS = Array.from({ length: 224 }, (_, i) => String.fromCharCode(i + 32));

export default function CharacterMap({ winId }) {
  const [font, setFont] = useState('Arial');
  const [selectedChar, setSelectedChar] = useState('A');
  const [copiedText, setCopiedText] = useState('');

  const handleSelect = (char) => {
    setSelectedChar(char);
  };

  const handleAppend = () => {
    setCopiedText((prev) => prev + selectedChar);
  };

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copiedText);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11, background: '#c0c0c0', padding: 6, gap: 6 }}>
      {/* Font selector */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <label>Font:</label>
        <select
          className="win-input"
          value={font}
          onChange={(e) => setFont(e.target.value)}
          style={{ flex: 1 }}
        >
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="MS Sans Serif">MS Sans Serif</option>
          <option value="Tahoma">Tahoma</option>
        </select>
      </div>

      {/* Grid */}
      <div
        className="win-inset"
        style={{
          flex: 1,
          background: '#ffffff',
          overflowY: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(16, 1fr)',
          gap: 1,
          padding: 2,
        }}
      >
        {CHARACTERS.map((char, index) => {
          const isSelected = selectedChar === char;
          return (
            <button
              key={index}
              onClick={() => handleSelect(char)}
              style={{
                fontFamily: font,
                fontSize: 12,
                height: 22,
                border: isSelected ? '1px solid #000080' : '1px solid #e0e0e0',
                background: isSelected ? '#000080' : 'transparent',
                color: isSelected ? '#ffffff' : '#000000',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 0,
              }}
            >
              {char}
            </button>
          );
        })}
      </div>

      {/* Copy / Select controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <div
          className="win-inset"
          style={{
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            fontFamily: font,
            background: '#ffffff',
          }}
        >
          {selectedChar}
        </div>

        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 10 }}>Characters to copy:</span>
            <input
              className="win-input"
              style={{ flex: 1, fontFamily: font, fontSize: 12 }}
              value={copiedText}
              onChange={(e) => setCopiedText(e.target.value)}
            />
          </div>
          <div style={{ display: 'flex', gap: 4, justifyContent: 'flex-end' }}>
            <button className="btn-win" style={{ padding: '2px 8px' }} onClick={handleAppend}>
              Select
            </button>
            <button className="btn-win" style={{ padding: '2px 8px' }} onClick={handleCopy}>
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="win-statusbar" style={{ marginTop: 2 }}>
        <div className="win-statusbar-panel" style={{ flex: 1 }}>
          Keystroke: U+{selectedChar.charCodeAt(0).toString(16).padStart(4, '0').toUpperCase()}
        </div>
      </div>
    </div>
  );
}
