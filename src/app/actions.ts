"use server";
import { dreamHomeDescriptionGenerator, DreamHomeDescriptionGeneratorInput } from "@/ai/flows/dream-home-description-generator";
import { generateTestimonial, TestimonialGeneratorInput } from "@/ai/flows/testimonial-generator";

export async function generateDescriptionAction(input: DreamHomeDescriptionGeneratorInput) {
  try {
    if (!input.ideas || input.ideas.trim().length < 10) {
      return { error: "Please provide a more detailed description of your ideas (at least 10 characters)." };
    }
    
    const result = await dreamHomeDescriptionGenerator({ ideas: input.ideas });
    return { description: result.description };

  } catch (e) {
    console.error(e);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}

export async function generateTestimonialAction(input: TestimonialGeneratorInput) {
    try {
        const result = await generateTestimonial(input);
        return { testimonial: result };
    } catch (e) {
        console.error(e);
        return { error: "An unexpected error occurred while generating the testimonial." };
    }
}
