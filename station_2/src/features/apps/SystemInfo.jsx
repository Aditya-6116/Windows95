import React, { useState } from 'react';
import HiddenChar from '../../components/puzzle/HiddenChar';

export default function SystemInfo({ winId }) {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', fontSize: 11, background: '#c0c0c0' }}>
      {/* Tabs */}
      <div style={{ display: 'flex', gap: 2, padding: '6px 6px 0', borderBottom: '1px solid #808080' }}>
        <button
          className={`win-tab-btn ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`win-tab-btn ${activeTab === 'hardware' ? 'active' : ''}`}
          onClick={() => setActiveTab('hardware')}
        >
          Hardware
        </button>
        <button
          className={`win-tab-btn ${activeTab === 'network' ? 'active' : ''}`}
          onClick={() => setActiveTab('network')}
        >
          Network
        </button>
      </div>

      {/* Tab Body */}
      <div style={{ flex: 1, padding: 12, overflowY: 'auto' }}>
        {activeTab === 'general' && (
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ fontSize: 40, textAlign: 'center', width: 64 }}>💻</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <fieldset style={{ border: '1px solid #808080', padding: 8 }}>
                <legend style={{ padding: '0 4px', color: '#000080', fontWeight: 'bold' }}>System</legend>
                <div>
                  Varma Laboratory OS 4.7 Advanced Edition
                </div>
                <div style={{ color: '#404040', marginTop: 2 }}>Build 1998.1104-Release</div>
                <div style={{ color: '#404040' }}>Copyright © 1994-1998 Varma Laboratories</div>
              </fieldset>

              <fieldset style={{ border: '1px solid #808080', padding: 8 }}>
                <legend style={{ padding: '0 4px', color: '#000080', fontWeight: 'bold' }}>Registered to</legend>
                <div>Dr. D. Varma</div>
                <div style={{ color: '#404040' }}>Varma Bio-Cybernetics Research Division</div>
                <div style={{ color: '#606060', fontSize: 10, marginTop: 2 }}>Product ID: 52409-OEM-0019482-11928</div>
              </fieldset>

              <fieldset style={{ border: '1px solid #808080', padding: 8 }}>
                <legend style={{ padding: '0 4px', color: '#000080', fontWeight: 'bold' }}>Computer</legend>
                <div>VARMA-LAB-PC</div>
                <div>Processor: Pentium-class CPU @ 450 MHz</div>
                <div>128.0 MB RAM</div>
              </fieldset>
            </div>
          </div>
        )}

        {activeTab === 'hardware' && (
          <fieldset style={{ border: '1px solid #808080', padding: 8, height: '100%' }}>
            <legend style={{ padding: '0 4px', color: '#000080', fontWeight: 'bold' }}>Hardware Resources</legend>
            <table style={{ width: '100%', fontSize: 11, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #808080', textAlign: 'left' }}>
                  <th style={{ padding: 2 }}>Device</th>
                  <th style={{ padding: 2 }}>Resource / Status</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style={{ padding: 2 }}>IRQ 00</td><td style={{ padding: 2 }}>System Timer (OK)</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 01</td><td style={{ padding: 2 }}>Standard 101/102-Key Keyboard</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 03</td><td style={{ padding: 2 }}>Communications Port (COM2)</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 04</td><td style={{ padding: 2 }}>Communications Port (COM1)</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 06</td><td style={{ padding: 2 }}>Standard Floppy Disk Controller</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 10</td><td style={{ padding: 2 }}>Ethernet Adapter 10/100 PCI</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 12</td><td style={{ padding: 2 }}>PS/2 Compatible Mouse</td></tr>
                <tr><td style={{ padding: 2 }}>IRQ 14</td><td style={{ padding: 2 }}>Primary IDE Controller</td></tr>
              </tbody>
            </table>
          </fieldset>
        )}

        {activeTab === 'network' && (
          <fieldset style={{ border: '1px solid #808080', padding: 8 }}>
            <legend style={{ padding: '0 4px', color: '#000080', fontWeight: 'bold' }}>Network Environment</legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div><strong>Network ID:</strong> LAB-NET</div>
              <div><strong>Domain:</strong> VARMA-RESEARCH.LOCAL</div>
              <div><strong>IP Address:</strong> 192.168.10.24</div>
              <div><strong>Subnet Mask:</strong> 255.255.255.0</div>
              <div><strong>Default Gateway:</strong> 192.168.10.1</div>
              <div><strong>DNS Server:</strong> 192.168.10.2</div>
              <div style={{ marginTop: 8, color: '#008000' }}>● Connection Status: Operational</div>
            </div>
          </fieldset>
        )}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '6px 8px', borderTop: '1px solid #808080' }}>
        <button className="btn-win" style={{ width: 75 }} onClick={() => {}}>OK</button>
      </div>
    </div>
  );
}
