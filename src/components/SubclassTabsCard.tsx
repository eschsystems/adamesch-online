"use client";

import { subclasses } from "@/data/subclasses";
import { useSubclass } from "@/components/SubclassContext";

export default function SubclassTabsCard() {
  const { activeKey, setActiveKey } = useSubclass();
  const active = subclasses.find((s) => s.key === activeKey) ?? subclasses[0];

  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">
        SUBCLASSES
      </h3>

      {/* Tab buttons - span the full width of the card */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-4">
        {subclasses.map((s) => {
          const isActive = s.key === activeKey;
          return (
            <button
              key={s.key}
              onClick={() => setActiveKey(s.key)}
              className={`w-full px-3 py-2 rounded-md text-xs font-mono uppercase tracking-wide transition-all duration-200 border ${
                isActive
                  ? "border-[var(--neon-pink)] text-[var(--neon-pink)] neon-glow bg-[rgba(255,0,255,0.08)]"
                  : "border-gray-700 text-gray-400 hover:text-[var(--neon-cyan)] hover:border-[var(--neon-cyan)]"
              }`}
            >
              {s.key}
            </button>
          );
        })}
      </div>

      {/* Active subclass summary - stats + one-liner only */}
      <div className="font-mono">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h4 className="text-[var(--neon-orange)] font-bold text-base">
            {active.key} {active.level} — {active.subclass}
          </h4>
          <span className="text-[var(--neon-cyan)] text-xs opacity-80">
            {active.castingAbility} · dc {active.saveDC} · atk {active.spellAttack}
          </span>
        </div>

        <p className="text-gray-300 text-xs leading-relaxed italic">
          {active.tagline}
        </p>
      </div>
    </div>
  );
}
