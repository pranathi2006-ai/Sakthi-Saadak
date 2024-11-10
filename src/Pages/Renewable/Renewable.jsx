import React, { useState , useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from './Components/Hero.jsx';
import AssessmentForm from './Components/AssessmentForm.jsx';
import Results from './Components/Results.jsx';
import './Renewable.css';

function Renewable() {
  const [showResults, setShowResults] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
    setTimeout(() => {
      setShowResults(true);
      const resultsSection = document.getElementById('results');
      resultsSection?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  };

  return (
    <div className="RE-app">
      <button onClick={handleBack} className="backButton">
        <ArrowLeft className="backIcon" />
        <span>Back</span>
      </button>
      <main>
        <Hero />
        <AssessmentForm onSubmit={handleFormSubmit} />
        {isFormSubmitted && <Results showResults={showResults} />}
      </main>
    </div>
  );
}

export default Renewable