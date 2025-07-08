import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { featuredProjects } from '@/lib/data';
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
            Hi, I'm a programmer. I love solving problems and building things for the web.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap animate-fade-in" style={{ animationFillMode: 'backwards', animationDelay: '0.6s' }}>
            <Button asChild size="lg">
              <Link href="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://github.com/whoiscomet" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" /> GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20">
        <section id="featured-projects" className="animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.8s' }}>
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12 font-headline">Featured Project</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-lg mx-auto">
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
      </div>
    </div>
  );
}
