'use server';

import { generateProjectTagline, GenerateProjectTaglineInput } from '@/ai/flows/generate-project-tagline';
import { generateBlogPostTitle, GenerateBlogPostTitleInput } from '@/ai/flows/generate-blog-post-title';

export async function handleGenerateTagline(input: GenerateProjectTaglineInput): Promise<string | null> {
  try {
    const { tagline } = await generateProjectTagline(input);
    return tagline;
  } catch (error) {
    console.error('Error generating project tagline:', error);
    return null;
  }
}

export async function handleGenerateTitle(input: GenerateBlogPostTitleInput): Promise<string | null> {
    try {
        const { title } = await generateBlogPostTitle(input);
        return title;
    } catch (error) {
        console.error('Error generating blog post title:', error);
        return null;
    }
}
