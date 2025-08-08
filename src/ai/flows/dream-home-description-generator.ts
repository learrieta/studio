'use server';
/**
 * @fileOverview Dream home description generator AI agent.
 *
 * - dreamHomeDescriptionGenerator - A function that generates dream home descriptions.
 * - DreamHomeDescriptionGeneratorInput - The input type for the dreamHomeDescriptionGenerator function.
 * - DreamHomeDescriptionGeneratorOutput - The return type for the dreamHomeDescriptionGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DreamHomeDescriptionGeneratorInputSchema = z.object({
  ideas: z
    .string()
    .describe('A description of the users remodeling ideas.'),
});
export type DreamHomeDescriptionGeneratorInput = z.infer<typeof DreamHomeDescriptionGeneratorInputSchema>;

const DreamHomeDescriptionGeneratorOutputSchema = z.object({
  description: z.string().describe('The generated description of the dream home project.'),
});
export type DreamHomeDescriptionGeneratorOutput = z.infer<typeof DreamHomeDescriptionGeneratorOutputSchema>;

export async function dreamHomeDescriptionGenerator(input: DreamHomeDescriptionGeneratorInput): Promise<DreamHomeDescriptionGeneratorOutput> {
  return dreamHomeDescriptionGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dreamHomeDescriptionGeneratorPrompt',
  input: {schema: DreamHomeDescriptionGeneratorInputSchema},
  output: {schema: DreamHomeDescriptionGeneratorOutputSchema},
  prompt: `You are a home remodeling expert, skilled at visualizing and describing dream home projects based on initial ideas.

  Based on the following ideas, generate a vivid and inspiring description of the dream home project.

  Ideas: {{{ideas}}}`,
});

const dreamHomeDescriptionGeneratorFlow = ai.defineFlow(
  {
    name: 'dreamHomeDescriptionGeneratorFlow',
    inputSchema: DreamHomeDescriptionGeneratorInputSchema,
    outputSchema: DreamHomeDescriptionGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
