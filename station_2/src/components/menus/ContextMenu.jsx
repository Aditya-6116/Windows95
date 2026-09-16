import React, { useEffect, useRef } from 'react';
import useOsStore from '../../store/osStore';

export default function ContextMenu() {
  const contextMenu = useOsStore(s => s.contextMenu);
  const closeContextMenu = useOsStore(s => s.closeContextMenu);
  const ref = useRef(null);

  useEffect(() => {
    if (!contextMenu) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        closeContextMenu();
      }
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [contextMenu, closeContextMenu]);

  if (!contextMenu) return null;

  const { x, y, items } = contextMenu;

  return (
    <div
      ref={ref}
      className="win-context-menu"
      style={{ left: x, top: y }}
    >
      {items.map((item, i) =>
        item.separator ? (
          <div key={i} className="win-context-separator" />
        ) : (
          <div
            key={i}
            className={`win-context-item ${item.disabled ? 'opacity-50' : ''}`}
            onClick={() => {
              if (!item.disabled && item.action) item.action();
              closeContextMenu();
            }}
          >
            {item.label}
          </div>
        )
      )}
    </div>
  );
}
