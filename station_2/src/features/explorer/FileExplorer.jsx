import React, { useState, useCallback } from 'react';
import MenuBar from '../../components/menus/MenuBar';
import fileSystem from '../../data/fileSystem';
import useOsStore from '../../store/osStore';
import HiddenChar from '../../components/puzzle/HiddenChar';
import Win95Icon from '../../components/common/Win95Icon';

// Navigate a path string like 'C:/Lab/Records' through the fileSystem
function resolvePath(pathStr) {
  if (!pathStr || pathStr === 'root') return null; // root level — show drives
  const parts = pathStr.replace(/\\/g, '/').split('/').filter(Boolean);
  const drive = parts[0]; // e.g. 'C:'
  if (!fileSystem[drive]) return null;
  if (parts.length === 1) return fileSystem[drive];
  let node = fileSystem[drive];
  for (let i = 1; i < parts.length; i++) {
    if (!node.children) return null;
    node = node.children[parts[i]];
    if (!node) return null;
  }
  return node;
}

function getDriveIcon(key) {
  if (key === 'A:') return 'floppy';
  if (key === 'C:') return 'hard-drive';
  if (key === 'D:') return 'cdrom';
  if (key === 'Z:') return 'network';
  return 'hard-drive';
}

function getChildren(pathStr) {
  if (!pathStr || pathStr === 'root') {
    // Return drives
    return Object.entries(fileSystem).map(([key, val]) => ({
      name: val.label || key,
      key,
      type: 'drive',
      icon: getDriveIcon(key),
    }));
  }
  const node = resolvePath(pathStr);
  if (!node || !node.children) return [];
  return Object.entries(node.children).map(([name, child]) => ({
    name,
    key: name,
    type: child.type || 'file',
    icon: child.type === 'folder' ? 'folder' : name,
    child,
  }));
}

function pathUp(pathStr) {
  if (!pathStr || pathStr === 'root') return 'root';
  const parts = pathStr.replace(/\\/g, '/').split('/').filter(Boolean);
  if (parts.length <= 1) return 'root';
  return parts.slice(0, -1).join('/');
}

function pathJoin(base, name) {
  if (!base || base === 'root') return name;
  return `${base}/${name}`;
}

