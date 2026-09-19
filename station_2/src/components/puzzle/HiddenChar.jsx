import React from 'react';
import useOsStore from '../../store/osStore';

const styleMap = {
  bold: 'hc-bold',
  thin: 'hc-thin',
  italic: 'hc-italic',
  mono: 'hc-mono',
  underline: 'hc-underline',
  smallcaps: 'hc-smallcaps',
  serif: 'hc-serif',
  sans: 'hc-sans',
  altfont: 'hc-altfont',
};

/**
 * Renders a hidden character subtly embedded in a text string.
 * Props:
 *   clueId | id: string — the id of the clue to render
 *   before: string — text before the hidden char
 *   after: string  — text after the hidden char
 *   fallbackChar: string — character to display if clue not in store
 *   wrapper: string — optional wrapper tag (default: 'span')
 */
export default function HiddenChar({
  clueId,
  id,
  before = '',
  after = '',
  fallbackChar,
  wrapper: Tag = 'span',
  style: extraStyle,
  children,
}) {
  const targetId = clueId || id;
  const hiddenChars = useOsStore((s) => s.hiddenChars);
  const discoverCharacter = useOsStore((s) => s.discoverCharacter);
  const discoveredCharacters = useOsStore((s) => s.discoveredCharacters);
  const showToast = useOsStore((s) => s.showToast);

  const clue = hiddenChars.find((c) => c.id === targetId);
  const char = clue?.character || fallbackChar || (typeof children === 'string' ? children : '');

  if (!clue) {
    return (
      <Tag style={extraStyle}>
        {before}
        {char}
        {after}
      </Tag>
    );
  }

  const isDiscovered = discoveredCharacters.includes(targetId);

  const handleClick = (e) => {
    e.stopPropagation();
    if (!isDiscovered) {
      discoverCharacter(targetId);
      showToast('Character recorded.');
    }
  };

  return (
    <Tag style={extraStyle}>
      {before}
      <span
        className={styleMap[clue.styleVariant] || ''}
        style={{
          cursor: 'pointer',
          display: 'inline-block',
        }}
        onClick={handleClick}
        title={isDiscovered ? 'Discovered character' : undefined}
      >
        {char}
      </span>
      {after}
    </Tag>
  );
}
