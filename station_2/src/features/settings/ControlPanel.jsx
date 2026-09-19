import React, { useState } from 'react';
import useOsStore from '../../store/osStore';
import Win95Icon from '../../components/common/Win95Icon';

// ── Individual Panels ──────────────────────────────────────────────────
function PanelDisplay() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Display Settings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div className="win-raised" style={{ padding: 8 }}>
          <p style={{ marginBottom: 4 }}>Screen Resolution</p>
          <p>1024 × 768</p>
          <br />
          <p style={{ marginBottom: 4 }}>Color Depth</p>
          <p>High Color (16-bit) — 65536 colors</p>
        </div>
        <div className="win-raised" style={{ padding: 8 }}>
          <p style={{ marginBottom: 4 }}>Refresh Rate</p>
          <p>60 Hz</p>
          <br />
          <p style={{ marginBottom: 4 }}>Adapter</p>
          <p>Standard VGA</p>
        </div>
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button className="btn-win">Apply</button>
        <button className="btn-win">Advanced...</button>
      </div>
    </div>
  );
}

function PanelMouse() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Mouse Properties</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ marginBottom: 4 }}>Button Configuration</p>
        <label><input type="radio" defaultChecked /> Right-handed</label>
        <br />
        <label><input type="radio" /> Left-handed</label>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p style={{ marginBottom: 4 }}>Pointer Speed</p>
        <p>Slow ←——— | ———→ Fast</p>
        <br />
        <p style={{ marginBottom: 4 }}>Double-click Speed</p>
        <p>Medium</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn-win">Apply</button>
      </div>
    </div>
  );
}

function PanelKeyboard() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Keyboard Properties</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ marginBottom: 4 }}>Character Repeat</p>
        <p style={{ marginBottom: 2 }}>Repeat Delay: Short</p>
        <p>Repeat Rate: Slow ←—————→ Fast</p>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p style={{ marginBottom: 4 }}>Cursor Blink Rate</p>
        <p>Medium</p>
      </div>
      <div style={{ marginTop: 12 }}>
        <button className="btn-win">Apply</button>
      </div>
    </div>
  );
}

function PanelNetwork() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Network Connections</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ fontWeight: 'bold', marginBottom: 2 }}>LAB-NET</p>
        <p>Status: Connected</p>
        <br />
        <p>Ethernet Adapter</p>
        <p>IP Address: 192.168.10.7</p>
        <br />
        <p style={{ marginTop: 4 }}>Subnet Mask: 255.255.255.0</p>
      </div>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ fontWeight: 'bold', marginBottom: 2 }}>Advanced</p>
        <p>Gateway: 192.168.10.1</p>
        <br />
        <p style={{ marginTop: 2 }}>DNS: 192.168.10.2</p>
      </div>
      <button className="btn-win">Diagnostics...</button>
    </div>
  );
}

function PanelSystem() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>System Properties</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p><strong>Computer Name:</strong> VARMA-LAB-PC</p>
        <p><strong>Workgroup:</strong> LAB-NET</p>
        <p><strong>OS:</strong> VarmaOS 4.7</p>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p><strong>Physical Memory:</strong> 128 MB</p>
        <p><strong>Virtual Memory:</strong> 256 MB</p>
        <p><strong>Page File:</strong> C:\pagefile.sys</p>
      </div>
    </div>
  );
}

function PanelUsers() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>User Accounts</h3>
      {[
        { name: 'Dr. Varma',    role: 'Administrator',    icon: '👤' },
        { name: 'Lab Assistant',role: 'Standard User',     icon: '👤' },
        { name: 'A-17',         role: 'Privileged Access', icon: '🔒' },
      ].map(u => (
        <div key={u.name} className="win-raised" style={{ padding: 8, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 20 }}>{u.icon}</span>
          <div>
            <p style={{ fontWeight: 'bold' }}>{u.name}</p>
            <p style={{ color: '#404040' }}>{u.role}</p>
          </div>
        </div>
      ))}
      <p style={{ marginTop: 4, color: '#808080', fontSize: 10 }}>A-17 — access identifier. Contact system administrator.</p>
      <p>Access Level: Privileged (restricted)</p>
    </div>
  );
}

function PanelSounds() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Sounds and Multimedia</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Sound Scheme:</p>
        <p>Lab Default v1.0</p>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p style={{ marginBottom: 4 }}>Events:</p>
        <p>System Start — (None)</p>
        <p>System Exit  — (None)</p>
        <p>Error        — Beep</p>
      </div>
    </div>
  );
}

function PanelDateTime() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Date & Time</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Date: December 4, 1998</p>
        <p>Time: 11:58:07 PM</p>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p>Time Zone:</p>
        <p>(GMT+5:30) India Standard Time — UTC offset: +5:30</p>
      </div>
    </div>
  );
}

function PanelRegional() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Regional Settings</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Locale:</p>
        <p>English (India) — en-IN</p>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p>Number Format: 1,234.56</p>
        <p>Currency: ₹ INR</p>
        <p>Date: DD/MM/YYYY</p>
        <p>Time: 12-hour</p>
      </div>
    </div>
  );
}

