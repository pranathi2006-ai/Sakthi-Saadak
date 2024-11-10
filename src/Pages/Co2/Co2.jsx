import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero from './Components/Hero';
import Graph from './Components/Graph';
import Insights from './Components/Insights';
import './Co2.css'; 

function Co2() {

  const handleBack = () => {
    window.history.back();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="co2-tracker">
      <button onClick={handleBack} className="backButton">
        <ArrowLeft className="backIcon" />
        <span>Back</span>
      </button>
      <Hero />
      <section id="emissions-data" className="emissions-section">
        <Graph />
        <Insights />
      </section>
    </div>
  );
}

export default Co2