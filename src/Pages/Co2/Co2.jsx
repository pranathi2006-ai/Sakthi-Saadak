import Hero from './Components/Hero';
import Graph from './Components/Graph';
import Insights from './Components/Insights';
import './Co2.css'; 

function Co2() {
  return (
    <div className="co2-tracker">
          <Hero />
        <section id="emissions-data" className="emissions-section">
          <Graph />
          <Insights />
        </section>
    </div>
  );
}

export default Co2