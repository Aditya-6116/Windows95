import React, { useState, useRef, useEffect } from 'react';
import HiddenChar from '../../components/puzzle/HiddenChar';

const PROMPT = 'C:\\LAB>';

const COMMANDS = {
  help: () =>
    `Available commands:
  help         — Show this list
  dir          — List current directory
  cd <path>    — Change directory
  cls          — Clear screen
  ver          — Show OS version
  date         — Show current date
  time         — Show current time
  systeminfo   — Show system information
  exit         — Close command prompt`,

  dir: () =>
    ` Volume in drive C is LAB-DISK
 Volume Serial Number is 1A2B-3C4D

 Directory of C:\\LAB

04/12/1998  11:43 PM    <DIR>          .
04/12/1998  11:43 PM    <DIR>          ..
04/12/1998  11:43 PM    <DIR>          Records
03/12/1998  09:15 AM    <DIR>          Research
01/12/1998  08:00 AM    <DIR>          Old Reports
04/12/1998  11:43 PM         2,418     README.TXT
               1 File(s)         2,418 bytes
               4 Dir(s)  1,048,576 bytes free`,

  date: () => `Current date: 12/04/1998`,
  time: () => `Current time: 11:58:07.23 PM`,

  cls: () => null, // special: clear

  exit: () => '__EXIT__',
};

function VerOutput() {
  return (
    <div>
      <p>VarmaOS [Version 4.7.1998]</p>
      <p>
        Copyright (C) 1998 Varma Laboratory. All <HiddenChar clueId="clue-10" fallbackChar="R" before="" after="ights reserved. [Release 1998]" />
      </p>
    </div>
  );
}

// systeminfo output has a hidden character embedded (clue-04: '7')
function SysinfoOutput() {
  return (
    <div>
      <p>Computer Name:    VARMA-LAB-PC</p>
      <p>OS:               VarmaOS 4.7</p>
      <p>Registered User:  D. Varma</p>
      <p>Processor:        Pentium-class CPU — Speed: 233 MHz</p>
      <p>Memory:           128 MB</p>
      <p>Network:          LAB-NET (192.168.10.<HiddenChar clueId="clue-04" fallbackChar="7" />)</p>
      <p>Uptime:           2 hours, 14 minutes</p>
    </div>
  );
}

// help output has a hidden character embedded (clue-11: 'E')
function HelpOutput() {
  return (
    <div>
      <p>Available commands:</p>
      <p>  help         — Show this list</p>
      <p>  dir          — List current directory</p>
      <p>  cd &lt;path&gt;    — Change directory</p>
      <p>  cls          — Clear screen</p>
      <p>  ver          — Show OS v<HiddenChar clueId="clue-11" fallbackChar="E" />rsion</p>
      <p>  date         — Show current date</p>
      <p>  time         — Show current time</p>
      <p>  systeminfo   — Show system information</p>
      <p>  exit         — Close command prompt</p>
    </div>
  );
}

function cdCommand(arg) {
  const dirs = { 'records': 'C:\\LAB\\Records', 'research': 'C:\\LAB\\Research', '..': 'C:\\', '\\': 'C:\\' };
  const target = dirs[arg?.toLowerCase()] || null;
  if (target) return `Changed directory to ${target}`;
  return `The system cannot find the path specified.`;
}

export default function CommandPrompt({ winId }) {
  const [lines, setLines] = useState([
    { type: 'text', content: 'VarmaOS [Version 4.7.1998]' },
    { type: 'text', content: 'Copyright (C) 1998 Varma Laboratory.' },
    { type: 'text', content: '' },
    { type: 'text', content: `${PROMPT}` },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const runCommand = (raw) => {
    const trimmed = raw.trim();
    const [cmd, ...args] = trimmed.toLowerCase().split(/\s+/);

    let output = null;
    let special = null;

    if (!trimmed) {
      output = '';
    } else if (cmd === 'cls') {
      setLines([{ type: 'text', content: `${PROMPT}` }]);
      setInput('');
      return;
    } else if (cmd === 'ver') {
      special = 'ver';
    } else if (cmd === 'systeminfo') {
      special = 'systeminfo';
    } else if (cmd === 'help') {
      special = 'help';
    } else if (cmd === 'cd') {
      output = cdCommand(args[0]);
    } else if (COMMANDS[cmd]) {
      output = COMMANDS[cmd]();
      if (output === '__EXIT__') { /* handled by parent */ return; }
    } else {
      output = `'${cmd}' is not recognized as an internal command. Type HELP.`;
    }

    setHistory(h => [trimmed, ...h]);
    setHistIdx(-1);
    setLines(prev => [
      ...prev.slice(0, -1), // remove trailing prompt
      { type: 'text', content: `${PROMPT} ${trimmed}` },
      special === 'ver'
        ? { type: 'ver' }
        : special === 'systeminfo'
        ? { type: 'sysinfo' }
        : special === 'help'
        ? { type: 'help' }
        : { type: 'text', content: output },
      { type: 'text', content: '' },
      { type: 'text', content: `${PROMPT}` },
    ]);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      runCommand(input);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIdx = Math.min(histIdx + 1, history.length - 1);
      setHistIdx(newIdx);
      setInput(history[newIdx] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? '' : history[newIdx]);
    }
  };

  return (
    <div
      style={{ background: '#000', color: '#c0c0c0', fontFamily: 'Courier New, monospace', fontSize: 12, padding: 6, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', cursor: 'text' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div style={{ flex: 1 }}>
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === 'ver' ? (
              <VerOutput />
            ) : line.type === 'sysinfo' ? (
              <SysinfoOutput />
            ) : line.type === 'help' ? (
              <HelpOutput />
            ) : (
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit', color: '#c0c0c0' }}>{line.content}</pre>
            )}
          </div>
        ))}
        {/* Input line */}
        <div style={{ display: 'flex' }}>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ background: 'transparent', border: 'none', outline: 'none', color: '#c0c0c0', fontFamily: 'Courier New, monospace', fontSize: 12, flex: 1 }}
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
      <div ref={bottomRef} />
    </div>
  );
}
