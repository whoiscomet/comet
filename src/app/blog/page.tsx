import { posts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog/blog-post-card';

export default function BlogPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2 font-headline">The Blog</h1>
        <p className="text-lg text-muted-foreground">Thoughts on code, design, and technology.</p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
