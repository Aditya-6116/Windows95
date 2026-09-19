# Station 2 — Digital Evidence: Clues & Hiding Places Guide

## Target Mystery Phrase
> **`"A-17 WAS HERE"`** (`"A-17 was here"`)

---

## Overview
Across the vintage Windows 95 interface of Dr. Varma's computer, 11 hidden characters are embedded within system text, file labels, dialogs, command outputs, and application headers.

Players discover characters by noticing subtle typographic anomalies (such as font changes, thin/bold text, monospace, italic, or underlines) and clicking on them. Discovered characters are automatically logged in the on-screen **Evidence Collected** dossier.

---

## Clue Index & Locations

| # | Clue ID | Char | Application / Location | Exact Element / Path | Anomaly / Font Style | How to Reach |
|---|---|:---:|---|---|---|---|
| **1** | `clue-01` | **`A`** | **Desktop** | Recycle Bin Icon Label | **Bold** (`hc-bold`) | Visible directly on the Desktop below the Recycle Bin icon label: `Recycle Bin (A)`. |
| **2** | `clue-02` | **`-`** | **Notepad** | `README.TXT` Properties Dialog | **Thin** (`hc-thin`) | Open `README.TXT` on the Desktop or via File Explorer, then open **Help → About** or File Properties dialog (`Type: Text Document - Plain text`). |
| **3** | `clue-03` | **`1`** | **Control Panel** | Display Settings | **Monospace** (`hc-mono`) | Open **Start → Settings → Control Panel → Display**. Look at the screen resolution label (`1024 × 718`). |
| **4** | `clue-04` | **`7`** | **Command Prompt** | `systeminfo` command output | **Serif Font** (`hc-serif` — Times New Roman/Georgia) | Open **Command Prompt** (MS-DOS Prompt) and run `systeminfo`. Inspect the IP under `Network: LAB-NET (192.168.10.7)`. |
| **5** | `clue-05` | **`W`** | **Search Tool** | Search Results Header | **Bold** (`hc-bold`) | Open **Start → Find → Files or Folders**, enter any query or look at the header: `Results for your Working search appear below.`. |
| **6** | `clue-06` | **`A`** | **System Info App** | System Tab Edition Label | **Small-Caps** (`hc-smallcaps`) | Open **Start → Programs → System Information** (or System icon). Look under the System field: `Varma Laboratory OS 4.7 Advanced Edition`. |
| **7** | `clue-07` | **`S`** | **Control Panel** | Mouse Settings | **Underline** (`hc-underline`) | Open **Start → Settings → Control Panel → Mouse**. Inspect the pointer speed slider scale: `Slow ←——— S ———→ Fast`. |
| **8** | `clue-08` | **`H`** | **Help Topics** | About This Computer | **Monospace** (`hc-mono`) | Open **Start → Help → ℹ️ About This Computer**. Inspect the `Host Computer:` label. |
| **9** | `clue-09` | **`E`** | **File Explorer** | `C:\Lab\Records` Directory | **Italic** (`hc-italic`) | Open **My Computer → C:\ → Lab**. Look at the `Records (E)` folder item. |
| **10** | `clue-10` | **`R`** | **Command Prompt** | `ver` command output | **Serif Font** (`hc-serif` — Times New Roman/Georgia) | Open **Command Prompt** and type `ver`. Inspect the copyright line: `All Rights reserved. [Release 1998]`. |
| **11** | `clue-11` | **`E`** | **Command Prompt** | `help` command output | **Sans-Serif Font** (`hc-sans` — Arial/Helvetica) | Open **Command Prompt** and type `help`. Inspect the command listing for `ver — Show OS version`. |

---

## Detailed Breakdown by Application

### 1. Desktop & Shell
- **Character**: `A` (`clue-01`)
- **Location**: Recycle Bin desktop icon subtitle
- **Appearance**: Subtle bold `(A)` in `Recycle Bin (A)`

### 2. Notepad (`README.TXT`)
- **Character**: `-` (`clue-02`)
- **Location**: Properties modal / header description of the document
- **Appearance**: Ultra-thin dash `-` separating document type descriptions

### 3. Control Panel
- **Character**: `1` (`clue-03`)
  - **Location**: Display Properties → Settings tab resolution `1024 × 718`
  - **Appearance**: Monospace font variation `hc-mono`
- **Character**: `S` (`clue-07`)
  - **Location**: Mouse Properties → Motion tab speed indicator `Slow ←——— S ———→ Fast`
  - **Appearance**: Underlined `S`

### 4. Command Prompt (MS-DOS)
- **Character**: `7` (`clue-04`)
  - **Command**: `systeminfo`
  - **Line**: `Network: LAB-NET (192.168.10.7)`
  - **Appearance**: Distinct serif typography (`Times New Roman` contrasting with terminal monospace)
- **Character**: `R` (`clue-10`)
  - **Command**: `ver`
  - **Line**: `All Rights reserved. [Release 1998]`
  - **Appearance**: Serif font `R` in `Rights`
- **Character**: `E` (`clue-11`)
  - **Command**: `help`
  - **Line**: `ver — Show OS version`
  - **Appearance**: Clean sans-serif glyph `E` in `version`

### 5. Search / Find Application
- **Character**: `W` (`clue-05`)
- **Location**: Search results description text
- **Appearance**: Bold `W` in `Results for your Working search appear below.`

### 6. System Information App
- **Character**: `A` (`clue-06`)
- **Location**: System panel → OS description
- **Appearance**: Small-caps `A` in `Advanced Edition`

### 7. Help & Support System
- **Character**: `H` (`clue-08`)
- **Location**: About This Computer topic
- **Appearance**: Monospaced `H` in `Host Computer:`

### 8. Windows Explorer
- **Character**: `E` (`clue-09`)
- **Location**: `C:\Lab` folder view
- **Appearance**: Italic `(E)` next to `Records (E)` folder

---

## Reconstruction Matrix

| Sequence | Word | Discovered Letter | Clue ID | Source App |
|:---:|:---:|:---:|:---:|---|
| 1 | **Word 1** | **A** | `clue-01` | Desktop |
| 2 | | **-** | `clue-02` | Notepad |
| 3 | | **1** | `clue-03` | Control Panel |
| 4 | | **7** | `clue-04` | Command Prompt |
| 5 | **Word 2** | **W** | `clue-05` | Search Tool |
| 6 | | **A** | `clue-06` | System Info |
| 7 | | **S** | `clue-07` | Control Panel |
| 8 | **Word 3** | **H** | `clue-08` | Help System |
| 9 | | **E** | `clue-09` | File Explorer |
| 10 | | **R** | `clue-10` | Command Prompt |
| 11 | | **E** | `clue-11` | Command Prompt |

**Complete Reconstructed Sentence**: **`"A-17 WAS HERE"`**
