import React from 'react';

/**
 * Authentic Windows 95 SVG Icon Library
 * Provides pixel-sharp, authentic Windows 95 icons for all system apps, files, drives, and UI elements.
 */

const ICONS = {
  // ── Windows 95 Flying Flag Logo (Start Button / OS Brand) ──
  'windows': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Black flying pixel trails */}
      <rect x="2" y="5" width="2" height="2" fill="#000" />
      <rect x="5" y="3" width="2" height="2" fill="#000" />
      <rect x="3" y="10" width="2" height="2" fill="#000" />
      <rect x="1" y="16" width="2" height="2" fill="#000" />
      <rect x="4" y="21" width="2" height="2" fill="#000" />
      <rect x="2" y="26" width="2" height="2" fill="#000" />
      <rect x="6" y="27" width="2" height="2" fill="#000" />
      {/* Black waving grid lines */}
      <path d="M7 6 C11 4, 15 9, 20 6 C24 4, 27 5, 29 7 L26 25 C23 23, 19 25, 16 23 C12 21, 8 26, 6 24 Z" fill="#000" />
      {/* Red Tile (Top Left) */}
      <path d="M8 7 C11 5.5, 14 9, 17 7.5 L16.5 14.5 C13.5 16, 11 13, 8 14.5 Z" fill="#EE3233" />
      <path d="M9 8 C11.5 6.8, 13.5 9.5, 15.5 8.3 L15.2 13.5 C13.2 14.7, 11.2 12.2, 9 13.5 Z" fill="#FF5B5C" />
      {/* Green Tile (Top Right) */}
      <path d="M18.5 7 C21.5 5.5, 24 6.2, 27.5 7.8 L25.8 14.8 C22.8 13.5, 20.8 14.5, 18 14 Z" fill="#00A859" />
      <path d="M19.5 8 C22 6.8, 24 7.2, 26.5 8.5 L25 13.8 C22.8 12.6, 21 13.5, 19 13.2 Z" fill="#4EDB86" />
      {/* Blue Tile (Bottom Left) */}
      <path d="M8 16 C11 14.5, 13.5 17.5, 16.5 16 L16 23 C13 24.5, 11 21.5, 7.5 23 Z" fill="#0055EA" />
      <path d="M9 17 C11.5 15.8, 13.2 18, 15.2 16.8 L14.8 22 C12.8 23.2, 11 20.8, 8.5 22 Z" fill="#4B8BF5" />
      {/* Yellow Tile (Bottom Right) */}
      <path d="M18 15.5 C21 15, 23 14, 25.5 16 L24 23 C21.5 21.5, 19.5 22.5, 17.5 22.5 Z" fill="#FFB900" />
      <path d="M19 16.5 C21.2 16, 22.8 15.2, 24.5 16.8 L23.2 22 C21.2 20.8, 19.8 21.5, 18.2 21.5 Z" fill="#FFE066" />
    </svg>
  ),

  // ── My Computer (Beige CRT Monitor on Desktop Unit) ──
  'mycomputer': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Drop Shadow */}
      <rect x="4" y="27" width="25" height="3" fill="#000000" opacity="0.4" />
      {/* Monitor Outer Shell */}
      <rect x="4" y="3" width="24" height="19" fill="#c0c0c0" />
      <path d="M4 3 L28 3 L28 4 L5 4 L5 22 L4 22 Z" fill="#ffffff" />
      <path d="M28 3 L28 22 L4 22 L5 21 L27 21 L27 4 Z" fill="#808080" />
      {/* Monitor Screen Bevel (Sunken) */}
      <rect x="7" y="5" width="18" height="13" fill="#000000" />
      <rect x="8" y="6" width="16" height="11" fill="#008080" />
      {/* Screen contents: Mini Windows desktop */}
      <rect x="9" y="7" width="8" height="5" fill="#ffffff" />
      <rect x="9" y="7" width="8" height="1.5" fill="#000080" />
      <rect x="10" y="9.5" width="4" height="1" fill="#808080" />
      <rect x="18" y="13" width="3" height="3" fill="#ffffff" />
      {/* Screen Glare reflection */}
      <polygon points="19,6 23,6 17,16 13,16" fill="#20b2aa" opacity="0.4" />
      {/* Monitor Power LED */}
      <rect x="23" y="19" width="2" height="1.5" fill="#00ff00" />
      <rect x="20" y="19" width="2" height="1.5" fill="#808080" />
      {/* Stand Neck */}
      <rect x="13" y="22" width="6" height="2" fill="#c0c0c0" />
      <rect x="13" y="22" width="1" height="2" fill="#ffffff" />
      <rect x="18" y="22" width="1" height="2" fill="#808080" />
      {/* Computer Base Case */}
      <rect x="3" y="24" width="26" height="5" fill="#dfdfdf" />
      <path d="M3 24 L29 24 L29 25 L4 25 L4 29 L3 29 Z" fill="#ffffff" />
      <path d="M29 24 L29 29 L3 29 L4 28 L28 28 L28 25 Z" fill="#808080" />
      {/* 3.5" Floppy Drive Slot */}
      <rect x="18" y="25.5" width="8" height="1.5" fill="#000000" />
      <rect x="17" y="25.5" width="1" height="1.5" fill="#00ff00" />
      {/* 5.25" CD Bay Slot */}
      <rect x="6" y="25.5" width="9" height="2" fill="#808080" />
      <rect x="7" y="26" width="7" height="1" fill="#000000" />
    </svg>
  ),

  // ── Recycle Bin Full ──
  'recycle-bin': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Papers sticking out */}
      <polygon points="10,4 17,2 20,8 12,9" fill="#ffffff" />
      <polygon points="10,4 17,2 17,4" fill="#dfdfdf" />
      <polygon points="15,4 23,3 25,10 18,10" fill="#ffffff" />
      <rect x="17" y="5" width="4" height="1" fill="#000080" />
      <polygon points="7,7 14,5 15,11 8,12" fill="#dfdfdf" />
      {/* Bin Rim */}
      <ellipse cx="16" cy="11" rx="10" ry="2.5" fill="#808080" />
      <ellipse cx="16" cy="10.5" rx="9" ry="2" fill="#dfdfdf" />
      {/* Bin Body (Tapered) */}
      <polygon points="6,11 26,11 23,28 9,28" fill="#c0c0c0" />
      <polygon points="6,11 9,28 7,28 5,11" fill="#ffffff" opacity="0.6" />
      <polygon points="26,11 27,11 24,28 23,28" fill="#808080" />
      {/* Mesh rib lines */}
      <line x1="9" y1="12" x2="11" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="13" y1="12" x2="14" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="16" y1="12" x2="16" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="19" y1="12" x2="18" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="23" y1="12" x2="21" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="#808080" strokeWidth="1" />
      <line x1="9" y1="21" x2="23" y2="21" stroke="#808080" strokeWidth="1" />
      {/* Green Recycling Emblem */}
      <path d="M14 17 L17 14 L16 19 Z M18 20 L15 23 L19 22 Z" fill="#008000" />
      {/* Base */}
      <ellipse cx="16" cy="28" rx="7" ry="1.5" fill="#808080" />
    </svg>
  ),

  // ── Recycle Bin Empty ──
  'recycle-bin-empty': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Empty interior */}
      <ellipse cx="16" cy="10" rx="9" ry="2.5" fill="#404040" />
      {/* Bin Body */}
      <polygon points="6,10 26,10 23,28 9,28" fill="#c0c0c0" />
      <polygon points="6,10 9,28 7,28 5,10" fill="#ffffff" opacity="0.6" />
      <polygon points="26,10 27,10 24,28 23,28" fill="#808080" />
      {/* Mesh rib lines */}
      <line x1="9" y1="11" x2="11" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="13" y1="11" x2="14" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="16" y1="11" x2="16" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="19" y1="11" x2="18" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="23" y1="11" x2="21" y2="27" stroke="#808080" strokeWidth="1" />
      <line x1="8" y1="16" x2="24" y2="16" stroke="#808080" strokeWidth="1" />
      <line x1="9" y1="21" x2="23" y2="21" stroke="#808080" strokeWidth="1" />
      {/* Base */}
      <ellipse cx="16" cy="28" rx="7" ry="1.5" fill="#808080" />
    </svg>
  ),

  // ── Windows 95 Manila Yellow Folder ──
  'folder': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Back tab */}
      <polygon points="3,6 12,6 14,9 27,9 27,24 3,24" fill="#C89410" />
      <polygon points="3,6 12,6 14,9 15,9 13,7 3,7" fill="#FFE680" />
      {/* White sheets inside */}
      <rect x="6" y="8" width="20" height="12" fill="#ffffff" />
      <rect x="8" y="10" width="10" height="1" fill="#000080" />
      {/* Front flap */}
      <polygon points="2,12 28,12 26,26 2,26" fill="#FFC820" />
      <polygon points="2,12 28,12 27,13 3,13 3,26 2,26" fill="#FFEAA0" />
      <polygon points="28,12 28,13 26,26 25,26" fill="#806000" />
      <rect x="2" y="25" width="24" height="1" fill="#806000" />
    </svg>
  ),

  // ── Folder Open ──
  'folder-open': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Back Tab */}
      <polygon points="3,5 12,5 14,8 27,8 27,22 3,22" fill="#C89410" />
      {/* Documents sticking out */}
      <rect x="7" y="7" width="18" height="14" fill="#ffffff" />
      <rect x="9" y="9" width="12" height="1.5" fill="#000080" />
      <rect x="9" y="12" width="14" height="1" fill="#808080" />
      <rect x="9" y="14" width="10" height="1" fill="#808080" />
      {/* Front flap opened wide */}
      <polygon points="1,16 26,16 30,27 5,27" fill="#FFD230" />
      <polygon points="1,16 26,16 27,17 3,17" fill="#FFF0B0" />
      <polygon points="26,16 30,27 29,27 25,17" fill="#806000" />
      <rect x="5" y="26" width="25" height="1" fill="#806000" />
    </svg>
  ),

  // ── Text Document / Notepad (.TXT) ──
  'notepad': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Paper drop shadow */}
      <polygon points="6,3 20,3 27,10 27,29 6,29" fill="#000000" opacity="0.3" />
      {/* Paper Sheet */}
      <polygon points="5,2 19,2 26,9 26,28 5,28" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      {/* Dog-ear fold */}
      <polygon points="19,2 19,9 26,9" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      {/* Notepad spiral / text lines */}
      <rect x="8" y="6" width="9" height="2" fill="#000080" />
      <rect x="8" y="11" width="14" height="1" fill="#000080" />
      <rect x="8" y="14" width="14" height="1" fill="#808080" />
      <rect x="8" y="17" width="12" height="1" fill="#808080" />
      <rect x="8" y="20" width="14" height="1" fill="#808080" />
      <rect x="8" y="23" width="8" height="1" fill="#808080" />
      {/* Small blue/yellow pencil */}
      <polygon points="21,20 28,13 30,15 23,22" fill="#FFC700" />
      <polygon points="21,20 20,24 24,23" fill="#dfdfdf" />
      <polygon points="20,24 19,25 21,24" fill="#000000" />
      <polygon points="28,13 30,11 31,12 29,14" fill="#EE3233" />
    </svg>
  ),

  // ── Generic Document ──
  'document': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <polygon points="5,2 19,2 26,9 26,28 5,28" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <polygon points="19,2 19,9 26,9" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="8" y="6" width="8" height="2" fill="#000080" />
      <rect x="8" y="11" width="14" height="1" fill="#808080" />
      <rect x="8" y="14" width="14" height="1" fill="#808080" />
      <rect x="8" y="17" width="14" height="1" fill="#808080" />
      <rect x="8" y="20" width="11" height="1" fill="#808080" />
      <rect x="8" y="23" width="13" height="1" fill="#808080" />
    </svg>
  ),

  // ── Control Panel (Hammer, Screwdriver & Gear on Board) ──
  'controlpanel': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Base Folder / Panel */}
      <polygon points="3,6 12,6 14,9 28,9 28,26 3,26" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="5" y="10" width="21" height="13" fill="#808080" />
      <rect x="6" y="11" width="19" height="11" fill="#008080" />
      {/* Gear */}
      <circle cx="12" cy="18" r="4" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <circle cx="12" cy="18" r="1.5" fill="#008080" />
      {/* Screwdriver (Yellow/Black handle, steel shaft) */}
      <line x1="8" y1="24" x2="22" y2="10" stroke="#c0c0c0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="7" y1="25" x2="12" y2="20" stroke="#FFC700" strokeWidth="3.5" strokeLinecap="round" />
      {/* Claw Hammer (Wooden handle, steel head) */}
      <line x1="22" y1="24" x2="10" y2="12" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="7" y="10" width="7" height="3" fill="#ffffff" transform="rotate(-45 10 11)" stroke="#404040" strokeWidth="0.5" />
    </svg>
  ),

  // ── MS-DOS Command Prompt ──
  'cmd': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Window Frame */}
      <rect x="3" y="4" width="26" height="23" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="4" y="5" width="24" height="4" fill="#000080" />
      {/* Title dots */}
      <rect x="6" y="6" width="8" height="2" fill="#ffffff" />
      <rect x="24" y="6" width="2" height="2" fill="#c0c0c0" />
      {/* Black screen */}
      <rect x="5" y="10" width="22" height="15" fill="#000000" />
      {/* C:\>_ text prompt */}
      <text x="6" y="17" fill="#ffffff" fontFamily="monospace" fontSize="6" fontWeight="bold">C:\&gt;</text>
      <rect x="18" y="16" width="3" height="1" fill="#ffffff" />
    </svg>
  ),

  // ── Help (Yellow Book with Question Mark) ──
  'help': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Book Cover */}
      <polygon points="5,5 23,2 27,24 9,27" fill="#FFC820" stroke="#806000" strokeWidth="1" />
      <polygon points="5,5 9,27 7,27 3,5" fill="#C89410" />
      {/* Pages Edge */}
      <polygon points="23,2 26,4 29,23 27,24" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
      {/* Blue Question Mark on Cover */}
      <text x="14" y="19" fill="#000080" fontFamily="sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle">?</text>
    </svg>
  ),

  // ── Calculator ──
  'calculator': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Calculator Body */}
      <rect x="6" y="3" width="20" height="26" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <path d="M6 3 L26 3 L26 4 L7 4 L7 29 L6 29 Z" fill="#ffffff" />
      {/* LCD Display */}
      <rect x="9" y="6" width="14" height="5" fill="#000000" />
      <rect x="10" y="7" width="12" height="3" fill="#80c0c0" />
      <text x="21" y="9.5" fill="#000000" fontFamily="monospace" fontSize="3.5" fontWeight="bold" textAnchor="end">0.</text>
      {/* Keypad Buttons */}
      <rect x="9" y="13" width="3" height="2.5" fill="#EE3233" />
      <rect x="13" y="13" width="3" height="2.5" fill="#808080" />
      <rect x="17" y="13" width="3" height="2.5" fill="#808080" />
      <rect x="20" y="13" width="3" height="2.5" fill="#0055EA" />
      <rect x="9" y="17" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="13" y="17" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="17" y="17" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="20" y="17" width="3" height="2.5" fill="#0055EA" />
      <rect x="9" y="21" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="13" y="21" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="17" y="21" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="20" y="21" width="3" height="2.5" fill="#0055EA" />
      <rect x="9" y="25" width="7" height="2.5" fill="#dfdfdf" />
      <rect x="17" y="25" width="3" height="2.5" fill="#dfdfdf" />
      <rect x="20" y="25" width="3" height="2.5" fill="#0055EA" />
    </svg>
  ),

  // ── MS Paint ──
  'paint': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Palette */}
      <path d="M5 16 C5 8, 14 4, 23 7 C28 9, 29 16, 26 21 C24 24, 21 21, 18 23 C15 25, 17 28, 12 28 C7 28, 5 23, 5 16 Z" fill="#E6C280" stroke="#806000" strokeWidth="1" />
      {/* Thumb hole */}
      <ellipse cx="20" cy="22" rx="2" ry="1.5" fill="#008080" />
      {/* Paint Blobs */}
      <circle cx="10" cy="11" r="2" fill="#EE3233" />
      <circle cx="16" cy="8" r="2" fill="#FFC700" />
      <circle cx="22" cy="11" r="2" fill="#0055EA" />
      <circle cx="10" cy="18" r="2" fill="#00A859" />
      {/* Paintbrush */}
      <line x1="12" y1="26" x2="27" y2="7" stroke="#8B4513" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="25" y1="10" x2="28" y2="6" stroke="#c0c0c0" strokeWidth="3" />
      <polygon points="28,6 30,3 27,5" fill="#0055EA" />
    </svg>
  ),

  // ── Character Map ──
  'charmap': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="24" height="24" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <rect x="4" y="4" width="24" height="5" fill="#000080" />
      <line x1="12" y1="9" x2="12" y2="28" stroke="#808080" strokeWidth="1" />
      <line x1="20" y1="9" x2="20" y2="28" stroke="#808080" strokeWidth="1" />
      <line x1="4" y1="18" x2="28" y2="18" stroke="#808080" strokeWidth="1" />
      <text x="8" y="16" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">A</text>
      <text x="16" y="16" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">a</text>
      <text x="24" y="16" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">§</text>
      <text x="8" y="25" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">µ</text>
      <text x="16" y="25" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">Ω</text>
      <text x="24" y="25" fill="#000000" fontFamily="serif" fontSize="7" fontWeight="bold" textAnchor="middle">∞</text>
    </svg>
  ),

  // ── Network Neighborhood ──
  'network': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* PC 1 (Top Left) */}
      <rect x="3" y="3" width="13" height="10" fill="#c0c0c0" stroke="#404040" strokeWidth="0.5" />
      <rect x="5" y="5" width="9" height="6" fill="#008080" />
      <rect x="2" y="13" width="15" height="3" fill="#dfdfdf" stroke="#808080" strokeWidth="0.5" />
      {/* PC 2 (Bottom Right) */}
      <rect x="16" y="14" width="13" height="10" fill="#c0c0c0" stroke="#404040" strokeWidth="0.5" />
      <rect x="18" y="16" width="9" height="6" fill="#008080" />
      <rect x="15" y="24" width="15" height="3" fill="#dfdfdf" stroke="#808080" strokeWidth="0.5" />
      {/* Network Bus Cable & T-Connectors */}
      <path d="M9 16 L9 21 L22 21 L22 27" fill="none" stroke="#000080" strokeWidth="2" />
      <circle cx="9" cy="21" r="2" fill="#FFC700" />
      <circle cx="22" cy="21" r="2" fill="#FFC700" />
    </svg>
  ),

  // ── 3.5" Floppy Disk (A:) ──
  'floppy': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Disk Housing */}
      <polygon points="5,3 24,3 27,6 27,29 5,29" fill="#202050" stroke="#000000" strokeWidth="1" />
      {/* Metal Shutter Slider */}
      <rect x="9" y="3" width="13" height="10" fill="#c0c0c0" stroke="#808080" strokeWidth="0.5" />
      <rect x="12" y="5" width="3" height="6" fill="#000000" />
      {/* Paper Label */}
      <rect x="8" y="15" width="16" height="12" fill="#ffffff" />
      <rect x="8" y="15" width="16" height="3" fill="#EE3233" />
      <rect x="10" y="20" width="12" height="1" fill="#808080" />
      <rect x="10" y="23" width="8" height="1" fill="#808080" />
    </svg>
  ),

  // ── Hard Disk Drive (C:) ──
  'hard-drive': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Metallic Enclosure */}
      <rect x="4" y="6" width="24" height="20" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <path d="M4 6 L28 6 L28 7 L5 7 L5 26 L4 26 Z" fill="#ffffff" />
      {/* Platter Disk */}
      <circle cx="16" cy="16" r="7" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
      <circle cx="16" cy="16" r="2.5" fill="#808080" />
      {/* Read/Write Arm */}
      <line x1="16" y1="16" x2="23" y2="10" stroke="#404040" strokeWidth="1.5" />
      <circle cx="23" cy="10" r="1.5" fill="#EE3233" />
      {/* Connector Pins & LED */}
      <rect x="6" y="23" width="8" height="2" fill="#000000" />
      <rect x="23" y="23" width="2" height="2" fill="#00ff00" />
    </svg>
  ),

  // ── CD-ROM Drive (D:) ──
  'cdrom': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Shiny CD Platter */}
      <circle cx="16" cy="15" r="11" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
      {/* Rainbow reflection streaks */}
      <path d="M16 4 A11 11 0 0 1 27 15 L21 15 A5 5 0 0 0 16 10 Z" fill="#b0e0e6" opacity="0.7" />
      <path d="M16 26 A11 11 0 0 1 5 15 L11 15 A5 5 0 0 0 16 20 Z" fill="#dda0dd" opacity="0.7" />
      {/* Center Hole */}
      <circle cx="16" cy="15" r="3.5" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <circle cx="16" cy="15" r="1.5" fill="#008080" />
      {/* Drive Tray underneath */}
      <rect x="3" y="23" width="26" height="6" fill="#c0c0c0" stroke="#808080" strokeWidth="1" />
      <rect x="23" y="25.5" width="3" height="1.5" fill="#00ff00" />
      <rect x="18" y="25.5" width="3" height="1.5" fill="#808080" />
    </svg>
  ),

  // ── Find / Search ──
  'search': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Sheet of paper */}
      <polygon points="4,4 16,4 21,9 21,26 4,26" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <rect x="7" y="8" width="8" height="1.5" fill="#000080" />
      <rect x="7" y="12" width="11" height="1" fill="#808080" />
      <rect x="7" y="15" width="11" height="1" fill="#808080" />
      {/* Magnifying Glass */}
      <circle cx="18" cy="16" r="7" fill="#80d0ff" fillOpacity="0.4" stroke="#404040" strokeWidth="2" />
      <line x1="23" y1="21" x2="29" y2="27" stroke="#8B4513" strokeWidth="4" strokeLinecap="round" />
      {/* Glass shine */}
      <path d="M14 12 A5 5 0 0 1 20 12" stroke="#ffffff" strokeWidth="1.5" fill="none" />
    </svg>
  ),

  // ── Run Dialog ──
  'run': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Window */}
      <rect x="4" y="6" width="22" height="18" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <rect x="4" y="6" width="22" height="4" fill="#000080" />
      {/* Green/Blue Rush Arrow */}
      <polygon points="12,18 20,18 20,14 28,21 20,28 20,24 12,24" fill="#00A859" stroke="#004020" strokeWidth="0.5" />
    </svg>
  ),

  // ── Shut Down ──
  'shutdown': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="5" y="5" width="22" height="22" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <rect x="7" y="7" width="18" height="18" fill="#808080" />
      {/* Red Power Switch */}
      <circle cx="16" cy="16" r="6" fill="#EE3233" stroke="#400000" strokeWidth="1" />
      <line x1="16" y1="12" x2="16" y2="16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  // ── Log Off (Key) ──
  'logoff': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Brass Golden Key */}
      <circle cx="11" cy="13" r="6" fill="#FFC700" stroke="#806000" strokeWidth="1.5" />
      <circle cx="11" cy="13" r="2.5" fill="#008080" />
      <line x1="16" y1="16" x2="27" y2="24" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="20" x2="24" y2="18" stroke="#FFC700" strokeWidth="2" />
      <line x1="25" y1="23" x2="27" y2="21" stroke="#FFC700" strokeWidth="2" />
    </svg>
  ),

  // ── System Information ──
  'sysinfo': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Monitor */}
      <rect x="4" y="4" width="24" height="18" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <rect x="6" y="6" width="20" height="14" fill="#000080" />
      {/* Blue 'i' badge */}
      <circle cx="16" cy="13" r="5" fill="#0055EA" stroke="#ffffff" strokeWidth="1" />
      <text x="16" y="16.5" fill="#ffffff" fontFamily="sans-serif" fontSize="9" fontWeight="bold" textAnchor="middle">i</text>
      {/* Base */}
      <rect x="12" y="22" width="8" height="3" fill="#808080" />
      <rect x="8" y="25" width="16" height="3" fill="#c0c0c0" stroke="#404040" strokeWidth="0.5" />
    </svg>
  ),

  // ── Clipboard / System Log ──
  'syslog': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Wooden board */}
      <rect x="5" y="3" width="22" height="26" fill="#8B5A2B" stroke="#402000" strokeWidth="1" />
      {/* Paper */}
      <rect x="7" y="7" width="18" height="20" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
      {/* Metal clip */}
      <rect x="11" y="2" width="10" height="4" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      {/* Log lines with checkmarks */}
      <text x="9" y="13" fill="#00A859" fontSize="6" fontWeight="bold">✓</text>
      <rect x="13" y="11" width="10" height="1" fill="#000080" />
      <text x="9" y="18" fill="#00A859" fontSize="6" fontWeight="bold">✓</text>
      <rect x="13" y="16" width="10" height="1" fill="#808080" />
      <text x="9" y="23" fill="#00A859" fontSize="6" fontWeight="bold">✓</text>
      <rect x="13" y="21" width="8" height="1" fill="#808080" />
    </svg>
  ),

  // ── Speaker / Sound Tray Icon ──
  'speaker': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Speaker body */}
      <polygon points="6,12 11,12 18,6 18,26 11,20 6,20" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <rect x="6" y="12" width="5" height="8" fill="#808080" />
      {/* Sound Waves */}
      <path d="M21 11 C23 13, 23 19, 21 21" stroke="#FFC700" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M24 8 C27 11, 27 21, 24 24" stroke="#FFC700" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  ),

  // ── Printer ──
  'printer': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Paper Top */}
      <rect x="9" y="3" width="14" height="8" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
      {/* Printer Main Body */}
      <rect x="4" y="9" width="24" height="14" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <rect x="6" y="13" width="20" height="2" fill="#000000" />
      <rect x="23" y="18" width="2" height="2" fill="#00ff00" />
      {/* Printed Paper Bottom */}
      <rect x="8" y="19" width="16" height="10" fill="#ffffff" stroke="#808080" strokeWidth="0.5" />
      <rect x="10" y="22" width="12" height="1" fill="#000080" />
      <rect x="10" y="24" width="8" height="1" fill="#808080" />
    </svg>
  ),

  // ── Laboratory / Flask ──
  'flask': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Glass Erlenmeyer Flask */}
      <polygon points="13,4 19,4 19,10 27,24 27,27 5,27 5,24 13,10" fill="#e0f7fa" stroke="#006064" strokeWidth="1.5" />
      {/* Bubbling liquid */}
      <polygon points="7,24 25,24 26,26 6,26" fill="#00bcd4" />
      <polygon points="10,18 22,18 25,24 7,24" fill="#00e5ff" />
      {/* Liquid Bubbles */}
      <circle cx="14" cy="20" r="1.5" fill="#ffffff" />
      <circle cx="18" cy="15" r="1" fill="#ffffff" />
      <circle cx="16" cy="8" r="1.2" fill="#ffffff" />
    </svg>
  ),

  // ── Microscope / Research ──
  'microscope': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Base */}
      <rect x="6" y="26" width="20" height="3" fill="#404040" stroke="#000000" strokeWidth="1" />
      {/* Curved Arm */}
      <path d="M12 26 C12 18, 22 18, 22 12" stroke="#808080" strokeWidth="3" fill="none" />
      {/* Objective Turret & Tube */}
      <line x1="16" y1="6" x2="12" y2="18" stroke="#c0c0c0" strokeWidth="4" strokeLinecap="round" />
      <rect x="10" y="17" width="5" height="2" fill="#FFC700" />
      {/* Stage */}
      <rect x="8" y="20" width="12" height="2" fill="#000000" />
      <circle cx="14" cy="21" r="1" fill="#ffffff" />
    </svg>
  ),

  // ── Old Reports / Archive Cabinet / Box ──
  'archive': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Cardboard storage box */}
      <polygon points="4,8 16,3 28,8 28,26 16,29 4,26" fill="#C89410" stroke="#806000" strokeWidth="1" />
      <polygon points="4,8 16,12 28,8 16,3" fill="#E6B830" />
      <line x1="16" y1="12" x2="16" y2="29" stroke="#806000" strokeWidth="1" />
      {/* White archive label */}
      <rect x="7" y="16" width="6" height="4" fill="#ffffff" transform="skewY(12)" />
    </svg>
  ),

  // ── Lock / Personal ──
  'lock': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Steel Shackle */}
      <path d="M11 15 L11 10 C11 6, 21 6, 21 10 L21 15" fill="none" stroke="#c0c0c0" strokeWidth="3" strokeLinecap="round" />
      {/* Brass Lock Body */}
      <rect x="7" y="14" width="18" height="15" fill="#FFC700" stroke="#806000" strokeWidth="1" />
      {/* Keyhole */}
      <circle cx="16" cy="20" r="2" fill="#000000" />
      <polygon points="15,20 17,20 18,25 14,25" fill="#000000" />
    </svg>
  ),

  // ── Pictures / Image ──
  'image': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Frame */}
      <rect x="4" y="5" width="24" height="22" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
      <rect x="6" y="7" width="20" height="18" fill="#87CEEB" />
      {/* Sun */}
      <circle cx="10" cy="11" r="2.5" fill="#FFC700" />
      {/* Green Mountains */}
      <polygon points="6,25 14,15 20,25" fill="#228B22" />
      <polygon points="15,25 21,17 26,25" fill="#006400" />
    </svg>
  ),

  // ── User / Profile ──
  'user': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <circle cx="16" cy="10" r="5" fill="#FFD700" stroke="#806000" strokeWidth="1" />
      <path d="M7 26 C7 19, 11 17, 16 17 C21 17, 25 19, 25 26" fill="#0055EA" stroke="#000080" strokeWidth="1" />
    </svg>
  ),

  // ── Display Settings (Control Panel) ──
  'display': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="24" height="18" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      <rect x="6" y="6" width="20" height="14" fill="#008080" />
      {/* Color Test Bars */}
      <rect x="7" y="7" width="3" height="12" fill="#ffffff" />
      <rect x="10" y="7" width="3" height="12" fill="#FFC700" />
      <rect x="13" y="7" width="3" height="12" fill="#00e5ff" />
      <rect x="16" y="7" width="3" height="12" fill="#00A859" />
      <rect x="19" y="7" width="3" height="12" fill="#EE3233" />
      <rect x="22" y="7" width="3" height="12" fill="#0055EA" />
      <rect x="12" y="22" width="8" height="3" fill="#808080" />
      <rect x="8" y="25" width="16" height="3" fill="#c0c0c0" stroke="#404040" strokeWidth="0.5" />
    </svg>
  ),

  // ── Mouse ──
  'mouse': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="10" y="8" width="12" height="18" rx="5" fill="#dfdfdf" stroke="#808080" strokeWidth="1" />
      <line x1="16" y1="8" x2="16" y2="15" stroke="#808080" strokeWidth="1" />
      <line x1="10" y1="15" x2="22" y2="15" stroke="#808080" strokeWidth="1" />
      <path d="M16 8 C16 4, 12 3, 12 2" stroke="#404040" strokeWidth="1.5" fill="none" />
    </svg>
  ),

  // ── Keyboard ──
  'keyboard': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="3" y="9" width="26" height="16" fill="#c0c0c0" stroke="#404040" strokeWidth="1" />
      {/* Keys */}
      <rect x="5" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="9" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="13" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="17" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="21" y="11" width="3" height="2" fill="#ffffff" />
      <rect x="25" y="11" width="2" height="2" fill="#ffffff" />
      <rect x="5" y="14" width="3" height="2" fill="#ffffff" />
      <rect x="9" y="14" width="3" height="2" fill="#ffffff" />
      <rect x="13" y="14" width="3" height="2" fill="#ffffff" />
      <rect x="17" y="14" width="3" height="2" fill="#ffffff" />
      <rect x="21" y="14" width="3" height="2" fill="#ffffff" />
      <rect x="25" y="14" width="2" height="2" fill="#ffffff" />
      {/* Spacebar */}
      <rect x="10" y="18" width="12" height="2" fill="#ffffff" />
    </svg>
  ),

  // ── Date & Time ──
  'datetime': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      {/* Calendar back */}
      <rect x="4" y="6" width="16" height="18" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <rect x="4" y="6" width="16" height="4" fill="#EE3233" />
      {/* Analog Clock front */}
      <circle cx="20" cy="18" r="8" fill="#ffffff" stroke="#000080" strokeWidth="1.5" />
      <line x1="20" y1="18" x2="20" y2="13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="20" y1="18" x2="24" y2="18" stroke="#EE3233" strokeWidth="1" strokeLinecap="round" />
      <circle cx="20" cy="18" r="1" fill="#000000" />
    </svg>
  ),

  // ── Regional / Globe ──
  'regional': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <circle cx="16" cy="16" r="10" fill="#0055EA" stroke="#000080" strokeWidth="1" />
      {/* Continents */}
      <path d="M12 9 C14 8, 16 11, 14 14 C12 16, 9 14, 9 12 Z M18 13 C22 12, 24 16, 21 19 C18 20, 17 16, 18 13 Z" fill="#00A859" />
      {/* Lat/Long lines */}
      <ellipse cx="16" cy="16" rx="10" ry="4" fill="none" stroke="#ffffff" strokeWidth="0.75" opacity="0.6" />
      <line x1="16" y1="6" x2="16" y2="26" stroke="#ffffff" strokeWidth="0.75" opacity="0.6" />
    </svg>
  ),

  // ── Accessibility ──
  'accessibility': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="24" height="24" rx="3" fill="#0055EA" stroke="#000080" strokeWidth="1" />
      {/* Wheelchair Symbol */}
      <circle cx="17" cy="10" r="2" fill="#ffffff" />
      <path d="M16 13 L16 19 L21 19 M16 16 L21 16" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="20" r="4" fill="none" stroke="#ffffff" strokeWidth="2" />
    </svg>
  ),

  // ── Fonts (TrueType TT) ──
  'fonts': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <rect x="4" y="4" width="24" height="24" fill="#ffffff" stroke="#808080" strokeWidth="1" />
      <text x="11" y="20" fill="#000080" fontFamily="sans-serif" fontSize="16" fontWeight="bold">T</text>
      <text x="17" y="24" fill="#0055EA" fontFamily="sans-serif" fontSize="14" fontWeight="bold">T</text>
    </svg>
  ),

  // ── Internet Options / Globe Orbit ──
  'internet': (size) => (
    <svg width={size} height={size} viewBox="0 0 32 32" style={{ imageRendering: 'pixelated' }}>
      <circle cx="16" cy="16" r="9" fill="#008080" stroke="#004040" strokeWidth="1" />
      <ellipse cx="16" cy="16" rx="9" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="1" />
      <line x1="16" y1="7" x2="16" y2="25" stroke="#ffffff" strokeWidth="1" />
      {/* Orbit ring with satellite */}
      <ellipse cx="16" cy="16" rx="13" ry="5" fill="none" stroke="#FFC700" strokeWidth="1.5" transform="rotate(-30 16 16)" />
    </svg>
  ),
};

