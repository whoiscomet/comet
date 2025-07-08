'use client';

import { useState, useEffect } from 'react';
import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Github, ExternalLink } from 'lucide-react';
import { TaglineGenerator } from '@/components/projects/tagline-generator';
import type { Project } from '@/lib/types';

export default function ProjectDetailsPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null);
  const [currentTagline, setCurrentTagline] = useState('');

  useEffect(() => {
    const foundProject = projects.find((p) => p.slug === params.slug);
    if (foundProject) {
      setProject(foundProject);
      setCurrentTagline(foundProject.tagline);
    } else {
      notFound();
    }
  }, [params.slug]);

  if (!project) {
    return null; // Or a loading spinner
  }

  return (
    <div className="container max-w-5xl mx-auto px-4 py-16 sm:py-24 animate-fade-in">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 font-headline">{project.title}</h1>
        <p className="text-xl text-muted-foreground" id="tagline-display">{currentTagline}</p>
      </header>
      
      <div className="flex flex-col md:flex-row gap-8">
        <main className="md:w-2/3">
          <Carousel className="w-full mb-8 shadow-lg rounded-lg overflow-hidden">
            <CarouselContent>
              {project.images && project.images.length > 0 ? project.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="relative aspect-video w-full">
                    <Image src={img} alt={`${project.title} screenshot ${index + 1}`} fill className="object-cover" data-ai-hint="project screenshot" />
                  </div>
                </CarouselItem>
              )) : (
                <CarouselItem>
                  <div className="relative aspect-video w-full">
                    <Image src={project.image} alt={project.title} fill className="object-cover" data-ai-hint="project code"/>
                  </div>
                </CarouselItem>
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          
          <h2 className="text-2xl font-bold mb-4 font-headline">About this project</h2>
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: project.longDescription }}
          />
        </main>
        
        <aside className="md:w-1/3">
          <div className="sticky top-24 p-6 rounded-lg bg-secondary/30 border">
            <h3 className="text-xl font-semibold mb-4 font-headline">Project Info</h3>
            
            <div className="space-y-4">
                <TaglineGenerator project={project} onTaglineGenerated={setCurrentTagline} />
              
                <div>
                  <h4 className="font-semibold text-sm mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.githubUrl && (
                    <Button asChild variant="ghost" className="w-full justify-start">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View on GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild className="w-full">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> View Live Site
                      </Link>
                    </Button>
                  )}
                </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
