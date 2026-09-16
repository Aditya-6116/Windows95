// Desktop icon configuration
const desktopData = [
  { id: 'my-computer',    label: 'My Computer',     icon: 'mycomputer',  app: 'mycomputer',  row: 0, col: 0 },
  { id: 'my-documents',   label: 'My Documents',    icon: 'folder',      app: 'explorer',    row: 1, col: 0, path: 'C:/Documents' },
  { id: 'readme',         label: 'README.TXT',      icon: 'document',    app: 'notepad',     row: 2, col: 0, filePath: 'C:/Lab/Records/README.TXT' },
  { id: 'research',       label: 'Research',        icon: 'microscope',  app: 'explorer',    row: 3, col: 0, path: 'C:/Lab/Research' },
  { id: 'laboratory',     label: 'Laboratory',      icon: 'flask',       app: 'explorer',    row: 4, col: 0, path: 'C:/Lab' },
  { id: 'old-reports',    label: 'Old Reports',     icon: 'archive',     app: 'explorer',    row: 5, col: 0, path: 'C:/Lab/Old Reports' },
  { id: 'meeting-notes',  label: 'Meeting Notes',   icon: 'syslog',      app: 'notepad',     row: 6, col: 0, filePath: 'C:/Documents/MEETING_NOTES.TXT' },
  { id: 'network',        label: 'Network',         icon: 'network',     app: 'explorer',    row: 7, col: 0, path: 'Z:' },
  { id: 'recycle-bin',    label: 'Recycle Bin',     icon: 'recycle-bin', app: 'recycle',     row: 8, col: 0 },
  { id: 'notepad',        label: 'Notepad',         icon: 'notepad',     app: 'notepad',     row: 0, col: 1 },
  { id: 'control-panel',  label: 'Control Panel',   icon: 'controlpanel', app: 'controlpanel', row: 1, col: 1 },
  { id: 'cmd',            label: 'Command Prompt',  icon: 'cmd',         app: 'cmd',         row: 2, col: 1 },
  { id: 'help',           label: 'Help',            icon: 'help',        app: 'help',        row: 3, col: 1 },
  { id: 'pictures',       label: 'Pictures',        icon: 'image',       app: 'explorer',    row: 4, col: 1, path: 'C:/Documents' },
  { id: 'archive',        label: 'Archive',         icon: 'archive',     app: 'explorer',    row: 5, col: 1, path: 'C:/Lab/Old Reports' },
  { id: 'personal',       label: 'Personal',        icon: 'lock',        app: 'explorer',    row: 6, col: 1, path: 'C:/Users/Varma' },
];

export default desktopData;
