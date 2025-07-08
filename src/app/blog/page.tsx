import { posts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog/blog-post-card';

export default function BlogPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2 font-headline">The Blog</h1>
        <p className="text-lg text-muted-foreground">Thoughts on code, design, and technology.</p>
      </header>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
       ) : (
        <div className="text-center text-muted-foreground mt-16 animate-fade-in">
          <p className="text-xl">No blogs yet.</p>
          <p>Check back soon!</p>
        </div>
      )}
    </div>
  );
}
