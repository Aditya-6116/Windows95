import React from 'react';
import { systemLogs } from '../../data/logs';

export default function SystemLog({ winId }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11 }}>
      {/* Header */}
      <div style={{ padding: '6px 10px', borderBottom: '1px solid #808080', background: '#c0c0c0' }}>
        <p style={{ fontWeight: 'bold' }}>📋 SYSTEM ACCESS LOG</p>
        <p style={{ fontSize: 10, color: '#404040' }}>VARMA-LAB-PC — 04/12/1998</p>
      </div>

      {/* Log Entries */}
      <div className="win-inset" style={{ flex: 1, overflowY: 'auto', fontFamily: 'Courier New, monospace', fontSize: 11 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #c0c0c0', background: '#e0e0e0' }}>
              <th style={{ textAlign: 'left', padding: '3px 8px', fontWeight: 'normal', width: 60 }}>Time</th>
              <th style={{ textAlign: 'left', padding: '3px 8px', fontWeight: 'normal', width: 120 }}>User / Process</th>
              <th style={{ textAlign: 'left', padding: '3px 8px', fontWeight: 'normal', width: 140 }}>Event</th>
              <th style={{ textAlign: 'left', padding: '3px 8px', fontWeight: 'normal' }}>Detail</th>
            </tr>
          </thead>
          <tbody>
            {systemLogs.map((entry, i) => {
              const isA17 = entry.user === 'A-17';
              return (
                <tr
                  key={i}
                  style={{
                    borderBottom: '1px solid #e8e8e8',
                    background: isA17 ? '#ffffc0' : i % 2 === 0 ? '#ffffff' : '#f8f8f8',
                  }}
                >
                  <td style={{ padding: '3px 8px', color: '#404040' }}>{entry.time}</td>
                  <td style={{ padding: '3px 8px', fontWeight: isA17 ? 'bold' : 'normal', color: isA17 ? '#800000' : '#000' }}>{entry.user}</td>
                  <td style={{ padding: '3px 8px' }}>{entry.event}</td>
                  <td style={{ padding: '3px 8px', color: '#404040' }}>{entry.detail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="win-statusbar">
        <div className="win-statusbar-panel" style={{ flex: 1 }}>
          {systemLogs.length} entries — Log file: C:\LAB\Records\ACCESS_LOG.TXT
        </div>
      </div>
    </div>
  );
}
