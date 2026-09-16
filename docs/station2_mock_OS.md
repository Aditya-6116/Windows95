# Station 2 --- Mock OS Implementation Plan

## Purpose

Build the laptop interface for Station 2 as a fictional, fully
explorable vintage desktop operating system. The interface should pay
humble homage to the visual language and interaction patterns of Windows
95 / Windows XP-era desktop environments, while remaining a fictional
game interface.

The core player journey is:

**Enter room → explore desktop → discover README → explore the mock OS →
notice hidden characters → collect them → use the physical notepad to
reconstruct the message → investigate access records → deduce repeated
A-17 access → receive Station 2 clue → receive master-puzzle fragment →
exit.**

The central principle is:

> **The computer is the evidence.**

ReactOS is a conceptual reference for a browser-based Windows-like
desktop experience. Use it for inspiration about desktop/shell structure
and exploration, not as a source of copied proprietary Microsoft assets.

Reference: https://en.wikipedia.org/wiki/ReactOS

------------------------------------------------------------------------

# 1. Locked Station 2 Decisions

## Overall hunt

-   There are **5 stations**.
-   The murder mystery is **non-linear**.
-   Teams may solve the stations in any order.
-   No station may require another station's answer to be solvable.
-   Each station contributes a small independent piece.
-   The final master password remains open.

## Station 2

Station 2 is the **Digital Evidence / Digital Forensics** station.

Its only major story contribution is:

> **A-17 repeatedly accessed Dr. Varma's computer during the critical
> period.**

A-17 is a **codename / identifier**. Its real identity is revealed in
another station.

Station 2 must NOT reveal:

-   A-17's real identity
-   the killer
-   motive
-   the exact nature of Project ECHO
-   prototype location
-   the complete murder sequence
-   why A-17 accessed the system
-   another station's final answer

Project ECHO should appear only minimally as background context.

------------------------------------------------------------------------

# 2. Core Puzzle

The entire fictional computer is the puzzle.

Players explore:

-   desktop
-   files
-   My Computer
-   Control Panel
-   settings
-   system information
-   network settings
-   personalization
-   security
-   applications
-   Help
-   Command Prompt
-   menus and dialogs

Hidden throughout the interface are individual characters.

Each hidden character is subtly visually different:

-   different font
-   bold
-   thin
-   different weight
-   slight emphasis
-   other subtle formatting difference

Players record the characters.

Together they reconstruct:

> **A-17 ENTERED.**
>
> **A-17 RETURNED.**

The physical notepad provides the sentence structure.

After reconstructing the message, the team investigates the system
access records and finds multiple A-17 access events.

Their intended deduction is:

> **A-17 accessed Dr. Varma's computer repeatedly.**

The UI must make the team reach this conclusion themselves.

------------------------------------------------------------------------

# 3. Visual Direction

The OS should feel like a lovingly recreated fictional vintage computer.

Prioritize:

-   compact windows
-   classic title bars
-   blue/grey system surfaces
-   beveled buttons
-   small classic icons
-   dense menus
-   classic dialogs
-   scrollbars
-   status bars
-   old-style checkboxes/radio buttons
-   Start menu
-   taskbar
-   context menus
-   desktop shortcuts
-   system-style typography

Avoid:

-   modern SaaS dashboards
-   glassmorphism
-   huge modern icons
-   excessive rounded corners
-   contemporary navigation bars
-   modern card layouts
-   modern gradients
-   mobile-app styling

The target feeling is:

> **"This feels like a classic computer."**

not:

> **"This is literally Microsoft's Windows interface."**

Use original/fictitious assets rather than copying proprietary Microsoft
assets wholesale.

------------------------------------------------------------------------

# 4. Stack

Use exactly:

-   React
-   Vite
-   Tailwind CSS
-   Zustand

Suggested organization:

``` text
src/
├── app/
├── components/
│   ├── os/
│   ├── desktop/
│   ├── windows/
│   ├── taskbar/
│   ├── menus/
│   ├── dialogs/
│   └── icons/
├── features/
│   ├── explorer/
│   ├── notepad/
│   ├── settings/
│   ├── command-prompt/
│   ├── help/
│   ├── search/
│   └── system-logs/
├── store/
│   └── osStore.js
├── data/
│   ├── desktopData.js
│   ├── fileSystem.js
│   ├── settingsData.js
│   ├── menuData.js
│   ├── hiddenCharacters.js
│   └── logs.js
├── styles/
│   └── retro.css
└── assets/
    ├── icons/
    └── sounds/
```

