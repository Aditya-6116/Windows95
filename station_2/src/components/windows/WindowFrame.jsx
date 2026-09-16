import React, { useRef, useState, useCallback, useEffect } from 'react';
import useOsStore from '../../store/osStore';
import Win95Icon from '../common/Win95Icon';

const TITLEBAR_H = 22;

export default function WindowFrame({ id }) {
  const windows = useOsStore(s => s.windows);
  const windowOrder = useOsStore(s => s.windowOrder);
  const activeWindow = useOsStore(s => s.activeWindow);
  const closeWindow = useOsStore(s => s.closeWindow);
  const minimizeWindow = useOsStore(s => s.minimizeWindow);
  const maximizeWindow = useOsStore(s => s.maximizeWindow);
  const focusWindow = useOsStore(s => s.focusWindow);
  const moveWindow = useOsStore(s => s.moveWindow);
  const resizeWindow = useOsStore(s => s.resizeWindow);

  const win = windows[id];
  const isActive = activeWindow === id;
  const zIndex = 200 + windowOrder.indexOf(id) * 2;

  const dragState = useRef(null);
  const resizeState = useRef(null);
  const frameRef = useRef(null);

  const onTitleBarMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    if (win.maximized) return;
    focusWindow(id);
    dragState.current = { startX: e.clientX - win.x, startY: e.clientY - win.y };
    e.preventDefault();

    const onMove = (me) => {
      if (!dragState.current) return;
      const nx = me.clientX - dragState.current.startX;
      const ny = Math.max(0, me.clientY - dragState.current.startY);
      moveWindow(id, nx, ny);
    };
    const onUp = () => {
      dragState.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [win, id, focusWindow, moveWindow]);

  const onResizeMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    if (win.maximized) return;
    e.preventDefault();
    e.stopPropagation();
    resizeState.current = { startX: e.clientX, startY: e.clientY, startW: win.width, startH: win.height };

    const onMove = (me) => {
      if (!resizeState.current) return;
      const nw = Math.max(240, resizeState.current.startW + me.clientX - resizeState.current.startX);
      const nh = Math.max(120, resizeState.current.startH + me.clientY - resizeState.current.startY);
      resizeWindow(id, nw, nh);
    };
    const onUp = () => {
      resizeState.current = null;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [win, id, resizeWindow]);

  if (!win || win.minimized) return null;

  const style = win.maximized
    ? { position: 'fixed', left: 0, top: 0, right: 0, bottom: 30, zIndex, display: 'flex', flexDirection: 'column' }
    : { position: 'absolute', left: win.x, top: win.y, width: win.width, height: win.height, zIndex, display: 'flex', flexDirection: 'column' };

  return (
    <div
      ref={frameRef}
      style={style}
      className="win-frame"
      onMouseDown={() => !isActive && focusWindow(id)}
    >
      {/* Title Bar */}
      <div
        className={`win-titlebar ${isActive ? '' : 'inactive'}`}
        onMouseDown={onTitleBarMouseDown}
        onDoubleClick={() => maximizeWindow(id)}
      >
        <Win95Icon name={win.icon || win.app} size={14} />
        <span className="win-titlebar-title" style={{ marginLeft: 3 }}>{win.title}</span>
        <button
          className="win-titlebar-btn"
          title="Minimize"
          onMouseDown={e => e.stopPropagation()}
          onClick={() => minimizeWindow(id)}
        >_</button>
        <button
          className="win-titlebar-btn"
          title={win.maximized ? 'Restore' : 'Maximize'}
          onMouseDown={e => e.stopPropagation()}
          onClick={() => maximizeWindow(id)}
        >{win.maximized ? '❐' : '□'}</button>
        <button
          className="win-titlebar-btn"
          title="Close"
          onMouseDown={e => e.stopPropagation()}
          onClick={() => closeWindow(id)}
          style={{ marginLeft: 2 }}
        >✕</button>
      </div>

      {/* Content slot — rendered by the app */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {win.children}
      </div>

      {/* Resize handle (bottom-right corner) */}
      {!win.maximized && (
        <div
          style={{
            position: 'absolute', bottom: 0, right: 0, width: 12, height: 12,
            cursor: 'nwse-resize', zIndex: 1,
          }}
          onMouseDown={onResizeMouseDown}
        />
      )}
    </div>
  );
}
