interface SpellCardProps {
  name: string;
  level: string;
  school: string;
  castingTime: string;
  range: string;
  components: string;
  duration: string;
  description: string;
  className?: string;
}

export default function SpellCard({
  name,
  level,
  school,
  castingTime,
  range,
  components,
  duration,
  description,
  className = ""
}: SpellCardProps) {
  return (
    <div className={`bg-[var(--card-bg)] border border-[var(--neon-purple)] rounded-lg p-4 shadow-2xl max-w-sm w-80 ${className}`}>
      <div className="mb-3">
        <h4 className="text-[var(--neon-cyan)] font-bold text-base neon-glow">{name}</h4>
        <p className="text-[var(--neon-purple)] text-xs">{level} {school}</p>
      </div>
      
      <div className="space-y-2 text-xs font-mono">
        <div>
          <span className="text-[var(--neon-orange)] font-bold">casting time:</span>
          <span className="text-gray-300 ml-1">{castingTime}</span>
        </div>
        <div>
          <span className="text-[var(--neon-orange)] font-bold">range:</span>
          <span className="text-gray-300 ml-1">{range}</span>
        </div>
        <div>
          <span className="text-[var(--neon-orange)] font-bold">components:</span>
          <span className="text-gray-300 ml-1">{components}</span>
        </div>
        <div>
          <span className="text-[var(--neon-orange)] font-bold">duration:</span>
          <span className="text-gray-300 ml-1">{duration}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <p className="text-gray-300 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
}