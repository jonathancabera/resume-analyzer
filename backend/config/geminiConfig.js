import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview"
  });
  console.log(response.text);
}

await main();