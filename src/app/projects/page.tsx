import { projects, githubProjects } from '@/lib/data';
import { ProjectCard } from '@/components/projects/project-card';
import { GithubProjectCard } from '@/components/projects/github-project-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProjectsPage() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-2 font-headline">My Work</h1>
        <p className="text-lg text-muted-foreground">A selection of projects that I'm proud of.</p>
      </header>

      <Tabs defaultValue="custom" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="custom">Featured Projects</TabsTrigger>
          <TabsTrigger value="github">From GitHub</TabsTrigger>
        </TabsList>
        <TabsContent value="custom" className="mt-8 animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="github" className="mt-8 animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
            <div className="text-center text-muted-foreground mb-8">
                <p>Live projects from my GitHub profile. (This is placeholder data)</p>
            </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
            {githubProjects.map((project) => (
              <GithubProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
