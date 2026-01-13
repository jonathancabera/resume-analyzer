import React, { useState } from 'react';

function App() {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!resumeFile) {
      setError('Please select a resume file');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jobDescription', jobDescription);

    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze resume');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Resume Analyzer</h1>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Upload Resume:
            <input 
              type="file" 
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </label>
        </div>
        
        <div>
          <label>
            Job Description (optional):
            <textarea 
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              rows="5"
              cols="50"
            />
          </label>
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      </form>

      {error && (
        <div>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div>
          <h2>Analysis Results</h2>
          <p><strong>Score:</strong> {result.score}</p>
          <h3>Suggestions:</h3>
          <pre>{result.suggestions}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
