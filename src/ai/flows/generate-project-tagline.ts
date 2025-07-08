'use server';
/**
 * @fileOverview A tagline generator for a project.
 *
 * - generateProjectTagline - A function that handles the tagline generation for a project.
 * - GenerateProjectTaglineInput - The input type for the generateProjectTagline function.
 * - GenerateProjectTaglineOutput - The return type for the generateProjectTagline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProjectTaglineInputSchema = z.object({
  projectName: z.string().describe('The name of the project.'),
  projectDescription: z.string().describe('The description of the project.'),
});
export type GenerateProjectTaglineInput = z.infer<typeof GenerateProjectTaglineInputSchema>;

const GenerateProjectTaglineOutputSchema = z.object({
  tagline: z.string().describe('The generated tagline for the project.'),
});
export type GenerateProjectTaglineOutput = z.infer<typeof GenerateProjectTaglineOutputSchema>;

export async function generateProjectTagline(input: GenerateProjectTaglineInput): Promise<GenerateProjectTaglineOutput> {
  return generateProjectTaglineFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectTaglinePrompt',
  input: {schema: GenerateProjectTaglineInputSchema},
  output: {schema: GenerateProjectTaglineOutputSchema},
  prompt: `You are an expert marketing copywriter specializing in creating catchy taglines for software projects.

  Project Name: {{{projectName}}}
  Project Description: {{{projectDescription}}}

  Generate a single, concise tagline that captures the essence of the project and makes it sound appealing to potential users or contributors. The tagline must not be more than 10 words.
  `,
});

const generateProjectTaglineFlow = ai.defineFlow(
  {
    name: 'generateProjectTaglineFlow',
    inputSchema: GenerateProjectTaglineInputSchema,
    outputSchema: GenerateProjectTaglineOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
