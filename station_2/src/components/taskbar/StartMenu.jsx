import React, { useState } from 'react';
import useOsStore from '../../store/osStore';
import Win95Icon from '../common/Win95Icon';

const menuItems = [
  {
    label: 'Programs',
    icon: 'folder',
    hasSubmenu: true,
    submenu: [
      { label: 'Notepad', icon: 'notepad', app: 'notepad', title: 'Notepad', width: 480, height: 340 },
      { label: 'Calculator', icon: 'calculator', app: 'calculator', title: 'Calculator', width: 230, height: 290 },
      { label: 'Paint', icon: 'paint', app: 'paint', title: 'Paint', width: 580, height: 440 },
      { label: 'Character Map', icon: 'charmap', app: 'charmap', title: 'Character Map', width: 440, height: 340 },
      { label: 'Command Prompt', icon: 'cmd', app: 'cmd', title: 'Command Prompt', width: 520, height: 340 },
      { label: 'System Information', icon: 'sysinfo', app: 'sysinfo', title: 'System Information', width: 460, height: 380 },
      { label: 'Help', icon: 'help', app: 'help', title: 'Help', width: 540, height: 400 },
    ],
  },
  {
    label: 'Documents',
    icon: 'folder',
    hasSubmenu: true,
    submenu: [
      { label: 'README.TXT', icon: 'document', app: 'notepad', title: 'README.TXT', width: 480, height: 340, props: { filePath: 'C:/Lab/Records/README.TXT' } },
      { label: 'MEETING_NOTES.TXT', icon: 'document', app: 'notepad', title: 'MEETING_NOTES.TXT', width: 480, height: 340, props: { filePath: 'C:/Documents/MEETING_NOTES.TXT' } },
      { label: 'ACCESS_LOG.TXT', icon: 'document', app: 'notepad', title: 'ACCESS_LOG.TXT', width: 480, height: 340, props: { filePath: 'C:/Lab/Records/ACCESS_LOG.TXT' } },
    ],
  },
  {
    label: 'Settings',
    icon: 'controlpanel',
    hasSubmenu: true,
    submenu: [
      { label: 'Control Panel', icon: 'controlpanel', app: 'controlpanel', id: 'controlpanel', title: 'Control Panel', width: 560, height: 420 },
      { label: 'Display', icon: 'display', app: 'controlpanel', title: 'Display Properties', width: 400, height: 340, props: { panel: 'display' } },
      { label: 'Network', icon: 'network', app: 'controlpanel', title: 'Network', width: 400, height: 340, props: { panel: 'network' } },
    ],
  },
  { label: 'Search', icon: 'search', app: 'search', id: 'search', title: 'Search', width: 440, height: 360 },
  { label: 'Help', icon: 'help', app: 'help', id: 'help', title: 'Help', width: 540, height: 400 },
  { label: 'Run...', icon: 'run', app: null },
  { separator: true },
  { label: 'Log Off...', icon: 'logoff', app: null },
  { label: 'Shut Down...', icon: 'shutdown', app: null },
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
              <Win95Icon name={item.icon} size={16} />
              <span style={{ flex: 1, marginLeft: 6 }}>{item.label}</span>
              {item.hasSubmenu && <span style={{ fontSize: 9 }}>▶</span>}
              {/* Submenu */}
              {item.hasSubmenu && hoveredItem === i && (
                <div className="win-start-submenu">
                  {item.submenu.map((sub, j) => (
                    <div
                      key={j}
                      className="win-start-menu-item"
                      onClick={() => { launch(sub); setHoveredItem(null); }}
                    >
                      <Win95Icon name={sub.icon} size={16} />
                      <span style={{ flex: 1, marginLeft: 6 }}>{sub.label}</span>
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
