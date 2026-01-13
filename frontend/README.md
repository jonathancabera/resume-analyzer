# Resume Analyzer Frontend

A simple React frontend for uploading and analyzing resumes.

## Setup

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the development server:
```bash
npm start
```

The app will run on http://localhost:3000

## Usage

1. Click "Choose File" to select a resume (PDF, DOC, or DOCX)
2. Optionally enter a job description
3. Click "Analyze Resume" to process
4. View the score and suggestions returned by the AI

## Backend Connection

The frontend connects to the backend API at `http://localhost:5000/analyze`

Make sure your backend server is running before using the frontend.
