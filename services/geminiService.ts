import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const toneInstructions: Record<string, string> = {
    'Serious': 'The core tone should be serious and thought-provoking, focusing on the harsh realities and emotional impact of corruption.',
    'Satirical': 'Weave in elements of satire to highlight the absurdities and hypocrisy of the corrupt system. Use humor and exaggeration to critique societal flaws.',
    'Tragic Irony': 'Employ tragic irony to create a profound, multi-layered narrative. The story should build a sense of impending doom or a situation where characters\' actions lead to the opposite of their intended outcomes.'
};


export async function generateStory(prompt: string, tone: string, maxLength?: number): Promise<string> {
  const lengthInstruction = maxLength
    ? `
5.  **Story Length:**
    *   Keep the story concise, aiming for a length of approximately ${maxLength} characters. This is a guideline, not a strict limit. Prioritize narrative coherence and a complete story arc over the exact length.`
    : '';

  const fullPrompt = `You are an expert Odia storyteller. Your task is to write a modern, compelling story in the Odia language (using Odia script) about the pervasive issue of corruption in India.

**Core Theme/Idea:**
Use the following user-provided idea as the central theme or starting point for the story:
"${prompt}"

**Instructions for the story:**

1.  **Language and Tone:**
    *   The entire story must be written in modern Odia, using the Odia script.
    *   ${toneInstructions[tone] || toneInstructions['Serious']}

2.  **Character Development:**
    *   Create one or two central characters who are relatable.
    *   Give them clear motivations. For example, one character might be a victim of corruption, while another could be a reluctant participant or a righteous whistleblower.
    *   Show their internal conflict and how their experiences with corruption shape their decisions and personality.

3.  **Narrative Structure & Flow:**
    *   **Logical Progression:** Ensure a smooth and logical progression of events. Each scene or action should be a direct consequence of what came before it, creating a strong cause-and-effect chain that drives the story forward.
    *   **Beginning:** Introduce the characters, the setting, and the initial incident of corruption that sets the plot in motion.
    *   **Middle:** Build tension. Show the characters facing increasing challenges and moral dilemmas. Escalate the stakes and consequences of the corruption, making sure each new challenge is a result of their previous actions or the escalating situation.
    *   **Climax:** A turning point in the story where the main conflict comes to a head. This should be the direct result of the built-up tension from the middle section. The protagonist must make a crucial decision.
    *   **End:** Provide a clear resolution that logically follows from the climax. It doesn't have to be a happy ending, but it should be a satisfying conclusion to the character's journey. It could be a small victory, a tragic lesson, or a glimmer of hope.

4.  **Rich Details and Dialogue:**
    *   Incorporate sensory details to make the world feel real. For instance, describe the smell of old files in a government office, the sound of rain on a tin roof, or the taste of tea at a roadside stall where deals are made.
    *   Write realistic and impactful dialogue. Use common Odia phrases or even euphemisms for bribery (e.g., "chaa-paani byabastha," "haata guncha") to add authenticity.
${lengthInstruction}
**Output Format:**
*   The final output must ONLY be the story itself, written entirely in Odia script. Do not include any titles, headings, or introductory English text in the response.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: fullPrompt,
    });

    if (response.candidates?.[0]?.finishReason === 'SAFETY') {
      throw new Error('Content Policy Violation: The story could not be generated as the prompt may violate content safety policies. Please rephrase your idea.');
    }
    
    const story = response.text;

    if (!story) {
        throw new Error('Empty Response: The AI returned an empty story. This can happen with overly restrictive prompts. Please try a different idea.');
    }

    return story;
  } catch (error: unknown) {
    console.error("Error generating story with Gemini API:", error);

    if (error instanceof Error) {
        if (error.message.includes('API key not valid')) {
            throw new Error('Authentication Error: The API key is invalid. Please ensure it is configured correctly.');
        }
        // Re-throw custom user-friendly errors from the try block
        if (error.message.includes(':')) {
            throw error;
        }
    }

    // Fallback for network errors or other unexpected issues
    throw new Error("Network Error: Could not connect to the AI. Please check your internet connection and try again.");
  }
}

export async function generateIllustration(odiaStory: string, style: string): Promise<string> {
    try {
        // Step 1: Generate a descriptive prompt for the image model
        const promptGenerationPrompt = `
You are an expert at creating concise, visually descriptive prompts for an AI image generator.
Read the following story written in the Odia language. Based on the story, create a single, powerful, English prompt that captures a key scene, character, or emotion.
The illustration style should be: **${style}**.
The prompt should be in English, be highly descriptive, and should not exceed 60 words. Focus on visual elements like characters' expressions, the setting, the atmosphere, and the central conflict.

Odia Story:
"${odiaStory}"

Output only the generated English prompt, and nothing else.
`;

        const promptResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: promptGenerationPrompt,
        });

        if (promptResponse.candidates?.[0]?.finishReason === 'SAFETY') {
            throw new Error('Content Policy Violation: Could not create an illustration because the story content was flagged by a safety filter.');
        }

        const imagePrompt = promptResponse.text;
        if (!imagePrompt) {
            throw new Error('Analysis Failed: Could not create an illustration prompt from the story. It may be too short or lack clear visual elements.');
        }

        // Step 2: Generate the image using the new prompt
        const imageResponse = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: imagePrompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            },
        });

        const base64ImageBytes = imageResponse.generatedImages[0]?.image.imageBytes;

        if (!base64ImageBytes) {
            throw new Error('Image Generation Blocked: The AI did not return an image. This can happen if the visual description is flagged by safety filters.');
        }

        return base64ImageBytes;

    } catch (error: unknown) {
        console.error("Error generating illustration with Gemini API:", error);
        
        if (error instanceof Error) {
            if (error.message.includes('API key not valid')) {
                throw new Error('Authentication Error: The API key is invalid. Please ensure it is configured correctly.');
            }
            if (error.message.toLowerCase().includes('safety')) {
                throw new Error('Content Policy Violation: The illustration was blocked by safety filters.');
            }
            // Re-throw custom user-friendly errors from the try block
            if (error.message.includes(':')) {
                throw error;
            }
        }

        // Fallback for network errors or other unexpected issues
        throw new Error("Network Error: Could not generate the illustration. Please check your internet connection and try again.");
    }
}