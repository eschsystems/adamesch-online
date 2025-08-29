import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface JournalCardProps {
  posts: BlogPost[];
}

export default function JournalCard({ posts = [] }: JournalCardProps) {
  return (
    <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-6 card-glow">
      <h3 className="text-lg font-bold text-[var(--neon-purple)] neon-glow mb-4 text-center">JOURNAL</h3>
      
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="text-center text-gray-400 font-mono text-sm">
            no posts yet • stay tuned for musings
          </div>
        ) : (
          posts.map((post) => (
          <div key={post.slug} className="border-b border-gray-700 pb-4 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <Link href={`/blog/${post.slug}`}>
                <h4 className="text-[var(--neon-cyan)] font-bold text-base hover:text-[var(--neon-orange)] transition-colors duration-200 cursor-pointer">
                  {post.title}
                </h4>
              </Link>
              <span className="text-gray-400 text-xs font-mono">{post.date}</span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-3 font-mono">
              {post.excerpt}
            </p>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded bg-[var(--neon-purple)] bg-opacity-20 text-white border border-[var(--neon-purple)] border-opacity-30 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
        )}
      </div>
      
      <div className="mt-6 text-center">
        <div className="text-xs text-gray-400 font-mono">
          musings from a multiclass unicorn
        </div>
      </div>
    </div>
  );
}