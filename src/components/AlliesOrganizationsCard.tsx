interface AllyOrganization {
  name: string;
  type: 'ally' | 'organization';
  relationship: string;
  description?: string;
}

interface AlliesOrganizationsCardProps {
  alliesOrganizations: AllyOrganization[];
}

export default function AlliesOrganizationsCard({ alliesOrganizations }: AlliesOrganizationsCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-4 card-glow h-full">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-3 text-center">ALLIES & ORGANIZATIONS</h3>
      <div 
        className="space-y-3 text-sm font-mono overflow-y-auto pr-2"
        style={{
          maxHeight: 'calc(100% - 4rem)', // Card height minus padding and header
          scrollbarWidth: 'thin',
          scrollbarColor: '#ff8c00 rgba(11, 5, 16, 0.8)'
        }}
      >
        {alliesOrganizations.map((item, index) => (
          <div key={index} className="border-b border-gray-700 pb-2 last:border-b-0">
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-[var(--neon-orange)] font-bold">{item.name}</h4>
              <span className={`text-xs px-2 py-1 rounded ${
                item.type === 'ally' ? 'bg-[var(--neon-cyan)] text-black' : 'bg-[var(--neon-purple)] text-white'
              }`}>
                {item.type}
              </span>
            </div>
            <p className="text-[var(--neon-pink)] text-xs mb-1">{item.relationship}</p>
            {item.description && (
              <p className="text-gray-300 text-xs leading-relaxed">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}