The exact structure can change, but UI, OS state, filesystem data,
menus, and puzzle data should remain logically separated.

------------------------------------------------------------------------

# 5. Zustand State

The store should conceptually manage:

``` text
openWindows
activeWindow
minimizedWindows
windowPositions
windowSizes
startMenuOpen
searchOpen
contextMenu
selectedDesktopItems
currentDirectory
currentExplorerPath
notepadState
settingsPage
commandPromptState
helpState
discoveredCharacters
visitedLocations
systemLogState
stationCompleted
masterFragmentReleased
```

This is a mock OS, not a real operating system. State exists to create
the illusion of an operating system.

------------------------------------------------------------------------

# 6. Desktop

The first screen is the desktop.

Suggested icons:

``` text
My Computer
My Documents
README.TXT
Research
Laboratory
Old Reports
Meeting Notes
Personal
Archive
Pictures
Network
Recycle Bin
Notepad
Control Panel
Command Prompt
Help
```

README.TXT must be visible.

The desktop should feel full enough to invite exploration.

Target baseline resolution:

**1366 × 768**

The taskbar stays anchored to the bottom.

------------------------------------------------------------------------

# 7. README.TXT

Opening README should use a classic Notepad-style window.

Suggested content:

``` text
README.TXT

If you are looking for evidence,
do not look outside.

Everything you need is already here.

Some things are easier to notice than others.

— D.V.
```

The exact wording can be refined.

The README must NOT reveal:

-   hidden-character locations
-   A-17
-   Project ECHO details
-   access logs
-   the final answer

Its only purpose is to establish:

> **Explore the computer itself.**

------------------------------------------------------------------------

# 8. Physical Notepad

The physical notepad sits beside the laptop.

It provides the structure of the hidden sentence.

Example:

``` text
----------------------------------

        COMPLETE THE MESSAGE

        ___ ________.

        ___ ________.

----------------------------------
```

The team fills it using the characters found in the OS.

Target message:

``` text
A-17 ENTERED.

A-17 RETURNED.
```

The physical notepad is the physical confirmation/organization
mechanism.

------------------------------------------------------------------------

# 9. Digital Notepad

The mock OS should also contain a classic Notepad application.

It should open as an unsaved document and contain a fill-in-the-blanks
version of the clue.

Example:

``` text
File   Edit   Format   View   Help

------------------------------------
A-17 ________.

A-17 ________.
------------------------------------
```

Do not reveal the completed words.

The digital Notepad is an in-world OS feature; the physical notepad
remains the physical puzzle element.

------------------------------------------------------------------------

# 10. Hidden Character System

Create one central configuration for hidden characters.

Example:

``` js
{
  id: "clue-01",
  character: "A",
  location: "display-settings",
  targetElement: "resolution-label",
  styleVariant: "bold",
  discovered: false
}
```

Another:

``` js
{
  id: "clue-02",
  character: "-",
  location: "network-properties",
  targetElement: "connection-description",
  styleVariant: "thin",
  discovered: false
}
```

The final collection must reconstruct:

``` text
A-17 ENTERED.
A-17 RETURNED.
```

The exact record count should be derived from the final sentence.

Do not put the final answer into a visible UI element.

------------------------------------------------------------------------

# 11. Hidden Character Discovery

A hidden character should look like ordinary text with a subtle anomaly.

Example:

``` text
Resolution: 1024 × 768
```

One character may have a slightly different font weight.

When the team discovers it:

-   mark it as discovered
-   add it to Zustand
-   optionally show subtle feedback such as `Character recorded.`

Avoid flashy game-style effects.

------------------------------------------------------------------------

# 12. Character Distribution

Distribute characters across multiple parts of the OS.

Possible locations:

``` text
Desktop
README / file metadata
My Computer
Display Settings
Keyboard & Mouse
Network Settings
Personalization
System Information
Security / User Accounts
Control Panel
Help
File Explorer
Command Prompt
```

Not every location should contain a clue.

Some should be dead ends.

The team should genuinely explore.

------------------------------------------------------------------------

# 13. My Computer

Create a classic file explorer.

Opening My Computer shows:

``` text
3½ Floppy (A:)
Local Disk (C:)
CD Drive (D:)
Network Drive (Z:)
```

C: can contain:

``` text
C:├── Documents
├── Program Files
├── Windows
├── System
├── Lab
├── Temp
└── Users
```

