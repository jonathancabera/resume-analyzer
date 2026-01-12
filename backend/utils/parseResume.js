// func to parse uploaded resumé
import pdf from "pdf-parse";
import mammoth from "mammoth";
import fs from "fs";

export async function parseResume(file) {
  if (file.mimetype === "application/pdf") {
    const data = await pdf(fs.readFileSync(file.path));
    return data.text;
  }

  if (file.mimetype.includes("word")) {
    const result = await mammoth.extractRawText({ path: file.path });
    return result.value;
  }

  throw new Error("Unsupported file type");
}
