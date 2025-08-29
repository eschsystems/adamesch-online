'use client';

import { useState } from 'react';
import SpellCard from './SpellCard';
import { spellsData, type Spell, type SpellLevel } from '@/data/spells';

interface SpellsCardProps {
  spellLevels?: SpellLevel[];
}

export default function SpellsCard({ spellLevels = spellsData }: SpellsCardProps) {
  const [hoveredSpell, setHoveredSpell] = useState<Spell | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-4 text-center">SPELLS</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6" onMouseMove={handleMouseMove}>
        {spellLevels.map((level, levelIndex) => (
          <div key={levelIndex}>
            <h4 className="text-[var(--neon-cyan)] font-bold text-sm uppercase tracking-wide mb-3 text-center">
              {level.level}
            </h4>
            
            <div className="space-y-2">
              {level.spells.length > 0 ? (
                level.spells.map((spell, spellIndex) => (
                  <div
                    key={spellIndex}
                    className={`text-xs font-mono cursor-pointer hover:neon-glow transition-colors duration-200 text-center ${
                      spell.prepared === false 
                        ? 'text-gray-500 hover:text-gray-400' 
                        : 'text-[var(--neon-pink)] hover:text-[var(--neon-orange)]'
                    }`}
                    onMouseEnter={(e) => handleSpellHover(spell, e)}
                    onMouseLeave={handleSpellLeave}
                  >
                    {spell.name}
                    {spell.prepared === false && (
                      <span className="text-xs text-gray-600 block">(unprepared)</span>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-xs text-center italic">
                  no spells
                </div>
              )}
            </div>
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
          <SpellCard
            {...hoveredSpell}
            className=""
          />
        </div>
      )}
      
      <div className="mt-6 text-center">
        <div className="text-xs text-gray-400 font-mono">
          hover over spells for details
        </div>
      </div>
    </div>
  );
}