Not every directory needs deep implementation.

Implement enough depth to make exploration convincing.

------------------------------------------------------------------------

# 14. File Explorer

Support:

-   address/path bar
-   back
-   forward
-   up
-   folders
-   files
-   list/details view
-   status bar
-   context menu
-   properties dialog

Example path:

``` text
My Computer > Local Disk (C:) > Lab > Records
```

Some files should:

-   open normally
-   show irrelevant content
-   show `Access denied`
-   show `File not found`

This prevents the system from feeling like a simple puzzle menu.

------------------------------------------------------------------------

# 15. File Properties

Implement a classic Properties dialog.

Example:

``` text
README.TXT Properties

Type:
Text Document

Location:
C:\Lab\Records

Size:
2.41 KB

Created:
12/03/1998

Modified:
12/04/1998
```

Properties are mostly flavor. Only a small number should matter to the
puzzle.

------------------------------------------------------------------------

# 16. Control Panel

Create a classic Control Panel containing:

``` text
Display
Mouse
Keyboard
Network
Sounds
System
Users
Date & Time
Regional Settings
Accessibility
Printers
Fonts
Internet Options
```

Most pages are mock-only.

A few contain hidden characters.

------------------------------------------------------------------------

# 17. Search

Create a classic OS search window.

Example:

``` text
Search

[________________________] [Search]

Results:
Display Properties
Network Connections
System Information
...
```

Search can locate registered mock pages/files.

It should NOT directly expose hidden characters.

Search results should include irrelevant results too.

------------------------------------------------------------------------

# 18. Start Menu

Create:

``` text
START
────────────────────────
Programs >
Documents >
Settings >
Search
Help
Run...
────────────────────────
Log Off
Shut Down
```

Submenus should open.

Only useful routes need deeper implementation.

------------------------------------------------------------------------

# 19. Taskbar

Permanent bottom taskbar:

``` text
[START]
[open application buttons]

                               [tray icons] [clock]
```

Include:

-   Start button
-   open-window buttons
-   active-window state
-   clock
-   fake network icon
-   fake volume icon

------------------------------------------------------------------------

# 20. Window Manager

All applications should open inside OS-style windows.

Support:

-   open
-   close
-   minimize
-   maximize
-   restore
-   focus
-   move
-   resize where practical

Use Zustand for:

``` text
window id
title
position
size
z-index
minimized
maximized
open
```

The player should feel like they are operating a desktop, not navigating
React pages.

------------------------------------------------------------------------

# 21. Window Styling

Each window should have:

-   title bar
-   application icon
-   title
-   minimize
-   maximize
-   close
-   beveled border
-   classic grey body
-   menu bar where appropriate
-   status bar where appropriate

Example:

``` text
┌─────────────────────────────────────┐
│ 📄 README.TXT               _ □ X  │
├─────────────────────────────────────┤
│ File  Edit  Format  View  Help      │
├─────────────────────────────────────┤
│ Everything you need is already here │
└─────────────────────────────────────┘
```

------------------------------------------------------------------------

# 22. Command Prompt

Implement a fake Command Prompt.

Example:

``` text
C:\LAB>

_
```

Use a harmless predefined command set:

``` text
help
dir
cd
cls
ver
date
time
systeminfo
exit
```

No real command execution.

The command prompt must NOT directly reveal the puzzle answer.

------------------------------------------------------------------------

# 23. Help System

Create:

``` text
Contents
Index
Search
About This Computer
Troubleshooting
Using Files
Using Settings
Network Help
```

Most pages can be dead ends.

A small number may contain hidden characters.

------------------------------------------------------------------------

# 24. Other Classic Applications

Include harmless applications such as:

``` text
Notepad
Calculator
Paint
WordPad
Character Map
Media Player
Control Panel
Command Prompt
Help
System Information
Disk Cleanup
```

They do not need full functionality.

They exist to make the OS feel authentic and explorable.

Use fictional/original icons.

------------------------------------------------------------------------

# 25. Paint

Mock:

-   toolbar
-   canvas
-   palette
-   menus

Real drawing functionality is optional.

------------------------------------------------------------------------

# 26. Calculator

Provide a classic calculator interface.

Actual calculation is optional.

It is not a puzzle dependency.

------------------------------------------------------------------------

# 27. Character Map

Create a Character Map-style utility for authenticity.

Do not make it a direct clue or a shortcut to the hidden message.

------------------------------------------------------------------------

# 28. System Information

Example:

