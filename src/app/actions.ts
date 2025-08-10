"use server";
import { dreamHomeDescriptionGenerator, DreamHomeDescriptionGeneratorInput } from "@/ai/flows/dream-home-description-generator";

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
