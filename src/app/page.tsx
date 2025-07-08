import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { featuredProjects, recentPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/blog/blog-post-card';
import { ProjectCard } from '@/components/projects/project-card';
import InteractiveCanvas from '@/components/three/interactive-canvas';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <InteractiveCanvas />
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-md font-headline animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
            Comet
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-sm animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.4s' }}>
            A creative developer weaving elegant code into seamless digital experiences.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        <section id="featured-projects" className="animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 font-headline">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/projects">
                See All Projects <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>

        <section id="recent-posts" className="animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '1s' }}>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 font-headline">Recent Blog Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/blog">
                Read The Blog <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
