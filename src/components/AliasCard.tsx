interface SocialLink {
  platform: string;
  handle: string;
  url: string;
}

interface AliasCardProps {
  socialLinks: SocialLink[];
}

export default function AliasCard({ socialLinks }: AliasCardProps) {
  return (
    <div id="followme" className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-4 text-center">ALIASES</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 text-sm font-mono">
        {socialLinks.filter(link => link.platform !== "followme").map((link, index) => (
          <div key={index} className="text-center">
            <div className="text-[var(--neon-cyan)] opacity-70 text-xs uppercase tracking-wide mb-1">
              {link.platform}
            </div>
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--neon-pink)] hover:text-[var(--neon-orange)] transition-colors duration-200 hover:neon-glow"
            >
              {link.handle}
            </a>
          </div>
        ))}
        
        {/* Placeholder for additional links */}
        {Array.from({ length: Math.max(0, 6 - socialLinks.filter(link => link.platform !== "followme").length) }).map((_, index) => (
          <div key={`placeholder-${index}`} className="text-center opacity-30">
            <div className="text-[var(--neon-cyan)] text-xs uppercase tracking-wide mb-1">
              platform
            </div>
            <div className="text-gray-500">
              @handle
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <div className="text-xs text-gray-400 font-mono">
          follow me around the internet
        </div>
      </div>
    </div>
  );
}