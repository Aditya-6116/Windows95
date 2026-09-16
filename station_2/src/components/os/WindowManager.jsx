import React from 'react';
import useOsStore from '../../store/osStore';
import WindowFrame from '../windows/WindowFrame';
import AppRouter from '../../app/AppRouter';

export default function WindowManager() {
  const windows = useOsStore(s => s.windows);
  const windowOrder = useOsStore(s => s.windowOrder);
  const updateWindowProps = useOsStore(s => s.updateWindowProps);

  return (
    <>
      {windowOrder.map(id => {
        const win = windows[id];
        if (!win || win.minimized) return null;

        // Clone the window with its app content injected as children
        const winWithContent = {
          ...win,
          children: <AppRouter win={win} />,
        };

        // Temporarily patch the store's window with children
        return (
          <WindowFrameWithContent key={id} id={id} win={winWithContent} />
        );
      })}
    </>
  );
}

function WindowFrameWithContent({ id, win }) {
  const windows = useOsStore(s => s.windows);
  const windowOrder = useOsStore(s => s.windowOrder);
  const activeWindow = useOsStore(s => s.activeWindow);
  const closeWindow = useOsStore(s => s.closeWindow);
  const minimizeWindow = useOsStore(s => s.minimizeWindow);
  const maximizeWindow = useOsStore(s => s.maximizeWindow);
  const focusWindow = useOsStore(s => s.focusWindow);
  const moveWindow = useOsStore(s => s.moveWindow);
  const resizeWindow = useOsStore(s => s.resizeWindow);

  const isActive = activeWindow === id;
  const zIndex = 200 + windowOrder.indexOf(id) * 2;
  const { useRef, useCallback } = React;
  const dragState = useRef(null);
  const resizeState = useRef(null);

  const onTitleBarMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    if (win.maximized) return;
    focusWindow(id);
    dragState.current = { startX: e.clientX - win.x, startY: e.clientY - win.y };
    e.preventDefault();
    const onMove = (me) => {
      if (!dragState.current) return;
      moveWindow(id, me.clientX - dragState.current.startX, Math.max(0, me.clientY - dragState.current.startY));
    };
    const onUp = () => { dragState.current = null; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [win, id, focusWindow, moveWindow]);

  const onResizeMouseDown = useCallback((e) => {
    if (e.button !== 0 || win.maximized) return;
    e.preventDefault(); e.stopPropagation();
    resizeState.current = { startX: e.clientX, startY: e.clientY, startW: win.width, startH: win.height };
    const onMove = (me) => {
      if (!resizeState.current) return;
      resizeWindow(id, Math.max(240, resizeState.current.startW + me.clientX - resizeState.current.startX), Math.max(120, resizeState.current.startH + me.clientY - resizeState.current.startY));
    };
    const onUp = () => { resizeState.current = null; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [win, id, resizeWindow]);

  const style = win.maximized
    ? { position: 'fixed', left: 0, top: 0, right: 0, bottom: 30, zIndex, display: 'flex', flexDirection: 'column' }
    : { position: 'absolute', left: win.x, top: win.y, width: win.width, height: win.height, zIndex, display: 'flex', flexDirection: 'column' };

  return (
    <div style={style} className="win-frame" onMouseDown={() => !isActive && focusWindow(id)}>
      {/* Title Bar */}
      <div className={`win-titlebar ${isActive ? '' : 'inactive'}`} onMouseDown={onTitleBarMouseDown} onDoubleClick={() => maximizeWindow(id)}>
        <span style={{ fontSize: 14 }}>{win.icon}</span>
        <span className="win-titlebar-title">{win.title}</span>
        <button className="win-titlebar-btn" onMouseDown={e => e.stopPropagation()} onClick={() => minimizeWindow(id)} title="Minimize">_</button>
        <button className="win-titlebar-btn" onMouseDown={e => e.stopPropagation()} onClick={() => maximizeWindow(id)} title={win.maximized ? 'Restore' : 'Maximize'}>{win.maximized ? '❐' : '□'}</button>
        <button className="win-titlebar-btn" onMouseDown={e => e.stopPropagation()} onClick={() => closeWindow(id)} style={{ marginLeft: 2 }} title="Close">✕</button>
      </div>
      {/* App Content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {win.children}
      </div>
      {/* Resize handle */}
      {!win.maximized && (
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 14, height: 14, cursor: 'nwse-resize', zIndex: 10 }} onMouseDown={onResizeMouseDown} />
      )}
    </div>
  );
}
