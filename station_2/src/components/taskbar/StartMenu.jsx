import React, { useState, useRef } from 'react';
import useOsStore from '../../store/osStore';

const menuItems = [
  {
    label: '📁 Programs', hasSubmenu: true,
    submenu: [
      { label: '📝 Notepad',         app: 'notepad',     title: 'Notepad',          icon: '📝', width: 480, height: 340 },
      { label: '🖩 Calculator',      app: 'calculator',  title: 'Calculator',       icon: '🖩', width: 230, height: 290 },
      { label: '🎨 Paint',           app: 'paint',       title: 'Paint',            icon: '🎨', width: 580, height: 440 },
      { label: '🗺️ Character Map',   app: 'charmap',     title: 'Character Map',    icon: '🗺️', width: 440, height: 340 },
      { label: '🖤 Command Prompt',  app: 'cmd',         title: 'Command Prompt',   icon: '🖤', width: 520, height: 340 },
      { label: '🖥️ System Info',     app: 'sysinfo',     title: 'System Information', icon: '🖥️', width: 460, height: 380 },
      { label: '❓ Help',            app: 'help',        title: 'Help',             icon: '❓', width: 540, height: 400 },
    ],
  },
  {
    label: '📂 Documents', hasSubmenu: true,
    submenu: [
      { label: 'README.TXT',         app: 'notepad',  title: 'README.TXT',         icon: '📄', width: 480, height: 340, props: { filePath: 'C:/Lab/Records/README.TXT' } },
      { label: 'MEETING_NOTES.TXT',  app: 'notepad',  title: 'MEETING_NOTES.TXT',  icon: '📄', width: 480, height: 340, props: { filePath: 'C:/Documents/MEETING_NOTES.TXT' } },
      { label: 'ACCESS_LOG.TXT',     app: 'notepad',  title: 'ACCESS_LOG.TXT',     icon: '📄', width: 480, height: 340, props: { filePath: 'C:/Lab/Records/ACCESS_LOG.TXT' } },
    ],
  },
  {
    label: '⚙️ Settings', hasSubmenu: true,
    submenu: [
      { label: '⚙️ Control Panel',   app: 'controlpanel', id: 'controlpanel', title: 'Control Panel', icon: '⚙️', width: 560, height: 420 },
      { label: '📺 Display',         app: 'controlpanel', title: 'Display Properties', icon: '📺', width: 400, height: 340, props: { panel: 'display' } },
      { label: '🌐 Network',         app: 'controlpanel', title: 'Network', icon: '🌐', width: 400, height: 340, props: { panel: 'network' } },
    ],
  },
  { label: '🔍 Search', app: 'search', id: 'search', title: 'Search', icon: '🔍', width: 440, height: 360 },
  { label: '❓ Help',   app: 'help',   id: 'help',   title: 'Help',   icon: '❓', width: 540, height: 400 },
  { label: '▶ Run...',  app: null },
  { separator: true },
  { label: '🚪 Log Off', app: null },
  { label: '⏻ Shut Down', app: null },
];

export default function StartMenu() {
  const startMenuOpen = useOsStore(s => s.startMenuOpen);
  const closeStartMenu = useOsStore(s => s.closeStartMenu);
  const openWindow = useOsStore(s => s.openWindow);
  const [hoveredItem, setHoveredItem] = useState(null);

  if (!startMenuOpen) return null;

  const launch = (item) => {
    if (!item.app) return;
    openWindow({
      id: item.id,
      app: item.app,
      title: item.title,
      icon: item.icon,
      width: item.width || 520,
      height: item.height || 360,
      props: item.props || {},
    });
    closeStartMenu();
  };

  return (
    <div className="win-start-menu" onClick={e => e.stopPropagation()}>
      <div className="win-start-menu-sidebar">
        <span>VarmaOS 4.7</span>
      </div>
      <div className="win-start-menu-items">
        {menuItems.map((item, i) => {
          if (item.separator) return <div key={i} className="win-start-menu-separator" />;
          return (
            <div
              key={i}
              className="win-start-menu-item"
              onMouseEnter={() => setHoveredItem(i)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => !item.hasSubmenu && launch(item)}
            >
              <span style={{ flex: 1 }}>{item.label}</span>
              {item.hasSubmenu && <span>▶</span>}
              {/* Submenu */}
              {item.hasSubmenu && hoveredItem === i && (
                <div className="win-start-submenu">
                  {item.submenu.map((sub, j) => (
                    <div
                      key={j}
                      className="win-start-menu-item"
                      onClick={() => { launch(sub); setHoveredItem(null); }}
                    >
                      {sub.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