function PanelAccessibility() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Accessibility Options</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ marginBottom: 4 }}>Keyboard</p>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <input type="checkbox" />
          StickyKeys — Press modifier keys one at a time
        </label>
        <label style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 4 }}>
          <input type="checkbox" />
          FilterKeys — Ignore repeated keystrokes
        </label>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p>Display</p>
        <label><input type="checkbox" /> High Contrast Mode</label>
      </div>
    </div>
  );
}

function PanelPrinters() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Printers</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ fontWeight: 'bold' }}>🖨️ HP LaserJet 1200</p>
        <p>Status: Ready</p>
        <br />
        <p>Port: LPT1</p>
        <p>Default: Yes</p>
      </div>
      <button className="btn-win">Add Printer...</button>
    </div>
  );
}

function PanelFonts() {
  const fonts = ['Arial', 'Courier New', 'Times New Roman', 'Tahoma', 'Verdana', 'Impact'];
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Fonts</h3>
      <div className="win-inset" style={{ maxHeight: 160, overflowY: 'auto', padding: 4, marginBottom: 8 }}>
        {fonts.map(f => <p key={f} style={{ padding: '2px 4px', fontFamily: f }}>{f}</p>)}
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p>Sample:</p>
        <p>The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
}

function PanelInternet() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Internet Options</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Home Page:</p>
        <p>about:blank (URL: not configured)</p>
      </div>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Temporary Internet Files</p>
        <p style={{ color: '#808080' }}>Cache: 0 KB used</p>
        <button className="btn-win" style={{ marginTop: 4 }}>Delete Files...</button>
      </div>
      <div className="win-raised" style={{ padding: 8 }}>
        <p>Security: Medium</p>
        <p>Cookies: Accept All</p>
      </div>
    </div>
  );
}

// ── Panel Registry ─────────────────────────────────────────────────────
const panels = [
  { id: 'display',       label: 'Display',           icon: 'display',       component: PanelDisplay },
  { id: 'mouse',         label: 'Mouse',              icon: 'mouse',         component: PanelMouse },
  { id: 'keyboard',      label: 'Keyboard',           icon: 'keyboard',      component: PanelKeyboard },
  { id: 'network',       label: 'Network',            icon: 'network',       component: PanelNetwork },
  { id: 'sounds',        label: 'Sounds',             icon: 'speaker',       component: PanelSounds },
  { id: 'system',        label: 'System',             icon: 'sysinfo',       component: PanelSystem },
  { id: 'users',         label: 'Users',              icon: 'user',          component: PanelUsers },
  { id: 'datetime',      label: 'Date & Time',        icon: 'datetime',      component: PanelDateTime },
  { id: 'regional',      label: 'Regional Settings',  icon: 'regional',      component: PanelRegional },
  { id: 'accessibility', label: 'Accessibility',      icon: 'accessibility', component: PanelAccessibility },
  { id: 'printers',      label: 'Printers',           icon: 'printer',       component: PanelPrinters },
  { id: 'fonts',         label: 'Fonts',              icon: 'fonts',         component: PanelFonts },
  { id: 'internet',      label: 'Internet Options',   icon: 'internet',      component: PanelInternet },
];

export default function ControlPanel({ winId, initialPanel }) {
  const [activePanel, setActivePanel] = useState(initialPanel || null);
  const markVisited = useOsStore(s => s.markVisited);

  const selectPanel = (id) => {
    setActivePanel(id);
    markVisited(`control-${id}`);
  };

  const ActiveComponent = activePanel ? panels.find(p => p.id === activePanel)?.component : null;

  return (
    <div style={{ display: 'flex', height: '100%', fontSize: 11 }}>
      {/* Panel List */}
      <div style={{ width: 160, borderRight: '1px solid #808080', overflowY: 'auto', background: '#c0c0c0' }}>
        {activePanel && (
          <div
            style={{ padding: '4px 8px', borderBottom: '1px solid #808080', cursor: 'default', color: '#000080', fontWeight: 'bold', fontSize: 10 }}
            onClick={() => setActivePanel(null)}
          >
            ← Back
          </div>
        )}
        {panels.map(p => (
          <div
            key={p.id}
            style={{
              display: 'flex', alignItems: 'center', gap: 6,
              padding: '5px 8px', cursor: 'default',
              background: activePanel === p.id ? 'var(--win-highlight)' : 'transparent',
              color: activePanel === p.id ? 'white' : 'black',
            }}
            onClick={() => selectPanel(p.id)}
          >
            <Win95Icon name={p.icon} size={16} />
            <span style={{ fontSize: 11 }}>{p.label}</span>
          </div>
        ))}
      </div>

      {/* Panel Content */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#c0c0c0' }}>
        {ActiveComponent ? (
          <ActiveComponent />
        ) : (
          <div style={{ padding: 12 }}>
            <p style={{ marginBottom: 8, fontWeight: 'bold' }}>Control Panel</p>
            <p style={{ color: '#404040', marginBottom: 12 }}>
              Select a category on the left to view or change system settings.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {panels.map(p => (
                <div
                  key={p.id}
                  style={{
                    width: 80, display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: 6, cursor: 'default', gap: 4, border: '1px solid transparent',
                  }}
                  className="desktop-icon"
                  onClick={() => selectPanel(p.id)}
                  onDoubleClick={() => selectPanel(p.id)}
                >
                  <Win95Icon name={p.icon} size={32} />
                  <span style={{ fontSize: 10, textAlign: 'center', color: 'black', textShadow: 'none' }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
