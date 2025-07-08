import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

export function BlogPostCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader>
          <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={post['data-ai-hint']}
            />
          </div>
          <CardTitle className="text-lg leading-tight font-headline">{post.title}</CardTitle>
          <time dateTime={post.date} className="text-sm text-muted-foreground">
            {format(parseISO(post.date), 'MMMM d, yyyy')}
          </time>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
          <div className="text-primary text-sm font-semibold flex items-center">
            Read more <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