``` text
System Information

Computer:
VARMA-LAB-PC

Operating System:
Varma Laboratory OS 4.7

Registered Owner:
D. Varma

Processor:
Pentium-class CPU

Memory:
128 MB

Network:
LAB-NET
```

One hidden character may be placed here.

Do not reveal A-17's identity.

------------------------------------------------------------------------

# 29. Network Settings

Example:

``` text
Network Connections

LAB-NET
Status: Connected

Ethernet Adapter
IP Address: 192.168.10.24

Gateway:
192.168.10.1
```

This is mock content.

It is not technically functional.

One hidden character may be placed here.

------------------------------------------------------------------------

# 30. Security / User Accounts

Create a fictional access/account interface.

Example:

``` text
User Accounts

Dr. Varma
Administrator

Lab Assistant
Standard User

A-17
Privileged Access
```

A-17 remains a code.

Do not reveal the real identity.

The page can establish that A-17 is an access identifier.

------------------------------------------------------------------------

# 31. System Access Log

This is the second-stage evidence.

Create a classic log viewer.

Example:

``` text
SYSTEM ACCESS LOG

23:21    PROJECT-ECHO    ACCESS
23:26    A-17            LOGIN SUCCESS
23:27    SYSTEM          ACTIVE
23:28    A-17            LOGIN SUCCESS
23:31    CCTV            ACCESS
23:37    PROJECT-ECHO    MODIFY
23:43    SYSTEM          SHUTDOWN
```

The exact timestamps are not locked.

The critical requirement:

> **A-17 appears in multiple access/login records.**

Do not write:

> "A-17 accessed the computer twice."

Players should infer that.

------------------------------------------------------------------------

# 32. Project ECHO

Project ECHO is intentionally minimal in Station 2.

Possible references:

``` text
PROJECT-ECHO
PROJECT-ECHO-NOTES
ECHO-ARCHIVE
```

Do NOT explain:

-   what ECHO is
-   why it exists
-   the prototype
-   its location
-   who wants it
-   the motive

Station 2 only needs to establish that suspicious digital activity
occurs around restricted material.

------------------------------------------------------------------------

# 33. Misleading Content

Include much more irrelevant content than relevant content.

Examples:

``` text
Old meeting schedules
Printer settings
Wallpaper
Music files
Personal photos
Old invoices
System utilities
Random text files
Old reports
Calculator
Paint
Network diagnostics
Fonts
Regional settings
Screensaver
```

The players should feel uncertain about which areas matter.

That uncertainty is part of the exploration experience.

------------------------------------------------------------------------

# 34. Puzzle Safety Rails

The station must be solvable without:

-   source-code inspection
-   browser DevTools
-   actual hacking
-   real terminal commands
-   network scanning
-   password cracking
-   external websites
-   internet access

The station should work offline.

The main safety rails are:

1.  README
2.  hidden characters
3.  physical notepad
4.  meaningful sentence structure
5.  repeated A-17 access records
6.  station-master verification

------------------------------------------------------------------------

# 35. Discovery Tracking

Zustand:

``` js
discoveredCharacters: []
```

On discovery:

``` js
discoverCharacter(id)
```

An optional small evidence panel can show:

``` text
Evidence collected:

[ A ] [ - ] [ 1 ] [ 7 ]
[ E ] [ N ] [ T ] [ E ]
...
```

This panel should not automatically solve the sentence.

------------------------------------------------------------------------

# 36. Non-Linear Exploration

The hidden characters can be discovered in any order.

For example:

``` text
Network → Display → Help → Files → System
```

or:

``` text
Files → Control Panel → Desktop → Security → Network
```

Both must work.

Do not require a specific page order.

The logical progression is only:

> **Explore → collect enough characters → reconstruct → interpret →
> verify against logs.**

------------------------------------------------------------------------

# 37. Completion

Once the team:

1.  reconstructs the hidden sentence
2.  connects it to the access records
3.  correctly states that A-17 repeatedly accessed the computer

the station master verifies completion.

Optional UI:

``` text
INVESTIGATION RECORD UPDATED

STATION 02 COMPLETE
```

The physical station-master interaction remains the real completion
point.

------------------------------------------------------------------------

# 38. Station-Master Hints

### Hint 1

> **"The computer may contain more information than the obvious
> files."**

### Hint 2

> **"Look closely at the way some text is displayed."**

### Hint 3

> **"You found the message. Now ask what the system records say about
> it."**

Do not give the final deduction directly.

