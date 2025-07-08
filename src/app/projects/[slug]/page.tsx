import { projects } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ProjectDetailsClient } from '@/components/projects/project-details-client';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailsPage({ params }: { params: { slug:string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailsClient project={project} />;
}
