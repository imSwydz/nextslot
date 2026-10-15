import {GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({
  apikey : process.env.GEMINI_API_KEY,

});
export async function parseScheduleRequest(message) {
  const interactions = await ai.interactions.create({
    model = "gemini-3.7-flash",
    input : `
        Convert the user's scheduling request into JSON.

      Return ONLY valid JSON with these fields:
      {
        "title": string,
        "date": string,
        "timePreference": string,
        "durationMinutes": number
      }

      User request:
      ${message}
    `
  },
  generation_config = {
    "thinking_level" : "low"
  }
);
return JSON.parse(interactions.output_text)
}