// Normalize name string to matched icon key
export function getIconKey(name) {
  if (!name) return 'document';
  const str = String(name).toLowerCase().trim();

  // Exact map & Emoji mappings
  if (ICONS[str]) return str;

  if (str === '🖥️' || str === 'mycomputer' || str === 'my-computer' || str === 'computer') return 'mycomputer';
  if (str === '🗑️' || str === 'recycle' || str === 'recycle-bin' || str === 'trash') return 'recycle-bin';
  if (str === '📁' || str === '📂' || str === 'folder' || str === 'directory' || str === 'explorer') return 'folder';
  if (str === '📄' || str === 'readme' || str === 'text' || str === 'txt') return 'document';
  if (str === '📝' || str === 'notepad') return 'notepad';
  if (str === '⚙️' || str === 'controlpanel' || str === 'control-panel' || str === 'settings') return 'controlpanel';
  if (str === '🖤' || str === 'cmd' || str === 'command-prompt' || str === 'dos') return 'cmd';
  if (str === '❓' || str === 'help') return 'help';
  if (str === '🖩' || str === 'calculator' || str === 'calc') return 'calculator';
  if (str === '🎨' || str === 'paint' || str === 'draw') return 'paint';
  if (str === '🗺️' || str === 'charmap' || str === 'char-map') return 'charmap';
  if (str === '🌐' || str === 'network' || str === 'lab-net') return 'network';
  if (str === '💾' || str === 'floppy' || str === 'a:') return 'floppy';
  if (str === '💿' || str === 'hard-drive' || str === 'c:' || str === 'drive') return 'hard-drive';
  if (str === 'cd' || str === 'cdrom' || str === 'd:') return 'cdrom';
  if (str === '🔍' || str === 'search' || str === 'find') return 'search';
  if (str === '🪟' || str === 'windows' || str === 'start') return 'windows';
  if (str === '▶' || str === 'run') return 'run';
  if (str === '⏻' || str === 'shutdown') return 'shutdown';
  if (str === '🚪' || str === 'logoff') return 'logoff';
  if (str === '📋' || str === 'syslog' || str === 'log' || str === 'notes') return 'syslog';
  if (str === '🔊' || str === 'speaker' || str === 'audio' || str === 'sound' || str === 'sounds') return 'speaker';
  if (str === '🖨️' || str === 'printer' || str === 'printers') return 'printer';
  if (str === '🧪' || str === 'flask' || str === 'lab' || str === 'laboratory') return 'flask';
  if (str === '🔬' || str === 'microscope' || str === 'research') return 'microscope';
  if (str === '🗂️' || str === 'archive' || str === 'old-reports') return 'archive';
  if (str === '📦' || str === 'box') return 'archive';
  if (str === '🔒' || str === 'lock' || str === 'personal') return 'lock';
  if (str === '🖼️' || str === 'image' || str === 'picture' || str === 'pictures') return 'image';
  if (str === '👤' || str === '👥' || str === 'user' || str === 'users') return 'user';
  if (str === '📺' || str === 'display') return 'display';
  if (str === '🖱️' || str === 'mouse') return 'mouse';
  if (str === '⌨️' || str === 'keyboard') return 'keyboard';
  if (str === '🕐' || str === 'datetime' || str === 'clock') return 'datetime';
  if (str === 'accessibility' || str === '♿') return 'accessibility';
  if (str === 'fonts' || str === '🔤') return 'fonts';
  if (str === 'internet' || str === '🌍') return 'internet';
  if (str === 'sysinfo') return 'sysinfo';

  // Fallback check based on filename extension
  if (str.endsWith('.txt') || str.endsWith('.doc')) return 'document';
  if (str.endsWith('.exe')) return 'cmd';
  if (str.endsWith('.log')) return 'syslog';
  if (str.endsWith('.bmp') || str.endsWith('.png') || str.endsWith('.jpg')) return 'image';

  return 'document';
}

export default function Win95Icon({ name, size = 32, className = '', style = {} }) {
  const key = getIconKey(name);
  const renderer = ICONS[key] || ICONS['document'];

  return (
    <span
      className={`win95-icon inline-flex items-center justify-center flex-shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      {renderer(size)}
    </span>
  );
}
