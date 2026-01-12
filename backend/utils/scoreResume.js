// func to score resumé from 1 to 100
export function scoreResume(resumeText, jobText) {
  const resumeWords = new Set(resumeText.toLowerCase().split(/\W+/));
  const jobWords = jobText.toLowerCase().split(/\W+/);

  const matched = jobWords.filter(word => resumeWords.has(word));
  const score = Math.min(100, Math.round((matched.length / jobWords.length) * 100));

  return score;
}
