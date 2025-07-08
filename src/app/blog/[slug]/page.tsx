import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container max-w-4xl mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-headline">{post.title}</h1>
        <time dateTime={post.date} className="text-muted-foreground">
          Published on {format(parseISO(post.date), 'MMMM d, yyyy')}
        </time>
      </header>
      
      <div className="relative aspect-video w-full mb-12 overflow-hidden rounded-lg shadow-xl">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint={post['data-ai-hint']}
        />
      </div>

      <div
        className="prose prose-invert prose-lg max-w-none prose-h1:font-headline prose-h1:text-3xl prose-h2:text-2xl prose-a:text-primary hover:prose-a:text-accent prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
