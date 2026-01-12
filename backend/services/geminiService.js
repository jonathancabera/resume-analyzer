async function analyzeResumeWithGemini(text) {
    try {
        const prompt = `Imagine you are an expert resume reviewer. Analyze this resume and provide the following:
        1. An overall percentage (out of 100).
        2. Strengths of the resume in 3-5 bullet points.
        3. Areas for improvement in 3-5 bullet points.
        4. How compatible is the resume for ATS?

        Provide the analysis in a clear, structured format.`
        const result = await ai.models.generateContent({
            model: "gemini-3-pro",
            contents: prompt
        });
        const response = await result.response;
        const resumeAnalysis = response.text;
    } catch (err) {
        console.error('There was an error analyzing the resume with Gemini', err)
    }
}