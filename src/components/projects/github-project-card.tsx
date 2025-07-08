import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, GitFork } from 'lucide-react';

export function GithubProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.githubUrl || '#'} className="group block" target="_blank" rel="noopener noreferrer">
      <Card className="h-full transition-all duration-300 group-hover:border-primary group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader>
          <CardTitle className="text-lg leading-tight font-headline">{project.title}</CardTitle>
          <CardDescription className="text-sm">{project.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex items-center justify-between text-muted-foreground text-sm">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 100)}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{Math.floor(Math.random() * 50)}</span>
                </div>
            </div>
            <div className="text-primary font-semibold flex items-center">
              View on GitHub
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