------------------------------------------------------------------------

# 39. Suggested Application Map

``` text
DESKTOP
│
├── README.TXT
├── MY COMPUTER
│   ├── C:
│   │   ├── Documents
│   │   ├── Lab
│   │   ├── Research
│   │   ├── System
│   │   └── Temp
│   ├── A:
│   ├── D:
│   └── Network
│
├── CONTROL PANEL
│   ├── Display
│   ├── Keyboard
│   ├── Mouse
│   ├── Network
│   ├── System
│   ├── Security
│   ├── Users
│   ├── Fonts
│   └── Regional Settings
│
├── PROGRAMS
│   ├── Notepad
│   ├── Paint
│   ├── Calculator
│   ├── WordPad
│   ├── Character Map
│   ├── Help
│   ├── Command Prompt
│   └── System Information
│
├── SEARCH
│
└── RECYCLE BIN
```

------------------------------------------------------------------------

# 40. Implementation Phases

## Phase 1 --- Desktop Shell

-   desktop
-   wallpaper
-   icons
-   taskbar
-   Start menu
-   clock
-   window manager

## Phase 2 --- Core Applications

-   My Computer
-   File Explorer
-   Notepad
-   Control Panel
-   Settings
-   README

## Phase 3 --- Exploration Systems

-   menus
-   context menus
-   search
-   help
-   command prompt
-   properties dialogs
-   fake system information

## Phase 4 --- Puzzle Layer

-   hidden characters
-   character discovery state
-   physical-notepad message
-   A-17 access logs
-   completion verification

## Phase 5 --- Immersion

-   misleading files
-   irrelevant settings
-   vintage applications
-   authentic dialogs
-   subtle sounds
-   additional menus
-   visual polish

------------------------------------------------------------------------

# 41. Definition of Done

The mock OS is complete when a player can:

-   enter the desktop
-   open README
-   understand that the computer contains the evidence
-   open applications
-   navigate menus
-   open and close windows
-   browse My Computer
-   navigate directories
-   open files
-   use fake search
-   open Control Panel
-   navigate settings
-   open Notepad
-   open Help
-   open Command Prompt
-   explore irrelevant areas
-   discover hidden characters
-   have discovered characters tracked
-   reconstruct the hidden sentence
-   inspect system access records
-   find repeated A-17 access
-   understand the connection between the hidden message and the logs
-   reach the Station 2 conclusion

No real OS functionality should be required.

------------------------------------------------------------------------

# 42. Final Player Journey

``` text
ENTER ROOM
     ↓
SEE COMPUTER + PHYSICAL NOTEPAD
     ↓
EXPLORE COMPUTER
     ↓
FIND README
     ↓
"EVERYTHING IS HERE"
     ↓
EXPLORE OS
     ↓
NOTICE UNUSUAL CHARACTERS
     ↓
COLLECT CHARACTERS
     ↓
FIND PHYSICAL NOTEPAD
     ↓
RECONSTRUCT:
"A-17 ENTERED.
 A-17 RETURNED."
     ↓
ASK:
"WHAT DOES THIS MEAN?"
     ↓
INVESTIGATE SYSTEM RECORDS
     ↓
A-17 LOGIN — 23:26
A-17 LOGIN — 23:28
     ↓
TEAM MAKES DEDUCTION
     ↓
"A-17 ACCESSED THE COMPUTER REPEATEDLY."
     ↓
STATION MASTER CHECK
     ↓
RECEIVE STATION CLUE
     ↓
RECEIVE MASTER-PUZZLE FRAGMENT
     ↓
EXIT
```

------------------------------------------------------------------------

# 43. Final Station 2 Output

The OS itself must not reveal the complete murder mystery.

The team exits with:

### Investigation clue

> **A-17 repeatedly accessed Dr. Varma's computer during the critical
> period.**

### Master-puzzle fragment

> **OPEN --- to be decided later.**

### Unresolved question

> **Who is A-17?**

That unresolved question is intentional.

------------------------------------------------------------------------

# 44. Core Implementation Principle

Do not build a linear webpage disguised as an OS:

``` text
README → Settings → Network → Answer
```

Build a fictional computer that happens to contain a puzzle.

Players should:

-   wander
-   click irrelevant things
-   open old files
-   inspect menus
-   explore settings
-   find dead ends
-   notice one strange character
-   find another
-   slowly recognize the pattern

The intended realization is:

> **"The whole computer is hiding a message."**

That realization is the heart of Station 2.
