interface Skill {
  name: string;
  ability: string;
  modifier: string;
  proficient: boolean;
  expertise: boolean;
}

interface SkillsCardProps {
  skills: Skill[];
}

export default function SkillsCard({ skills }: SkillsCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">SKILLS</h3>
      <div className="space-y-1 text-xs font-mono">
        {skills.map((skill) => (
          <div key={skill.name} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${
                skill.expertise ? 'bg-[var(--neon-orange)]' :
                skill.proficient ? 'bg-[var(--neon-pink)]' : 'bg-gray-600'
              }`}></span>
              <span className="text-[var(--neon-cyan)]">{skill.name}</span>
              <span className="text-gray-500 text-xs">({skill.ability})</span>
            </div>
            <span className="text-white">{skill.modifier}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-gray-400 border-t border-gray-600 pt-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-pink)]"></span>
            <span>proficient</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-[var(--neon-orange)]"></span>
            <span>expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
}