'use server';
/**
 * @fileOverview AI agent that generates blog post titles based on a given topic.
 *
 * - generateBlogPostTitle - A function that generates blog post titles.
 * - GenerateBlogPostTitleInput - The input type for the generateBlogPostTitle function.
 * - GenerateBlogPostTitleOutput - The return type for the generateBlogPostTitle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateBlogPostTitleInputSchema = z.object({
  topic: z.string().describe('The topic of the blog post.'),
});
export type GenerateBlogPostTitleInput = z.infer<typeof GenerateBlogPostTitleInputSchema>;

const GenerateBlogPostTitleOutputSchema = z.object({
  title: z.string().describe('The generated blog post title.'),
});
export type GenerateBlogPostTitleOutput = z.infer<typeof GenerateBlogPostTitleOutputSchema>;

export async function generateBlogPostTitle(input: GenerateBlogPostTitleInput): Promise<GenerateBlogPostTitleOutput> {
  return generateBlogPostTitleFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateBlogPostTitlePrompt',
  input: {schema: GenerateBlogPostTitleInputSchema},
  output: {schema: GenerateBlogPostTitleOutputSchema},
  prompt: `You are an expert blog post title generator. Based on the topic provided, generate a compelling and SEO-friendly blog post title.\n\nTopic: {{{topic}}}`,
});

const generateBlogPostTitleFlow = ai.defineFlow(
  {
    name: 'generateBlogPostTitleFlow',
    inputSchema: GenerateBlogPostTitleInputSchema,
    outputSchema: GenerateBlogPostTitleOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
