import type { Project, Post, Skill, Experience } from './types';
import { Code } from 'lucide-react';

export const projects: Project[] = [
  {
    slug: 'portfolio-v1',
    title: 'Portfolio Website',
    tagline: 'A sleek, modern portfolio to showcase my work.',
    description: 'My personal portfolio built with Next.js, Tailwind CSS, and Three.js for interactive 3D animations.',
    longDescription: '<p>This project is the very website you are browsing. It serves as a central hub for my professional work, including my projects, blog posts, and personal background. I focused on creating a clean, modern design with a dark theme and blue accents. Key technologies include:</p><ul><li><strong>Next.js:</strong> For server-side rendering, performance, and a great developer experience.</li><li><strong>TypeScript:</strong> To ensure type safety and code quality.</li><li><strong>Tailwind CSS:</strong> For rapid, utility-first styling.</li><li><strong>Three.js:</strong> To create the engaging and interactive 3D background on the homepage.</li><li><strong>Genkit:</strong> For integrating generative AI to create project taglines and blog post titles.</li></ul><p>The entire site is designed to be fully responsive and accessible, providing a seamless experience across all devices.</p>',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'website code',
    images: [
        'https://placehold.co/800x600.png',
        'https://placehold.co/800x600.png',
        'https://placehold.co/800x600.png',
    ],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Genkit'],
    githubUrl: 'https://github.com/whoiscomet/comet',
    liveUrl: '#',
    type: 'custom',
  },
];

export const githubProjects: Project[] = [];

export const featuredProjects = projects;

export const posts: Post[] = [];

export const recentPosts = posts.slice(0, 3);

export const skills: Skill[] = [
    { name: 'C', icon: Code },
    { name: 'C++', icon: Code },
    { name: 'Python', icon: Code },
    { name: 'JavaScript', icon: Code },
    { name: 'HTML', icon: Code },
    { name: 'CSS', icon: Code },
];

export const aboutMe = {
    name: 'Comet',
    title: 'Aspiring Software Developer',
    bio: "<p>I'm a passionate and aspiring software developer from India, currently honing my skills in various technologies. With a foundation in C, C++, Python, and web fundamentals like JavaScript, HTML, and CSS, I'm eager to build innovative solutions and grow as a developer.</p><p>I'm actively working on personal projects to expand my knowledge and create exciting applications.</p>",
    image: 'https://placehold.co/400x400.png',
    'data-ai-hint': 'programmer portrait',
};

export const experiences: Experience[] = [
    {
        company: 'Personal Projects & Learning',
        role: 'Computer Science Student',
        period: '2022 - Present',
        description: 'Actively learning and applying fundamental concepts of computer science. Building personal projects using C++, Python, and web technologies to solidify my understanding and explore new areas of software development.',
    },
];
