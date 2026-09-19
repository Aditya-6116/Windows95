// Hidden character configuration for Station 2
// Target phrase to discover: "A-17 WAS HERE"
// Characters are subtly integrated across the OS with classic typographic anomalies.

const hiddenCharacters = [
  // ── Word 1: A-17 ──────────────────────────────────────────────
  {
    id: 'clue-01',
    character: 'A',
    location: 'desktop',
    targetElement: 'recycle-bin-label',
    styleVariant: 'bold',
    hint: 'Desktop icon',
    discovered: false,
  },
  {
    id: 'clue-02',
    character: '-',
    location: 'readme-properties',
    targetElement: 'file-type-label',
    styleVariant: 'thin',
    hint: 'README properties dialog',
    discovered: false,
  },
  {
    id: 'clue-03',
    character: '1',
    location: 'display-settings',
    targetElement: 'resolution-label',
    styleVariant: 'mono',
    hint: 'Display settings panel',
    discovered: false,
  },
  {
    id: 'clue-04',
    character: '7',
    location: 'command-prompt-sysinfo',
    targetElement: 'sysinfo-network',
    styleVariant: 'italic',
    hint: 'Command Prompt — systeminfo network IP',
    discovered: false,
  },

  // ── Word 2: WAS ──────────────────────────────────────────────
  {
    id: 'clue-05',
    character: 'W',
    location: 'search',
    targetElement: 'search-header',
    styleVariant: 'bold',
    hint: 'Search results header',
    discovered: false,
  },
  {
    id: 'clue-06',
    character: 'A',
    location: 'system-info',
    targetElement: 'os-edition-label',
    styleVariant: 'smallcaps',
    hint: 'System Information',
    discovered: false,
  },
  {
    id: 'clue-07',
    character: 'S',
    location: 'control-mouse',
    targetElement: 'pointer-speed-label',
    styleVariant: 'underline',
    hint: 'Control Panel → Mouse',
    discovered: false,
  },

  // ── Word 3: HERE ─────────────────────────────────────────────
  {
    id: 'clue-08',
    character: 'H',
    location: 'help-about',
    targetElement: 'about-computer-label',
    styleVariant: 'mono',
    hint: 'Help → About This Computer',
    discovered: false,
  },
  {
    id: 'clue-09',
    character: 'E',
    location: 'file-explorer-lab',
    targetElement: 'records-folder-label',
    styleVariant: 'italic',
    hint: 'C:\\Lab\\Records',
    discovered: false,
  },
  {
    id: 'clue-10',
    character: 'R',
    location: 'command-prompt-ver',
    targetElement: 'ver-output',
    styleVariant: 'italic',
    hint: 'Command Prompt — ver command',
    discovered: false,
  },
  {
    id: 'clue-11',
    character: 'E',
    location: 'command-prompt-help',
    targetElement: 'help-output',
    styleVariant: 'italic',
    hint: 'Command Prompt — help command',
    discovered: false,
  },
];

export const TARGET_PHRASE = 'A-17 WAS HERE';

export default hiddenCharacters;
