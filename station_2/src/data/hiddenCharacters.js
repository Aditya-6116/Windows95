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
    hint: 'Desktop — Recycle Bin icon label',
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
    location: 'start-menu',
    targetElement: 'documents-menu-item',
    styleVariant: 'mono',
    hint: 'Start Menu → Documents item',
    discovered: false,
  },
  {
    id: 'clue-04',
    character: '7',
    location: 'start-programs-submenu',
    targetElement: 'programs-accessories-item',
    styleVariant: 'italic',
    hint: 'Start Menu → Programs submenu',
    discovered: false,
  },

  // ── Word 2: WAS ──────────────────────────────────────────────
  {
    id: 'clue-05',
    character: 'W',
    location: 'start-menu',
    targetElement: 'search-menu-item',
    styleVariant: 'bold',
    hint: 'Start Menu → Search item',
    discovered: false,
  },
  {
    id: 'clue-06',
    character: 'A',
    location: 'start-settings-submenu',
    targetElement: 'settings-controlpanel-item',
    styleVariant: 'smallcaps',
    hint: 'Start Menu → Settings submenu',
    discovered: false,
  },
  {
    id: 'clue-07',
    character: 'S',
    location: 'start-menu',
    targetElement: 'settings-menu-item',
    styleVariant: 'underline',
    hint: 'Start Menu → Settings item',
    discovered: false,
  },

  // ── Word 3: HERE ─────────────────────────────────────────────
  {
    id: 'clue-08',
    character: 'H',
    location: 'start-menu',
    targetElement: 'help-menu-item',
    styleVariant: 'mono',
    hint: 'Start Menu → Help item',
    discovered: false,
  },
  {
    id: 'clue-09',
    character: 'E',
    location: 'file-explorer-lab',
    targetElement: 'records-folder-label',
    styleVariant: 'italic',
    hint: 'File Explorer — C:\\Lab\\Records',
    discovered: false,
  },
  {
    id: 'clue-10',
    character: 'R',
    location: 'notepad-menu',
    targetElement: 'help-menu-item',
    styleVariant: 'italic',
    hint: 'Notepad — Help menu',
    discovered: false,
  },
  {
    id: 'clue-11',
    character: 'E',
    location: 'explorer-menu',
    targetElement: 'view-menu-item',
    styleVariant: 'italic',
    hint: 'File Explorer — View menu',
    discovered: false,
  },
];

export const TARGET_PHRASE = 'A-17 WAS HERE';

export default hiddenCharacters;
