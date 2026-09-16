import React, { useState } from 'react';
import HiddenChar from '../../components/puzzle/HiddenChar';

const topics = [
  {
    id: 'contents',
    label: '📋 Contents',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>Help Contents</h2>
        <p>Welcome to VarmaOS Help. Select a topic from the list to get started.</p>
        <ul style={{ marginLeft: 16, marginTop: 8, listStyle: 'disc' }}>
          <li>Using Files and Folders</li>
          <li>Network Help</li>
          <li>Accessibility Options</li>
          <li>Troubleshooting</li>
          <li>About This Computer</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'files',
    label: '📁 Using Files',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>Using Files and Folders</h2>
        <p>To open a file, double-click its icon in My Computer or File Explorer.</p>
        <br />
        <p>To move a file, drag it to the new location.</p>
        <br />
        <p>To copy a file, hold Ctrl and drag, or use Edit → Copy / Edit → Paste.</p>
        <br />
        <p style={{ color: '#808080' }}>See also: File Properties, My Computer</p>
      </div>
    ),
  },
  {
    id: 'network',
    label: '🌐 Network Help',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>Network Help</h2>
        <p>LAB-NET is the primary network for this computer.</p>
        <br />
        <p>If you cannot connect to a network resource, verify that the network cable is connected and that LAB-NET is available.</p>
        <br />
        <p>Contact your network administrator for assistance with shared drives.</p>
      </div>
    ),
  },
  {
    id: 'troubleshoot',
    label: '🔧 Troubleshooting',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>Troubleshooting</h2>
        <p>Follow these steps to diagnose common problems:</p>
        <ol style={{ marginLeft: 16, marginTop: 8 }}>
          <li style={{ marginBottom: 4 }}>
            <HiddenChar clueId="clue-19" before="Restar" after=" the computer and try again." />
          </li>
          <li style={{ marginBottom: 4 }}>Check all cables and connections.</li>
          <li style={{ marginBottom: 4 }}>Run Disk Cleanup to free space.</li>
          <li style={{ marginBottom: 4 }}>Check the Event Log for errors.</li>
        </ol>
        <br />
        <p style={{ color: '#808080' }}>If the problem persists, contact your administrator.</p>
      </div>
    ),
  },
  {
    id: 'about',
    label: 'ℹ️ About This Computer',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>About This Computer</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', rowGap: 4 }}>
          <span style={{ color: '#404040' }}>Computer:</span>      <span>VARMA-LAB-PC</span>
          <span style={{ color: '#404040' }}>OS:</span>            <span>VarmaOS 4.7</span>
          <span style={{ color: '#404040' }}>Build:</span>
          <span><HiddenChar clueId="clue-06" before="447" after="-1998" /></span>
          <span style={{ color: '#404040' }}>Owner:</span>         <span>D. Varma</span>
          <span style={{ color: '#404040' }}>Organisation:</span>  <span>Applied Research Division</span>
          <span style={{ color: '#404040' }}>Serial:</span>        <span>ARD-1998-0042</span>
        </div>
      </div>
    ),
  },
  {
    id: 'settings',
    label: '⚙️ Using Settings',
    content: () => (
      <div style={{ padding: 12, fontSize: 11 }}>
        <h2 style={{ fontWeight: 'bold', marginBottom: 8 }}>Using Settings</h2>
        <p>Open Control Panel from Start → Settings → Control Panel.</p>
        <br />
        <p>Each icon in Control Panel opens a separate settings panel. Changes take effect after clicking Apply or OK.</p>
        <br />
        <p style={{ color: '#808080' }}>Note: Some settings require Administrator access.</p>
      </div>
    ),
  },
];

export default function HelpSystem({ winId }) {
  const [activeId, setActiveId] = useState('contents');
  const [searchQuery, setSearchQuery] = useState('');

  const ActiveContent = topics.find(t => t.id === activeId)?.content;

  const filtered = searchQuery.trim()
    ? topics.filter(t => t.label.toLowerCase().includes(searchQuery.toLowerCase()))
    : topics;

  return (
    <div style={{ display: 'flex', height: '100%', fontSize: 11 }}>
      {/* Sidebar */}
      <div style={{ width: 160, borderRight: '1px solid #808080', display: 'flex', flexDirection: 'column', background: '#c0c0c0' }}>
        <div style={{ padding: 4, borderBottom: '1px solid #808080' }}>
          <input
            className="win-input"
            style={{ width: '100%', fontSize: 11 }}
            placeholder="Search..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {filtered.map(t => (
            <div
              key={t.id}
              style={{
                padding: '5px 8px', cursor: 'default',
                background: activeId === t.id ? 'var(--win-highlight)' : 'transparent',
                color: activeId === t.id ? 'white' : 'black',
              }}
              onClick={() => setActiveId(t.id)}
            >
              {t.label}
            </div>
          ))}
          {filtered.length === 0 && (
            <p style={{ padding: 8, color: '#808080', fontSize: 10 }}>No results.</p>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: 'auto', background: 'white' }}>
        {ActiveContent && <ActiveContent />}
      </div>
    </div>
  );
}
