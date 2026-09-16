import React, { useEffect, useState } from 'react';
import useOsStore from '../../store/osStore';
import Win95Icon from '../common/Win95Icon';

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

export default function Taskbar() {
  const windows = useOsStore(s => s.windows);
  const windowOrder = useOsStore(s => s.windowOrder);
  const activeWindow = useOsStore(s => s.activeWindow);
  const toggleStartMenu = useOsStore(s => s.toggleStartMenu);
  const startMenuOpen = useOsStore(s => s.startMenuOpen);
  const focusWindow = useOsStore(s => s.focusWindow);
  const minimizeWindow = useOsStore(s => s.minimizeWindow);
  const openWindow = useOsStore(s => s.openWindow);
  const time = useClock();

  const allWindows = Object.values(windows);

  const handleTaskbarClick = (id) => {
    const win = windows[id];
    if (!win) return;
    if (win.minimized || activeWindow !== id) {
      focusWindow(id);
    } else {
      minimizeWindow(id);
    }
  };

  return (
    <div className="win-taskbar" onClick={e => e.stopPropagation()}>
      {/* Start Button */}
      <button
        className={`win-start-btn ${startMenuOpen ? 'open' : ''}`}
        onClick={toggleStartMenu}
      >
        <Win95Icon name="windows" size={16} />
        <span style={{ fontWeight: 'bold' }}>Start</span>
      </button>

      {/* Separator */}
      <div style={{ width: 1, height: 22, background: '#808080', margin: '0 2px', boxShadow: '1px 0 0 #fff' }} />

      {/* Open Window Buttons */}
      {allWindows.map(win => (
        <button
          key={win.id}
          className={`taskbar-btn ${activeWindow === win.id && !win.minimized ? 'active' : ''}`}
          onClick={() => handleTaskbarClick(win.id)}
          title={win.title}
        >
          <Win95Icon name={win.icon || win.app} size={16} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 110, marginLeft: 2 }}>{win.title}</span>
        </button>
      ))}

      {/* System Tray */}
      <div className="win-tray" style={{ marginLeft: 'auto' }}>
        <span title="Network" style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}>
          <Win95Icon name="network" size={14} />
        </span>
        <span title="Volume" style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}>
          <Win95Icon name="speaker" size={14} />
        </span>
        <span
          title="System Log"
          style={{ cursor: 'default', display: 'flex', alignItems: 'center' }}
          onClick={() => openWindow({ id: 'syslog', app: 'syslog', title: 'System Access Log', icon: 'syslog', width: 520, height: 340 })}
        >
          <Win95Icon name="syslog" size={14} />
        </span>
        <span style={{ marginLeft: 4 }}>{time}</span>
      </div>
    </div>
  );
}
