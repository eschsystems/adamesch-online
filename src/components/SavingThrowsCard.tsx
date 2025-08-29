interface SavingThrow {
  ability: string;
  modifier: string;
  proficient: boolean;
}

interface SavingThrowsCardProps {
  savingThrows: SavingThrow[];
}

export default function SavingThrowsCard({ savingThrows }: SavingThrowsCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow flex flex-col">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">SAVING THROWS</h3>
      <div className="space-y-2 text-sm font-mono">
        {savingThrows.map((save) => (
          <div key={save.ability} className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className={`w-2 h-2 rounded-full ${save.proficient ? 'bg-[var(--neon-pink)]' : 'bg-gray-600'}`}></span>
              <span className="text-[var(--neon-cyan)]">{save.ability}</span>
            </div>
            <span className="text-white">{save.modifier}</span>
          </div>
        ))}
      </div>
    </div>
  );
}