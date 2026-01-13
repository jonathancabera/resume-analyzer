# resume-analyzer

Resume analyzer that uses the Google Gemini API to analyze resumes and provide feedback.

## Setup

1. Install all dependencies:
```bash
npm install
cd frontend && npm install && cd ..
```

2. Create a `.env` file in the root directory with:
```
MONGO_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key
```

## Running the Application

Run both frontend and backend together:
```bash
npm run dev
```

This will start:
- Backend server on http://localhost:5000
- Frontend React app on http://localhost:3000

## Individual Commands

- `npm run server` - Run backend only
- `npm run client` - Run frontend only

## Usage

1. Open http://localhost:3000 in your browser
2. Upload a resume (PDF, DOC, or DOCX)
3. Optionally add a job description
4. Click "Analyze Resume" to get AI-powered feedback
