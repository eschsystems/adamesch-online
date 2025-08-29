interface BackstoryCardProps {
  backstory: string;
  personalityTraits?: string;
  ideals?: string;
  bonds?: string;
  flaws?: string;
}

export default function BackstoryCard({
  backstory,
  personalityTraits,
  ideals,
  bonds,
  flaws
}: BackstoryCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow h-full">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">BACKSTORY</h3>
      
      <div className="space-y-4 text-sm font-mono">
        <div>
          <h4 className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-2">summary</h4>
          <p 
            className="text-gray-300 text-xs leading-relaxed max-h-32 overflow-y-auto pr-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#ff8c00 rgba(11, 5, 16, 0.8)'
            }}
          >
            {backstory || "to be written..."}
          </p>
        </div>
        
        {personalityTraits && (
          <div>
            <h4 className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-2">personality traits</h4>
            <p className="text-gray-300 text-xs leading-relaxed">{personalityTraits}</p>
          </div>
        )}
        
        {ideals && (
          <div>
            <h4 className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-2">ideals</h4>
            <p className="text-gray-300 text-xs leading-relaxed">{ideals}</p>
          </div>
        )}
        
        {bonds && (
          <div>
            <h4 className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-2">bonds</h4>
            <p className="text-gray-300 text-xs leading-relaxed">{bonds}</p>
          </div>
        )}
        
        {flaws && (
          <div>
            <h4 className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-2">flaws</h4>
            <p className="text-gray-300 text-xs leading-relaxed">{flaws}</p>
          </div>
        )}
      </div>
    </div>
  );
}