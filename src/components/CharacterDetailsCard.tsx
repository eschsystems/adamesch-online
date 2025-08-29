interface CharacterDetailsCardProps {
  classAndLevel: string;
  background: string;
  playerName: string;
  race: string;
  alignment: string;
  experiencePoints: number;
}

export default function CharacterDetailsCard({
  classAndLevel,
  background,
  playerName,
  race,
  alignment,
  experiencePoints
}: CharacterDetailsCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 card-glow">
      <div className="grid grid-cols-2 gap-4 text-sm font-mono">
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Class</label>
          <div className="text-[var(--neon-pink)] font-bold mt-1">{classAndLevel}</div>
        </div>
        
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Background</label>
          <div className="text-[var(--neon-pink)] font-bold mt-1">{background || "—"}</div>
        </div>
        
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Pronouns</label>
          <div className="text-white font-bold mt-1">{playerName}</div>
        </div>
        
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Race</label>
          <div className="text-white font-bold mt-1">{race}</div>
        </div>
        
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Alignment</label>
          <div className="text-[var(--neon-purple)] font-bold mt-1">{alignment}</div>
        </div>
        
        <div>
          <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">Experience Points</label>
          <div className="text-white font-bold mt-1">{experiencePoints.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}