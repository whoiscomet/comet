import Image from 'next/image';
import { aboutMe, skills, experiences } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="container max-w-5xl mx-auto px-4 py-16 sm:py-24">
      <header className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tight mb-4 font-headline">About Me</h1>
        <p className="text-xl text-muted-foreground">{aboutMe.title}</p>
      </header>

      <section className="grid md:grid-cols-3 gap-12 items-center mb-20 animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.2s' }}>
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-primary">
            <Image 
              src={aboutMe.image} 
              alt={aboutMe.name} 
              fill 
              className="object-cover" 
              priority
              data-ai-hint={aboutMe['data-ai-hint']}
            />
          </div>
        </div>
        <div
          className="md:col-span-2 text-muted-foreground space-y-4"
          dangerouslySetInnerHTML={{ __html: aboutMe.bio }}
        />
      </section>

      <section className="mb-20 animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.4s' }}>
        <h2 className="text-3xl font-bold text-center mb-10 font-headline">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center bg-card hover:bg-secondary transition-colors">
              <skill.icon className="w-8 h-8 mb-2 text-primary" />
              <p className="font-medium text-sm">{skill.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="animate-float-up" style={{ animationFillMode: 'backwards', animationDelay: '0.6s' }}>
        <h2 className="text-3xl font-bold text-center mb-12 font-headline">Work Experience</h2>
        <div className="relative border-l-2 border-primary/20 pl-8 space-y-12">
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 ring-4 ring-background"></div>
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[39px] top-1 ring-4 ring-background"></div>
              <h3 className="text-xl font-semibold font-headline">{exp.role}</h3>
              <p className="text-md text-primary">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
