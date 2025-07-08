import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export function ProjectCard({ project }: { project: Project }) {
  const projectLink = project.type === 'custom' ? `/projects/${project.slug}` : project.githubUrl || '#';
  const isExternalLink = project.type === 'github';

  const cardContent = (
    <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
      <CardHeader>
        <div className="relative aspect-video w-full mb-4 overflow-hidden rounded-md">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project['data-ai-hint']}
          />
        </div>
        <CardTitle className="text-lg leading-tight font-headline">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>
         <div className="text-primary text-sm font-semibold flex items-center">
            {isExternalLink ? 'View on GitHub' : 'View Details'}
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
      </CardContent>
    </Card>
  );

  return (
    <Link 
      href={projectLink} 
      className="group block"
      target={isExternalLink ? '_blank' : '_self'}
      rel={isExternalLink ? 'noopener noreferrer' : ''}
    >
      {cardContent}
    </Link>
  );
}
