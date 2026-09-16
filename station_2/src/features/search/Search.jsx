import React, { useState } from 'react';
import HiddenChar from '../../components/puzzle/HiddenChar';
import useOsStore from '../../store/osStore';

const SEARCHABLE = [
  { label: 'Display Properties',    category: 'Control Panel', app: 'controlpanel', props: { panel: 'display' } },
  { label: 'Network Connections',   category: 'Control Panel', app: 'controlpanel', props: { panel: 'network' } },
  { label: 'System Information',    category: 'Programs',      app: 'sysinfo' },
  { label: 'User Accounts',         category: 'Control Panel', app: 'controlpanel', props: { panel: 'users' } },
  { label: 'Command Prompt',        category: 'Programs',      app: 'cmd' },
  { label: 'Keyboard Properties',   category: 'Control Panel', app: 'controlpanel', props: { panel: 'keyboard' } },
  { label: 'Regional Settings',     category: 'Control Panel', app: 'controlpanel', props: { panel: 'regional' } },
  { label: 'Date & Time',           category: 'Control Panel', app: 'controlpanel', props: { panel: 'datetime' } },
  { label: 'Fonts',                 category: 'Control Panel', app: 'controlpanel', props: { panel: 'fonts' } },
  { label: 'Printers',              category: 'Control Panel', app: 'controlpanel', props: { panel: 'printers' } },
  { label: 'Sounds',                category: 'Control Panel', app: 'controlpanel', props: { panel: 'sounds' } },
  { label: 'Accessibility Options', category: 'Control Panel', app: 'controlpanel', props: { panel: 'accessibility' } },
  { label: 'Internet Options',      category: 'Control Panel', app: 'controlpanel', props: { panel: 'internet' } },
  { label: 'Help',                  category: 'Programs',      app: 'help' },
  { label: 'README.TXT',            category: 'Documents',     app: 'notepad', props: { filePath: 'C:/Lab/Records/README.TXT' } },
  { label: 'Meeting Notes',         category: 'Documents',     app: 'notepad', props: { filePath: 'C:/Documents/MEETING_NOTES.TXT' } },
  { label: 'System Access Log',     category: 'Documents',     app: 'syslog' },
  { label: 'Lab Records',           category: 'Files',         app: 'explorer', props: { path: 'C:/Lab/Records' } },
];

const FILLER = ['Wallpaper Settings', 'Screensaver Options', 'Printer Queue', 'Disk Cleanup'];

export default function Search({ winId }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [searching, setSearching] = useState(false);
  const openWindow = useOsStore(s => s.openWindow);

  const runSearch = () => {
    if (!query.trim()) return;
    setSearching(true);
    setTimeout(() => {
      const matched = SEARCHABLE.filter(r =>
        r.label.toLowerCase().includes(query.toLowerCase())
      );
      setResults({ matched, filler: FILLER.slice(0, 2) });
      setSearching(false);
    }, 600);
  };

  const open = (result) => {
    if (!result.app) return;
    openWindow({
      app: result.app,
      title: result.label,
      icon: '📄',
      width: 520,
      height: 360,
      props: result.props || {},
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      {/* Search bar */}
      <div style={{ padding: 10, borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
        <p style={{ fontWeight: 'bold', marginBottom: 6 }}>🔍 Search</p>
        <div style={{ display: 'flex', gap: 6 }}>
          <input
            className="win-input"
            style={{ flex: 1 }}
            placeholder="Search files, settings, programs..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && runSearch()}
          />
          <button className="btn-win" onClick={runSearch} style={{ minWidth: 60 }}>Search</button>
        </div>
        <p style={{ marginTop: 4, color: '#404040', fontSize: 10 }}>
          <HiddenChar clueId="clue-14" before="Results for your quer" after=" appear below." />
        </p>
      </div>

      {/* Results */}
      <div className="win-inset" style={{ flex: 1, overflowY: 'auto', padding: 8 }}>
        {searching && <p style={{ color: '#404040' }}>Searching...</p>}
        {results && !searching && (
          <>
            {results.matched.length > 0 ? (
              results.matched.map((r, i) => (
                <div
                  key={i}
                  style={{ padding: '3px 4px', cursor: 'default', borderBottom: '1px solid #e0e0e0', display: 'flex', gap: 8 }}
                  onDoubleClick={() => open(r)}
                >
                  <span>📄</span>
                  <div>
                    <p style={{ color: '#000080', textDecoration: 'underline' }}>{r.label}</p>
                    <p style={{ color: '#808080', fontSize: 10 }}>{r.category}</p>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ color: '#404040' }}>No files matching "{query}" found.</p>
            )}
            {results.filler.map((f, i) => (
              <div key={`fill-${i}`} style={{ padding: '3px 4px', borderBottom: '1px solid #e0e0e0', display: 'flex', gap: 8 }}>
                <span>📄</span>
                <div>
                  <p style={{ color: '#000080' }}>{f}</p>
                  <p style={{ color: '#808080', fontSize: 10 }}>System</p>
                </div>
              </div>
            ))}
          </>
        )}
        {!results && !searching && (
          <p style={{ color: '#808080', padding: 4 }}>Enter a search term and click Search.</p>
        )}
      </div>

      {/* Status */}
      <div className="win-statusbar">
        <div className="win-statusbar-panel">
          {results ? `${results.matched.length + results.filler.length} result(s)` : 'Ready'}
        </div>
      </div>
    </div>
  );
}
