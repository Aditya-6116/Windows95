import React, { useEffect } from 'react';
import useOsStore from '../../store/osStore';
import desktopData from '../../data/desktopData';
import DesktopIcon from '../desktop/DesktopIcon';
import Taskbar from '../taskbar/Taskbar';
import StartMenu from '../taskbar/StartMenu';
import ContextMenu from '../menus/ContextMenu';
import WindowManager from './WindowManager';
import Toast from '../puzzle/Toast';
import EvidencePanel from '../puzzle/EvidencePanel';

import wallpaperImg from '../../assets/wallpaper.jpg';

export default function Desktop() {
  const clearDesktopSelection = useOsStore(s => s.clearDesktopSelection);
  const closeContextMenu = useOsStore(s => s.closeContextMenu);
  const closeStartMenu = useOsStore(s => s.closeStartMenu);
  const openContextMenu = useOsStore(s => s.openContextMenu);
  const openWindow = useOsStore(s => s.openWindow);

  const handleDesktopClick = () => {
    clearDesktopSelection();
    closeContextMenu();
    closeStartMenu();
  };

  const handleDesktopContextMenu = (e) => {
    e.preventDefault();
    closeStartMenu();
    clearDesktopSelection();
    openContextMenu({
      x: e.clientX,
      y: e.clientY,
      items: [
        { label: 'Arrange Icons', disabled: true },
        { label: 'Refresh', action: () => { } },
        { separator: true },
        { label: 'New Folder', disabled: true },
        { separator: true },
        { label: 'Properties', action: () => openWindow({ id: 'display-props', app: 'controlpanel', title: 'Display Properties', icon: '🖥️', width: 400, height: 340, props: { panel: 'display' } }) },
      ],
    });
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url("${wallpaperImg}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onClick={handleDesktopClick}
      onContextMenu={handleDesktopContextMenu}
    >
      {/* Desktop Icons — two columns */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          left: 8,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 76px)',
          gridAutoRows: '80px',
          gap: '4px',
        }}
        onClick={e => e.stopPropagation()}
      >
        {desktopData.map(icon => (
          <DesktopIcon key={icon.id} icon={icon} />
        ))}
      </div>

      {/* Open Windows */}
      <WindowManager />

      {/* UI overlays */}
      <ContextMenu />
      <StartMenu />
      <EvidencePanel />
      <Toast />
      <Taskbar />
    </div>
  );
}
