import React, { useState } from 'react';
import MenuBar from '../../components/menus/MenuBar';
import useOsStore from '../../store/osStore';
import Win95Icon from '../../components/common/Win95Icon';

const INITIAL_DELETED_ITEMS = [
  {
    name: 'corrupted_echo_trace.tmp',
    originalLoc: 'C:\\Lab\\Research',
    dateDeleted: '12/04/1998 21:14',
    size: '1.2 KB',
    type: 'TMP File',
    content: '[HEX TRACE DUMP - BUFFER OVERFLOW ERROR]\n0x004128 FAULT IN ROUTINE ECHO_VALIDATE\nSESSION TERMINATED PREMATURELY BY REMOTE HOST.\nORIGIN: TERMINAL_A17',
  },
  {
    name: 'draft_memo_re_security.txt',
    originalLoc: 'C:\\Documents',
    dateDeleted: '12/03/1998 17:40',
    size: '0.8 KB',
    type: 'Text Document',
    content: 'MEMO DRAFT (DISCARDED)\n\nTo: Director\nFrom: Dr. D. Varma\n\nI have noticed discrepancies in our after-hours lab access records. Specifically, terminal sessions logged under priority code A-17 do not match scheduled maintenance windows.\n\nI will audit the system event viewer directly.',
  },
  {
    name: 'lab_cleaning_schedule_nov.doc',
    originalLoc: 'C:\\Documents',
    dateDeleted: '12/01/1998 09:12',
    size: '14.5 KB',
    type: 'Word Document',
    content: 'Varma Laboratory - Sanitation Schedule (November 1998)\nAll staff must ensure cleanroom doors are sealed by 20:00.',
  },
];

export default function RecycleBin({ winId }) {
  const [items, setItems] = useState(INITIAL_DELETED_ITEMS);
  const [selected, setSelected] = useState(null);
  const openWindow = useOsStore((s) => s.openWindow);

  const handleEmpty = () => {
    setItems([]);
    setSelected(null);
  };

  const handleOpenItem = (item) => {
    openWindow({
      app: 'notepad',
      title: item.name,
      icon: '📄',
      width: 440,
      height: 280,
      props: { content: item.content, readOnly: true },
    });
  };

  const menus = [
    {
      label: 'File',
      items: [
        { label: 'Empty Recycle Bin', action: handleEmpty, disabled: items.length === 0 },
        { separator: true },
        { label: 'Close', action: () => {} },
      ],
    },
    { label: 'View', items: [{ label: 'Details', action: () => {} }] },
    { label: 'Help', items: [{ label: 'Help Topics', disabled: true }] },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      <MenuBar menus={menus} />

      {/* Toolbar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '3px 6px', background: '#c0c0c0', borderBottom: '1px solid #808080' }}>
        <button
          className="btn-win"
          style={{ padding: '2px 8px', display: 'inline-flex', alignItems: 'center', gap: 4 }}
          onClick={handleEmpty}
          disabled={items.length === 0}
        >
          <Win95Icon name="recycle-bin" size={14} />
          <span>Empty Recycle Bin</span>
        </button>
      </div>

      {/* Items List */}
      <div className="win-inset" style={{ flex: 1, overflowY: 'auto', background: '#ffffff', padding: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 11 }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #808080', background: '#f0f0f0', textAlign: 'left' }}>
              <th style={{ padding: '2px 6px', fontWeight: 'normal' }}>Name</th>
              <th style={{ padding: '2px 6px', fontWeight: 'normal' }}>Original Location</th>
              <th style={{ padding: '2px 6px', fontWeight: 'normal', width: 110 }}>Date Deleted</th>
              <th style={{ padding: '2px 6px', fontWeight: 'normal', width: 60 }}>Size</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const isSelected = selected === item.name;
              return (
                <tr
                  key={item.name}
                  style={{
                    background: isSelected ? 'var(--win-highlight)' : 'transparent',
                    color: isSelected ? '#ffffff' : '#000000',
                    cursor: 'default',
                  }}
                  onClick={() => setSelected(item.name)}
                  onDoubleClick={() => handleOpenItem(item)}
                >
                  <td style={{ padding: '2px 6px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                      <Win95Icon name={item.name} size={14} />
                      {item.name}
                    </span>
                  </td>
                  <td style={{ padding: '2px 6px' }}>{item.originalLoc}</td>
                  <td style={{ padding: '2px 6px' }}>{item.dateDeleted}</td>
                  <td style={{ padding: '2px 6px' }}>{item.size}</td>
                </tr>
              );
            })}
            {items.length === 0 && (
              <tr>
                <td colSpan={4} style={{ padding: 16, textAlign: 'center', color: '#808080' }}>
                  The Recycle Bin is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Status Bar */}
      <div className="win-statusbar">
        <div className="win-statusbar-panel" style={{ flex: 1 }}>
          {items.length} item(s)
        </div>
      </div>
    </div>
  );
}
