
import { GoogleGenAI } from "@google/genai";

export async function getStorageAdvice(userQuery: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user is asking for storage advice for Rio Bonito Boat RV Trucks Storage Yard.
      
      CONTEXT FOR ADVISOR:
      - We provide high-end storage for Boats, RVs, and Trucks.
      - Amenities: 4K Surveillance, Biometric Access, Paved Lots, 24/7 Access, On-site Manager.
      - Locations: Near Bonito Valley, California.
      - Goal: Estimate required size and give expert maintenance tips.
      
      IMPORTANT: Respond in the same language as the user query unless they specifically ask for another language. Be rugged, professional, and helpful.
      
      User Query: ${userQuery}`,
      config: {
        systemInstruction: "You are the head concierge at Rio Bonito Storage. Your tone is professional, authoritative yet friendly. Use short paragraphs and bullet points for clarity.",
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
