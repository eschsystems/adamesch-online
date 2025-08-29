export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-gray-700">
      <div className="text-center space-y-4">
        <div>
          <a 
            href="mailto:adam@esch.systems"
            className="text-[var(--neon-cyan)] hover:text-[var(--neon-pink)] hover:neon-glow transition-colors duration-200 font-mono text-lg"
          >
            contact me
          </a>
        </div>
        
        <div className="text-gray-400 text-xs font-mono">
          vibe-coded with{" "}
          <a 
            href="https://claude.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[var(--neon-purple)] hover:text-[var(--neon-orange)] transition-colors duration-200"
          >
            claude
          </a>
        </div>
        
        <div className="text-gray-500 text-xs font-mono opacity-60">
          © 2025 esch systems llc • embrace the dark side
        </div>
      </div>
    </footer>
  );
}