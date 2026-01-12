// function to analyze resumé and print out a score
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function analyzeWithAI(resumeText, jobText) {
  const model = genAI.getGenerativeModel({
    model: "gemini-3-pro-preview"
  });

  const prompt = `
You are a professional resume coach and ATS optimization expert.

Resume:
${resumeText}

Job Description:
${jobText}

Return your response ONLY as valid JSON in this exact format:

{
  "score": number (0-100),
  "suggestions": [
    "suggestion 1",
    "suggestion 2"
  ]
}

Rules:
- Score must be an integer
- Provide at least 2 actionable suggestions
- Do not include any explanation outside JSON
`;

  const result = await model.generateContent(prompt);

  // Gemini returns plain text → must parse
  const text = result.response.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    console.error("Gemini JSON parse failed:", text);
    throw new Error("Invalid AI response format");
  }
}
