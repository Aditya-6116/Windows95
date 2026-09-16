import React, { useState, useRef, useEffect } from 'react';

/**
 * Classic application menu bar.
 * menus: [{ label: 'File', items: [{ label: 'Open', action: fn }, { separator: true }] }]
 */
export default function MenuBar({ menus = [] }) {
  const [openMenu, setOpenMenu] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    if (openMenu === null) return;
    const handler = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setOpenMenu(null);
    };
    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [openMenu]);

  return (
    <div className="win-menubar" ref={barRef}>
      {menus.map((menu, i) => (
        <div
          key={i}
          className={`win-menubar-item ${openMenu === i ? 'open' : ''}`}
          onMouseDown={() => setOpenMenu(openMenu === i ? null : i)}
          onMouseEnter={() => openMenu !== null && setOpenMenu(i)}
        >
          {menu.label}
          {openMenu === i && (
            <div className="win-dropdown" onMouseDown={e => e.stopPropagation()}>
              {menu.items.map((item, j) =>
                item.separator ? (
                  <div key={j} className="win-dropdown-separator" />
                ) : (
                  <div
                    key={j}
                    className={`win-dropdown-item ${item.disabled ? 'opacity-50' : ''}`}
                    onClick={() => {
                      if (!item.disabled && item.action) item.action();
                      setOpenMenu(null);
                    }}
                  >
                    {item.label}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
