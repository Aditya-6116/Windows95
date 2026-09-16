import React from 'react';
import useOsStore from '../../store/osStore';
import HiddenChar from '../puzzle/HiddenChar';
import Win95Icon from '../common/Win95Icon';

export default function DesktopIcon({ icon }) {
  const openWindow = useOsStore((s) => s.openWindow);
  const selectedDesktopItem = useOsStore((s) => s.selectedDesktopItem);
  const selectDesktopItem = useOsStore((s) => s.selectDesktopItem);
  const openContextMenu = useOsStore((s) => s.openContextMenu);

  const isSelected = selectedDesktopItem === icon.id;

  const handleDoubleClick = () => {
    openApp(icon);
  };

  const openApp = (icon) => {
    const base = {
      id: icon.id === 'recycle-bin' ? 'recycle-bin' : undefined,
      icon: icon.icon,
    };
    switch (icon.app) {
      case 'mycomputer':
        openWindow({
          ...base,
          id: 'mycomputer',
          app: 'explorer',
          title: 'My Computer',
          icon: 'mycomputer',
          width: 580,
          height: 420,
          props: { path: 'root' },
        });
        break;
      case 'explorer':
        openWindow({
          ...base,
          app: 'explorer',
          title: icon.label,
          icon: icon.icon || 'folder',
          width: 580,
          height: 420,
          props: { path: icon.path || 'C:' },
        });
        break;
      case 'notepad':
        openWindow({
          ...base,
          app: 'notepad',
          title: icon.label,
          icon: 'notepad',
          width: 480,
          height: 340,
          props: { filePath: icon.filePath },
        });
        break;
      case 'controlpanel':
        openWindow({
          ...base,
          id: 'controlpanel',
          app: 'controlpanel',
          title: 'Control Panel',
          icon: 'controlpanel',
          width: 560,
          height: 420,
        });
        break;
      case 'cmd':
        openWindow({
          ...base,
          app: 'cmd',
          title: 'Command Prompt',
          icon: 'cmd',
          width: 520,
          height: 340,
        });
        break;
      case 'help':
        openWindow({
          ...base,
          id: 'help',
          app: 'help',
          title: 'Help',
          icon: 'help',
          width: 540,
          height: 400,
        });
        break;
      case 'recycle':
        openWindow({
          ...base,
          id: 'recycle-bin',
          app: 'recycle',
          title: 'Recycle Bin',
          icon: 'recycle-bin',
          width: 440,
          height: 320,
        });
        break;
      default:
        break;
    }
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    selectDesktopItem(icon.id);
    openContextMenu({
      x: e.clientX,
      y: e.clientY,
      items: [
        { label: 'Open', action: () => openApp(icon) },
        { separator: true },
        {
          label: 'Properties',
          action: () => {
            openWindow({
              app: 'notepad',
              title: `${icon.label} Properties`,
              icon: 'document',
              width: 340,
              height: 240,
              props: {
                content: `${icon.label} Properties\n\nType: System Shortcut\nTarget: ${icon.app}\nLocation: Desktop\nAttributes: Read-only`,
                readOnly: true,
              },
            });
          },
        },
      ],
    });
  };

  return (
    <div
      className={`desktop-icon ${isSelected ? 'selected' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        selectDesktopItem(icon.id);
      }}
      onDoubleClick={handleDoubleClick}
      onContextMenu={handleContextMenu}
    >
      <Win95Icon name={icon.icon || icon.app || icon.id} size={32} />
      <span className="icon-label">
        {icon.id === 'recycle-bin' ? (
          <span>
            Recycle Bin{' '}
            <span style={{ fontSize: 9, opacity: 0.8 }}>
              (<HiddenChar clueId="clue-01" fallbackChar="A" />)
            </span>
          </span>
        ) : (
          icon.label
        )}
      </span>
    </div>
  );
}
