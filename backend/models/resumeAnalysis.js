import mongoose from "mongoose";

const ResumeAnalysisSchema = new mongoose.Schema({
  resumeText: String,
  jobDescription: String,
  score: Number,
  suggestions: [String],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("ResumeAnalysis", ResumeAnalysisSchema);