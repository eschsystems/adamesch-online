interface CharacterAppearanceCardProps {
  imageSrc?: string;
  age?: string;
  height?: string;
  weight?: string;
  eyes?: string;
  skin?: string;
  hair?: string;
}

export default function CharacterAppearanceCard({
  imageSrc,
  age,
  height,
  weight,
  eyes,
  skin,
  hair
}: CharacterAppearanceCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow h-full">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">CHARACTER APPEARANCE</h3>
      
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-56 h-56 bg-gray-700 border border-[var(--card-border)] rounded-lg flex items-center justify-center">
            {imageSrc ? (
              <img src={imageSrc} alt="character portrait" className="w-full h-full object-cover rounded-lg" />
            ) : (
              <div className="text-gray-400 text-xs text-center">
                <div className="text-2xl mb-1">📸</div>
                <div>image placeholder</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm font-mono text-center">
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">age</label>
            <div className="text-white mt-1">{age || "—"}</div>
          </div>
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">height</label>
            <div className="text-white mt-1">{height || "—"}</div>
          </div>
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">weight</label>
            <div className="text-white mt-1">{weight || "—"}</div>
          </div>
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">eyes</label>
            <div className="text-white mt-1">{eyes || "—"}</div>
          </div>
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">skin</label>
            <div className="text-white mt-1">{skin || "—"}</div>
          </div>
          <div>
            <label className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide">hair</label>
            <div className="text-white mt-1">{hair || "—"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}