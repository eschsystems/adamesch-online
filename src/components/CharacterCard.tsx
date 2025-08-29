interface CharacterCardProps {
  name: string;
  title?: string;
}

export default function CharacterCard({ name, title }: CharacterCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 card-glow h-full flex flex-col justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--neon-pink)] neon-glow mb-2 blink-animation">
          {name}
        </h1>
        {title && (
          <p className="text-lg text-[var(--neon-orange)] opacity-80">
            {title}
          </p>
        )}
        <div className="mt-4 text-xs text-white opacity-60 font-mono">
          CHARACTER SHEET v5.0.0
        </div>
      </div>
    </div>
  );
}