export default function FileExplorer({ winId, initialPath = 'root' }) {
  const [path, setPath] = useState(initialPath);
  const [history, setHistory] = useState([initialPath]);
  const [histIdx, setHistIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [view, setView] = useState('list'); // 'list' | 'details'
  const openWindow = useOsStore((s) => s.openWindow);
  const openContextMenu = useOsStore((s) => s.openContextMenu);

  const navigate = useCallback(
    (newPath) => {
      const newHistory = [...history.slice(0, histIdx + 1), newPath];
      setHistory(newHistory);
      setHistIdx(newHistory.length - 1);
      setPath(newPath);
      setSelected(null);
    },
    [history, histIdx]
  );

  const goBack = () => {
    if (histIdx > 0) {
      setHistIdx((h) => h - 1);
      setPath(history[histIdx - 1]);
      setSelected(null);
    }
  };
  const goForward = () => {
    if (histIdx < history.length - 1) {
      setHistIdx((h) => h + 1);
      setPath(history[histIdx + 1]);
      setSelected(null);
    }
  };
  const goUp = () => navigate(pathUp(path));

  const items = getChildren(path);

  const openItem = (item) => {
    if (item.type === 'drive' || item.type === 'folder') {
      navigate(pathJoin(path, item.key));
    } else {
      const filePath = pathJoin(path, item.key);
      const child = item.child;
      if (child?.accessDenied) {
        openWindow({
          app: 'notepad',
          title: item.name,
          icon: '📄',
          width: 320,
          height: 180,
          props: { content: 'Access denied.', readOnly: true },
        });
      } else {
        openWindow({
          app: 'notepad',
          title: item.name,
          icon: '📄',
          width: 480,
          height: 340,
          props: { filePath, content: child?.content },
        });
      }
    }
  };

  const handleContextMenu = (e, item) => {
    e.preventDefault();
    setSelected(item?.key);
    openContextMenu({
      x: e.clientX,
      y: e.clientY,
      items: [
        { label: 'Open', action: () => item && openItem(item) },
        { separator: true },
        { label: 'Properties', action: () => item && openPropertiesFor(item) },
      ],
    });
  };

  const openPropertiesFor = (item) => {
    const node = item.child;
    const isReadme = item.name === 'README.TXT' || node?.isReadme;
    const content = `${item.name} Properties\n\nType: ${
      item.type === 'folder' ? 'Folder' : isReadme ? 'Text Document — Plain text' : 'Text Document'
    }\nLocation: ${path}\nSize: ${node?.size || '—'}\nCreated: ${node?.created || '—'}\nModified: ${
      node?.modified || '—'
    }`;

    openWindow({
      app: 'notepad',
      title: `${item.name} Properties`,
      icon: '📄',
      width: 340,
      height: 260,
      props: {
        content,
        readOnly: true,
        isReadmeProp: isReadme,
      },
    });
  };

  const renderItemName = (item) => {
    if (item.name === 'Records' && path.includes('Lab')) {
      return (
        <span>
          Records <HiddenChar clueId="clue-07" fallbackChar="T" />
        </span>
      );
    }
    if (item.name === 'REPORT_NOV.TXT' && path.includes('Documents')) {
      return (
        <span>
          <HiddenChar clueId="clue-17" fallbackChar="R" />EPORT_NOV.TXT
        </span>
      );
    }
    return item.name;
  };

  const displayPath = path === 'root' ? 'My Computer' : path.replace(/\//g, '\\');

  const menus = [
    { label: 'File', items: [{ label: 'Close', action: () => {} }] },
    {
      label: 'View',
      items: [
        { label: 'List', action: () => setView('list') },
        { label: 'Details', action: () => setView('details') },
      ],
    },
    { label: 'Help', items: [{ label: 'About', disabled: true }] },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      <MenuBar menus={menus} />

      {/* Toolbar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '3px 4px',
          borderBottom: '1px solid #808080',
          background: '#c0c0c0',
        }}
      >
        <button className="btn-win" style={{ minWidth: 32, padding: '2px 6px' }} onClick={goBack} disabled={histIdx === 0}>
          ◀
        </button>
        <button
          className="btn-win"
          style={{ minWidth: 32, padding: '2px 6px' }}
          onClick={goForward}
          disabled={histIdx >= history.length - 1}
        >
          ▶
        </button>
        <button className="btn-win" style={{ minWidth: 32, padding: '2px 6px' }} onClick={goUp} disabled={path === 'root'}>
          ⬆
        </button>
        <div style={{ flex: 1 }} />
        <span style={{ fontSize: 10, color: '#404040' }}>View:</span>
        <button
          className={`btn-win ${view === 'list' ? 'pressed' : ''}`}
          style={{ minWidth: 30, padding: '2px 4px', fontSize: 10 }}
          onClick={() => setView('list')}
        >
          ≡
        </button>
        <button
          className={`btn-win ${view === 'details' ? 'pressed' : ''}`}
          style={{ minWidth: 30, padding: '2px 4px', fontSize: 10 }}
          onClick={() => setView('details')}
        >
          ☰
        </button>
      </div>

      {/* Address Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '2px 4px',
          borderBottom: '1px solid #808080',
          background: '#c0c0c0',
        }}
      >
        <span style={{ fontSize: 10 }}>Address:</span>
        <input className="win-input" style={{ flex: 1, fontSize: 11 }} value={displayPath} readOnly />
      </div>

      {/* File List */}
      <div className="win-inset" style={{ flex: 1, overflow: 'auto', padding: 4 }} onContextMenu={(e) => handleContextMenu(e, null)}>
        {view === 'details' ? (
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #808080' }}>
                <th style={{ textAlign: 'left', padding: '1px 4px', fontWeight: 'normal' }}>Name</th>
                <th style={{ textAlign: 'left', padding: '1px 4px', fontWeight: 'normal', width: 80 }}>Size</th>
                <th style={{ textAlign: 'left', padding: '1px 4px', fontWeight: 'normal', width: 80 }}>Modified</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr
                  key={item.key}
                  style={{
                    background: selected === item.key ? 'var(--win-highlight)' : 'transparent',
                    color: selected === item.key ? 'white' : 'black',
                  }}
                  onClick={() => setSelected(item.key)}
                  onDoubleClick={() => openItem(item)}
                  onContextMenu={(e) => handleContextMenu(e, item)}
                >
                  <td style={{ padding: '2px 4px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Win95Icon name={item.icon} size={16} />
                      {renderItemName(item)}
                    </span>
                  </td>
                  <td style={{ padding: '1px 4px' }}>{item.child?.size || (item.type === 'folder' || item.type === 'drive' ? '' : '—')}</td>
                  <td style={{ padding: '1px 4px' }}>{item.child?.modified || ''}</td>
                </tr>
              ))}
              {items.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ padding: 8, color: '#808080' }}>
                    {resolvePath(path)?.emptyMessage || 'This folder is empty.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignContent: 'flex-start' }}>
            {items.map((item) => (
              <div
                key={item.key}
                style={{
                  width: 80,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: 4,
                  cursor: 'default',
                  gap: 2,
                  background: selected === item.key ? 'var(--win-highlight)' : 'transparent',
                  color: selected === item.key ? 'white' : 'black',
                  border: selected === item.key ? '1px dotted #000' : '1px solid transparent',
                }}
                onClick={() => setSelected(item.key)}
                onDoubleClick={() => openItem(item)}
                onContextMenu={(e) => handleContextMenu(e, item)}
              >
                <Win95Icon name={item.icon} size={32} />
                <span style={{ fontSize: 10, textAlign: 'center', wordBreak: 'break-word' }}>{renderItemName(item)}</span>
              </div>
            ))}
            {items.length === 0 && (
              <p style={{ padding: 8, color: '#808080', fontSize: 11 }}>{resolvePath(path)?.emptyMessage || 'This folder is empty.'}</p>
            )}
          </div>
        )}
      </div>

      {/* Status Bar */}
      <div className="win-statusbar">
        <div className="win-statusbar-panel" style={{ flex: 1 }}>
          {selected ? `1 object selected` : `${items.length} object(s)`}
        </div>
      </div>
    </div>
  );
}
