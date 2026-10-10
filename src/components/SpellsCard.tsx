'use client';

import { useState } from 'react';
import SpellCard from './SpellCard';
import { spellbooks, levelRank, type Spell } from '@/data/spells';

export default function SpellsCard() {
  const [activeKey, setActiveKey] = useState(spellbooks[0].key);
  const [hoveredSpell, setHoveredSpell] = useState<Spell | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const activeBook = spellbooks.find((b) => b.key === activeKey) ?? spellbooks[0];
  const sortedSpells = [...activeBook.spells].sort(
    (a, b) => levelRank(a.level) - levelRank(b.level)
  );

  const handleSpellHover = (spell: Spell, event: React.MouseEvent) => {
    setHoveredSpell(spell);
    updateMousePosition(event);
  };

  const handleSpellLeave = () => {
    setHoveredSpell(null);
  };

  const updateMousePosition = (event: React.MouseEvent) => {
    const cardWidth = 320; // w-80 = 320px
    const cardHeight = 300; // approximate height
    const padding = 20;
    const offset = 15; // small offset from cursor

    let x = event.clientX + offset;
    let y = event.clientY + offset;

    // Prevent going off right edge
    if (x + cardWidth > window.innerWidth) {
      x = event.clientX - cardWidth - offset;
    }

    // Prevent going off bottom edge
    if (y + cardHeight > window.innerHeight) {
      y = event.clientY - cardHeight - offset;
    }

    // Prevent going off top edge
    if (y < padding) {
      y = padding;
    }

    // Prevent going off left edge
    if (x < padding) {
      x = padding;
    }

    setMousePosition({ x, y });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (hoveredSpell) {
      updateMousePosition(event);
    }
  };

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 card-glow relative">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-4 text-center">SPELLBOOKS</h3>

      {/* Spellbook tabs - one per class, spanning the card */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {spellbooks.map((book) => {
          const isActive = book.key === activeKey;
          return (
            <button
              key={book.key}
              onClick={() => {
                setActiveKey(book.key);
                setHoveredSpell(null);
              }}
              className={`w-full px-3 py-2 rounded-md text-xs font-mono uppercase tracking-wide transition-all duration-200 border ${
                isActive
                  ? 'border-[var(--neon-pink)] text-[var(--neon-pink)] neon-glow bg-[rgba(255,0,255,0.08)]'
                  : 'border-gray-700 text-gray-400 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]'
              }`}
            >
              {book.key}
            </button>
          );
        })}
      </div>

      {/* Active spellbook heading */}
      <div className="text-center mb-4">
        <div className="text-[var(--neon-orange)] font-bold font-mono">{activeBook.name}</div>
        <div className="text-[var(--neon-cyan)] text-xs font-mono opacity-80">{activeBook.className}</div>
      </div>

      {/* Spells in the active spellbook */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        onMouseMove={handleMouseMove}
      >
        {sortedSpells.map((spell, spellIndex) => (
          <div
            key={spellIndex}
            className={`text-xs font-mono cursor-pointer hover:neon-glow transition-colors duration-200 text-center p-2 rounded border border-gray-800 ${
              spell.prepared === false
                ? 'text-gray-500 hover:text-gray-400'
                : 'text-[var(--neon-pink)] hover:text-[var(--neon-orange)]'
            }`}
            onMouseEnter={(e) => handleSpellHover(spell, e)}
            onMouseLeave={handleSpellLeave}
          >
            <span className="block text-[0.6rem] text-[var(--neon-cyan)] opacity-70 uppercase tracking-wide">
              {spell.level}
            </span>
            {spell.name}
            {spell.prepared === false && (
              <span className="text-xs text-gray-600 block">(unprepared)</span>
            )}
          </div>
        ))}
      </div>

      {/* Hover card */}
      {hoveredSpell && (
        <div
          className="fixed pointer-events-none z-50"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        >
          <SpellCard {...hoveredSpell} className="" />
        </div>
      )}

      <div className="mt-6 text-center">
        <div className="text-xs text-gray-400 font-mono">hover over spells for details</div>
      </div>
    </div>
  );
}
