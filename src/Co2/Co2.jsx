import React from 'react';
import './Co2style.css'; // Import the CSS file

function Co2() {
  return (
    <div className="co2-tracker">
      <section className="hero">
        <div className="hero-content">
          <h1>TRACK YOUR<br />CARBON FOOTPRINT</h1>
          <p>Understand and reduce your environmental impact with our advanced CO2 tracking system. Make informed decisions for a sustainable future.</p>
          <a href="#emissions-data" className="cta-button">Click to know your carbon footprint</a>
        </div>
        <div className="hero-image">
          <img src="eco-earth.svg" alt="Sustainable Earth" />
        </div>
      </section>

      <section id="emissions-data" className="emissions-section">
        <div className="graph-container">
          <h2>Your CO2 Emissions Overview</h2>
          <div className="graph-wrapper">
            <div className="graph">
              <div className="graph-line">
                <div className="graph-point" style={{ '--value': '65%' }}>
                  <span className="tooltip">6.5 tons CO2</span>
                </div>
                {/* ...other graph points */}
              </div>
              <div className="graph-labels">
                <span>Jan</span>
                {/* ...other labels */}
              </div>
            </div>
          </div>
        </div>

        <div className="insights-container">
          <h2>Your Carbon Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🌱</div>
              <h3>Current Status</h3>
              <p className="insight-value">5.5 tons</p>
              <p className="insight-desc">Your monthly CO2 emissions</p>
            </div>
            {/* ...other insight cards */}
          </div>

          <div className="recommendations">
            <h3>Recommendations</h3>
            <ul>
              <li>Switch to LED bulbs to reduce energy consumption</li>
              {/* ...other recommendations */}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Co2;