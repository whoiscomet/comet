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
    githubUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
    type: 'custom',
  },
  {
    slug: 'eco-tracker',
    title: 'EcoTracker',
    tagline: 'Monitor and reduce your carbon footprint.',
    description: 'A web app that helps users track their daily activities to calculate and suggest ways to lower their environmental impact.',
    longDescription: '<p>EcoTracker is a comprehensive tool designed to promote environmental awareness. Users can log their daily travel, energy consumption, and dietary habits. The application then analyzes this data to provide a detailed report on their carbon footprint, along with personalized recommendations for a more sustainable lifestyle. It features data visualization to show progress over time and a community section to share tips and achievements.</p>',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'nature data',
    tech: ['React', 'Firebase', 'Chart.js', 'Node.js'],
    githubUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
    type: 'custom',
  },
];

export const githubProjects: Project[] = [
    {
        slug: 'github-placeholder-1',
        title: 'My Awesome CLI Tool',
        tagline: 'A placeholder for a real GitHub project.',
        description: 'This is where a description of a fetched GitHub project would go. It might be a utility, a library, or a full application.',
        longDescription: '',
        image: 'https://placehold.co/600x400.png',
        'data-ai-hint': 'terminal code',
        tech: ['Go', 'Cobra'],
        type: 'github',
    },
];

export const featuredProjects = projects.slice(0, 2);

export const posts: Post[] = [
  {
    slug: 'mastering-async-javascript',
    title: 'Mastering Asynchronous JavaScript',
    date: '2024-05-15',
    excerpt: 'A deep dive into Promises, async/await, and how to handle asynchronous operations in modern JavaScript.',
    content: '<h1>Understanding the Event Loop</h1><p>The foundation of asynchronous programming in JavaScript is the event loop...</p><h2>Promises</h2><p>Promises provide a cleaner way to handle asynchronous operations compared to callbacks...</p><h2>Async/Await</h2><p>Async/await is syntactic sugar on top of Promises, making your asynchronous code look synchronous and easier to read...</p>',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'javascript code',
  },
  {
    slug: 'building-interactive-uis-with-threejs',
    title: 'Building Interactive UIs with Three.js and React',
    date: '2024-04-22',
    excerpt: 'Learn how to integrate stunning 3D graphics into your React applications using Three.js and react-three-fiber.',
    content: '<h1>Setting up your Scene</h1><p>The first step is to create a canvas and a Three.js scene...</p><h2>Using react-three-fiber</h2><p>react-three-fiber simplifies the process of using Three.js in React by providing hooks and components...</p>',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': '3d model',
  },
  {
    slug: 'a-guide-to-docker-for-web-developers',
    title: 'A Guide to Docker for Web Developers',
    date: '2024-03-10',
    excerpt: 'Discover how Docker can streamline your development workflow, simplify deployment, and ensure consistency across environments.',
    content: '<h1>What is Docker?</h1><p>Docker is a platform for developing, shipping, and running applications in containers...</p><h2>Creating a Dockerfile</h2><p>A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image...</p>',
    image: 'https://placehold.co/600x400.png',
    'data-ai-hint': 'docker whale',
  },
];

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
