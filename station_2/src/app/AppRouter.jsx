import React from 'react';
import FileExplorer from '../features/explorer/FileExplorer';
import Notepad from '../features/notepad/Notepad';
import ControlPanel from '../features/settings/ControlPanel';
import CommandPrompt from '../features/command-prompt/CommandPrompt';
import HelpSystem from '../features/help/HelpSystem';
import Search from '../features/search/Search';
import SystemLog from '../features/system-logs/SystemLog';
import Calculator from '../features/apps/Calculator';
import Paint from '../features/apps/Paint';
import CharacterMap from '../features/apps/CharacterMap';
import SystemInfo from '../features/apps/SystemInfo';
import RecycleBin from '../features/apps/RecycleBin';

export default function AppRouter({ win }) {
  const { app, props = {} } = win;
  switch (app) {
    case 'explorer':
      return <FileExplorer winId={win.id} initialPath={props.path || 'root'} {...props} />;
    case 'notepad':
      return <Notepad winId={win.id} {...props} />;
    case 'controlpanel':
      return <ControlPanel winId={win.id} initialPanel={props.panel} {...props} />;
    case 'cmd':
      return <CommandPrompt winId={win.id} {...props} />;
    case 'help':
      return <HelpSystem winId={win.id} {...props} />;
    case 'search':
      return <Search winId={win.id} {...props} />;
    case 'syslog':
      return <SystemLog winId={win.id} {...props} />;
    case 'calculator':
      return <Calculator winId={win.id} {...props} />;
    case 'paint':
      return <Paint winId={win.id} {...props} />;
    case 'charmap':
      return <CharacterMap winId={win.id} {...props} />;
    case 'sysinfo':
      return <SystemInfo winId={win.id} {...props} />;
    case 'recycle':
      return <RecycleBin winId={win.id} {...props} />;
    default:
      return (
        <div style={{ padding: 12, fontFamily: 'inherit', fontSize: 11 }}>
          <p>
            Application not found: <strong>{app}</strong>
          </p>
        </div>
      );
  }
}
