import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import Footer from '@/components/Footer';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <div className="mb-6">
          <Link 
            href="/" 
            className="text-[var(--neon-cyan)] hover:text-[var(--neon-orange)] transition-colors duration-200 font-mono text-sm"
          >
            ← back to character sheet
          </Link>
        </div>

        {/* Blog post container */}
        <article className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-lg p-8 card-glow">
          {/* Post header */}
          <header className="mb-6 border-b border-gray-700 pb-6">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-bold text-[var(--neon-purple)] neon-glow">
                {post.title}
              </h1>
              <time className="text-gray-400 text-sm font-mono">
                {post.date}
              </time>
            </div>
            
            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded bg-[var(--neon-purple)] bg-opacity-20 text-white border border-[var(--neon-purple)] border-opacity-30 font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post content */}
          <div className="prose prose-invert max-w-none">
            <div className="text-gray-300 font-mono leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}

// Generate static params for known posts
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}