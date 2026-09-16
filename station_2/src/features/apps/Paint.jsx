import React, { useRef, useState } from 'react';

const COLORS = [
  '#000000','#808080','#800000','#808000','#008000','#008080','#000080','#800080',
  '#c0c0c0','#ffffff','#ff0000','#ffff00','#00ff00','#00ffff','#0000ff','#ff00ff',
  '#ffff80','#80ff80','#80ffff','#8080ff','#ff80ff','#ff8040','#ff8000','#804000',
  '#004040','#0080ff','#0040ff','#8000ff','#ff0080','#ff0040',
];

const TOOLS = ['✏️ Pencil', '🪣 Fill', '⬛ Select', '🔲 Eraser', '📐 Line', '▭ Rectangle'];

export default function Paint({ winId }) {
  const canvasRef = useRef(null);
  const [color, setColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [tool, setTool] = useState('✏️ Pencil');
  const [drawing, setDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(2);
  const lastPos = useRef(null);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const onMouseDown = (e) => {
    if (tool !== '✏️ Pencil' && tool !== '🔲 Eraser') return;
    setDrawing(true);
    const pos = getPos(e);
    lastPos.current = pos;
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = tool === '🔲 Eraser' ? bgColor : color;
    ctx.fill();
  };

  const onMouseMove = (e) => {
    if (!drawing) return;
    const ctx = canvasRef.current.getContext('2d');
    const pos = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = tool === '🔲 Eraser' ? bgColor : color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';
    ctx.stroke();
    lastPos.current = pos;
  };

  const clearCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      {/* Toolbar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, padding: 4, borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
        {TOOLS.map(t => (
          <button key={t} className={`btn-win ${tool === t ? 'pressed' : ''}`} style={{ padding: '2px 6px', fontSize: 10, minWidth: 0 }} onClick={() => setTool(t)}>{t}</button>
        ))}
        <div style={{ width: 1, height: 22, background: '#808080', margin: '0 4px', boxShadow: '1px 0 #fff' }} />
        <select className="win-select" style={{ fontSize: 10, height: 22 }} value={lineWidth} onChange={e => setLineWidth(Number(e.target.value))}>
          {[1,2,3,4,6,8].map(n => <option key={n} value={n}>{n}px</option>)}
        </select>
        <button className="btn-win" style={{ padding: '2px 6px', fontSize: 10, minWidth: 0 }} onClick={clearCanvas}>Clear</button>
      </div>

      {/* Canvas + Color Palette */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Color sidebar */}
        <div style={{ width: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4, borderRight: '1px solid #808080', gap: 2 }}>
          {/* Active colors */}
          <div style={{ position: 'relative', width: 18, height: 18, marginBottom: 4 }}>
            <div style={{ position: 'absolute', left: 2, top: 2, width: 12, height: 12, background: bgColor, border: '1px solid #000' }} />
            <div style={{ position: 'absolute', left: 0, top: 0, width: 12, height: 12, background: color, border: '1px solid #000' }} />
          </div>
        </div>

        {/* Canvas */}
        <div className="win-inset" style={{ flex: 1, overflow: 'auto', background: '#808080', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', padding: 4 }}>
          <canvas
            ref={canvasRef}
            width={500}
            height={380}
            style={{ background: bgColor, cursor: tool === '✏️ Pencil' ? 'crosshair' : tool === '🔲 Eraser' ? 'cell' : 'default' }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={() => setDrawing(false)}
            onMouseLeave={() => setDrawing(false)}
          />
        </div>
      </div>

      {/* Color palette */}
      <div style={{ padding: 4, borderTop: '1px solid #808080', background: '#c0c0c0', display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {COLORS.map((c, i) => (
          <div
            key={i}
            style={{ width: 14, height: 14, background: c, border: c === color ? '2px inset #000' : '1px solid #808080', cursor: 'default' }}
            onClick={() => setColor(c)}
            onContextMenu={e => { e.preventDefault(); setBgColor(c); }}
            title={c}
          />
        ))}
      </div>

      <div className="win-statusbar">
        <div className="win-statusbar-panel">Color: {color} | BG: {bgColor}</div>
      </div>
    </div>
  );
}
