interface Feature {
  name: string;
  description: string;
  source?: string;
}

interface FeaturesTraitsCardProps {
  features: Feature[];
}

export default function FeaturesTraitsCard({ features }: FeaturesTraitsCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">FEATURES & TRAITS</h3>
      <div 
        className="space-y-3 text-sm font-mono max-h-64 overflow-y-auto pr-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#ff8c00 rgba(11, 5, 16, 0.8)'
        }}
      >
        {features.map((feature, index) => (
          <div key={index} className="border-b border-gray-700 pb-2 last:border-b-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-[var(--neon-orange)] font-bold">{feature.name}</h4>
              {feature.source && (
                <span className="text-gray-400 text-xs">{feature.source}</span>
              )}
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}