import React, { useState } from 'react';
import useOsStore from '../../store/osStore';
import hiddenCharacters from '../../data/hiddenCharacters';

export default function EvidencePanel() {
  const discoveredCharacters = useOsStore(s => s.discoveredCharacters);
  const [collapsed, setCollapsed] = useState(false);

  if (discoveredCharacters.length === 0) return null;

  const discovered = hiddenCharacters.filter(c => discoveredCharacters.includes(c.id));

  return (
    <div className="evidence-panel win-frame" style={{ zIndex: 9500 }} onClick={e => e.stopPropagation()}>
      {/* Mini title bar */}
      <div
        className="win-titlebar"
        style={{ cursor: 'default', fontSize: 10 }}
        onClick={() => setCollapsed(c => !c)}
      >
        <span>📌</span>
        <span className="win-titlebar-title" style={{ fontSize: 10 }}>Evidence Collected — {discoveredCharacters.length} / {hiddenCharacters.length}</span>
        <span style={{ fontSize: 10 }}>{collapsed ? '▲' : '▼'}</span>
      </div>
      {!collapsed && (
        <div style={{ padding: 6, background: '#c0c0c0' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            {discovered.map(c => (
              <div
                key={c.id}
                style={{
                  width: 18,
                  height: 20,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'white',
                  border: '1px solid #808080',
                  fontSize: 11,
                  fontFamily: 'Courier New, monospace',
                }}
                title={c.hint}
              >
                {c.character}
              </div>
            ))}
          </div>
          <p style={{ fontSize: 9, marginTop: 4, color: '#404040' }}>
            Click unusual characters in the OS to collect them.
          </p>
        </div>
      )}
    </div>
  );
}
