export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  'data-ai-hint'?: string;
  images?: string[];
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'custom' | 'github';
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  'data-ai-hint'?: string;
}

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
