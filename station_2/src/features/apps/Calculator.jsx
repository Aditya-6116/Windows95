import React, { useState } from 'react';

const BUTTONS = [
  ['C', '±', '%', '÷'],
  ['7', '8', '9', '×'],
  ['4', '5', '6', '−'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

export default function Calculator({ winId }) {
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);

  const handleBtn = (label) => {
    if (label === 'C') {
      setDisplay('0'); setOperand(null); setOperator(null); setWaitingForSecond(false);
      return;
    }
    if (label === '±') {
      setDisplay(d => d.startsWith('-') ? d.slice(1) : '-' + d);
      return;
    }
    if (label === '%') {
      setDisplay(d => String(parseFloat(d) / 100));
      return;
    }
    if (['÷', '×', '−', '+'].includes(label)) {
      setOperand(parseFloat(display));
      setOperator(label);
      setWaitingForSecond(true);
      return;
    }
    if (label === '=') {
      if (operand === null || !operator) return;
      const a = operand, b = parseFloat(display);
      let result;
      if (operator === '+') result = a + b;
      else if (operator === '−') result = a - b;
      else if (operator === '×') result = a * b;
      else if (operator === '÷') result = b !== 0 ? a / b : 'ERR';
      setDisplay(String(result));
      setOperand(null); setOperator(null); setWaitingForSecond(false);
      return;
    }
    if (label === '.') {
      if (display.includes('.')) return;
      setDisplay(d => d + '.');
      return;
    }
    // Digit
    if (waitingForSecond) {
      setDisplay(label);
      setWaitingForSecond(false);
    } else {
      setDisplay(d => d === '0' ? label : d.length < 12 ? d + label : d);
    }
  };

  return (
    <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 6, background: '#c0c0c0', height: '100%' }}>
      {/* Display */}
      <div className="win-inset" style={{ padding: '4px 8px', textAlign: 'right', fontFamily: 'Courier New, monospace', fontSize: 18, background: '#c8ffc8', minHeight: 36 }}>
        {display}
      </div>
      {/* Buttons */}
      <div style={{ display: 'grid', gap: 3 }}>
        {BUTTONS.map((row, ri) => (
          <div key={ri} style={{ display: 'grid', gridTemplateColumns: ri === 4 ? '2fr 1fr 1fr' : 'repeat(4, 1fr)', gap: 3 }}>
            {row.map(btn => (
              <button
                key={btn}
                className="btn-win"
                style={{ height: 30, fontSize: 13, padding: 0, minWidth: 0, fontFamily: 'Tahoma, sans-serif' }}
                onClick={() => handleBtn(btn)}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
