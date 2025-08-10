'use server';
/**
 * @fileOverview An AI agent for generating testimonials.
 *
 * - generateTestimonial - A function that handles the testimonial generation process.
 * - TestimonialGeneratorInput - The input type for the generateTestimonial function.
 * - TestimonialGeneratorOutput - The return type for the generateTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TestimonialGeneratorInputSchema = z.object({
  service: z
    .string()
    .describe('The remodeling service provided, e.g., "Kitchen Remodeling"'),
});
export type TestimonialGeneratorInput = z.infer<typeof TestimonialGeneratorInputSchema>;

const TestimonialGeneratorOutputSchema = z.object({
  name: z.string().describe("The name of the fictional client or family, e.g., 'The Miller Family' or 'John D.'."),
  quote: z.string().describe("A glowing testimonial quote from the client, around 2-3 sentences long."),
  avatarHint: z.string().describe("A one or two word hint for a stock photo for the avatar, e.g., 'happy couple' or 'smiling man'.")
});
export type TestimonialGeneratorOutput = z.infer<typeof TestimonialGeneratorOutputSchema>;

export async function generateTestimonial(input: TestimonialGeneratorInput): Promise<TestimonialGeneratorOutput> {
  return testimonialGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'testimonialGeneratorPrompt',
  input: {schema: TestimonialGeneratorInputSchema},
  output: {schema: TestimonialGeneratorOutputSchema},
  prompt: `You are a satisfied client of a home remodeling company called RenovateRight.

  You just had a "{{service}}" done for your home and you are extremely happy with the result.

  Write a glowing testimonial about your experience. Be enthusiastic and specific about the quality of the work and the professionalism of the team.`,
});

const testimonialGeneratorFlow = ai.defineFlow(
  {
    name: 'testimonialGeneratorFlow',
    inputSchema: TestimonialGeneratorInputSchema,
    outputSchema: TestimonialGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
