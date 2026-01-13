import express from "express";
import upload from "../middleware/upload.js";
import { parseResume } from "../utils/parseResume.js";
import { analyzeWithAI } from "../utils/aiAnalyze.js";

const router = express.Router();

router.post("/", upload.single("resume"), async (req, res) => {
  const { jobDescription } = req.body;
  const resumeText = await parseResume(req.file);

  const aiResult = await analyzeWithAI(resumeText, jobDescription);

  res.json(aiResult);
});

export default router;
