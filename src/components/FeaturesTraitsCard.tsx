"use client";

import { subclasses } from "@/data/subclasses";
import { useSubclass } from "@/components/SubclassContext";

interface Feature {
  name: string;
  description: string;
  source?: string;
}

interface FeaturesTraitsCardProps {
  features: Feature[];
}

const classKeys = subclasses.map((s) => s.key);

export default function FeaturesTraitsCard({ features }: FeaturesTraitsCardProps) {
  const { activeKey } = useSubclass();
  const active = subclasses.find((s) => s.key === activeKey) ?? subclasses[0];

  // homebrew traits that aren't tied to a specific class stay visible for every tab
  const coreTraits = features.filter((f) => !f.source || !classKeys.includes(f.source));
  // homebrew traits whose source matches the selected class
  const classTraits = features.filter((f) => f.source === activeKey);

  // mechanical subclass features for the selected class
  const classFeatures = active.features.map((f) => ({ ...f, source: active.subclass }));

  const activeFeatures = [...classFeatures, ...classTraits];

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">
        FEATURES &amp; TRAITS
      </h3>
      <div
        className="space-y-3 text-sm font-mono max-h-64 overflow-y-auto pr-2"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#ff8c00 rgba(11, 5, 16, 0.8)",
        }}
      >
        {/* class-specific features for the active subclass */}
        <div className="text-[var(--neon-cyan)] text-[0.65rem] uppercase tracking-widest opacity-70">
          {active.key} {active.level}
        </div>
        {activeFeatures.map((feature, index) => (
          <div key={`active-${index}`} className="border-b border-gray-700 pb-2">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-[var(--neon-orange)] font-bold">{feature.name}</h4>
              {feature.source && (
                <span className="text-gray-400 text-xs">{feature.source}</span>
              )}
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">{feature.description}</p>
          </div>
        ))}

        {/* core traits that apply regardless of class */}
        <div className="pt-1 text-[var(--neon-cyan)] text-[0.65rem] uppercase tracking-widest opacity-70">
          core traits
        </div>
        {coreTraits.map((feature, index) => (
          <div key={`core-${index}`} className="border-b border-gray-700 pb-2 last:border-b-0">
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
