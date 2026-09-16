import React, { useState } from 'react';
import useOsStore from '../../store/osStore';
import HiddenChar from '../../components/puzzle/HiddenChar';

// ── Individual Panels ──────────────────────────────────────────────────
function PanelDisplay() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Display Settings</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <div className="win-raised" style={{ padding: 8 }}>
          <p style={{ marginBottom: 4 }}>Screen Resolution</p>
          <HiddenChar clueId="clue-03" before="1024 × 7" after="8" />
          <br /><br />
          <p style={{ marginBottom: 4 }}>Color Depth</p>
          <HiddenChar clueId="clue-18" before="High Color (16-bit) — " after=" planes" />
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
        <HiddenChar clueId="clue-09" before="Slow ←——— " after=" ———→ Fast" />
        <br /><br />
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
        <HiddenChar clueId="clue-08" before="Repeat Rate: Slow ←— " after=" —→ Fast" />
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
        <HiddenChar clueId="clue-04" before="IP Address: 192.168.10.2" after="" />
        <br />
        <p style={{ marginTop: 4 }}>Subnet Mask: 255.255.255.0</p>
      </div>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p style={{ fontWeight: 'bold', marginBottom: 2 }}>Advanced</p>
        <HiddenChar clueId="clue-22" before="Gateway: 192.168.10." after="" />
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
      <HiddenChar clueId="clue-11" before="Access Level: Privilege" after=" (restricted)" />
    </div>
  );
}

function PanelSounds() {
  return (
    <div style={{ padding: 12, fontSize: 11 }}>
      <h3 style={{ fontWeight: 'bold', marginBottom: 8 }}>Sounds and Multimedia</h3>
      <div className="win-raised" style={{ padding: 8, marginBottom: 8 }}>
        <p>Sound Scheme:</p>
        <HiddenChar clueId="clue-15" before="Lab Default v" after=".0" />
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
        <HiddenChar clueId="clue-16" before="(GMT+5:30) India Standard Time — UTC offset: +" after="" />
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
        <HiddenChar clueId="clue-13" before="English (Indi" after=") — en-IN" />
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
          <HiddenChar clueId="clue-23" before="Sticky K" after="ys — Press modifier keys one at a time" />
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
        <HiddenChar clueId="clue-25" before="Status: Ready" after="" />
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
        <HiddenChar clueId="clue-12" before="The quick brown fox jumps over the lazy dog" after="" />
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
        <HiddenChar clueId="clue-20" before="about:blank (R" after="L: not configured)" />
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
  { id: 'display',       label: 'Display',           icon: '📺', component: PanelDisplay },
  { id: 'mouse',         label: 'Mouse',              icon: '🖱️', component: PanelMouse },
  { id: 'keyboard',      label: 'Keyboard',           icon: '⌨️', component: PanelKeyboard },
  { id: 'network',       label: 'Network',            icon: '🌐', component: PanelNetwork },
  { id: 'sounds',        label: 'Sounds',             icon: '🔊', component: PanelSounds },
  { id: 'system',        label: 'System',             icon: '🖥️', component: PanelSystem },
  { id: 'users',         label: 'Users',              icon: '👥', component: PanelUsers },
  { id: 'datetime',      label: 'Date & Time',        icon: '🕐', component: PanelDateTime },
  { id: 'regional',      label: 'Regional Settings',  icon: '🗺️', component: PanelRegional },
  { id: 'accessibility', label: 'Accessibility',      icon: '♿', component: PanelAccessibility },
  { id: 'printers',      label: 'Printers',           icon: '🖨️', component: PanelPrinters },
  { id: 'fonts',         label: 'Fonts',              icon: '🔤', component: PanelFonts },
  { id: 'internet',      label: 'Internet Options',   icon: '🌍', component: PanelInternet },
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
            <span style={{ fontSize: 16 }}>{p.icon}</span>
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
                    padding: 6, cursor: 'default', gap: 2, border: '1px solid transparent',
                  }}
                  className="desktop-icon"
                  onClick={() => selectPanel(p.id)}
                  onDoubleClick={() => selectPanel(p.id)}
                >
                  <span style={{ fontSize: 24 }}>{p.icon}</span>
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
