import React from 'react';
import { Sun, DollarSign, Leaf } from 'lucide-react';
import PotentialCard from './PotentialCard';
import SeasonalGraph from './SeasonalGraph';
import Recommendations from './Recommendations';

function Results({ showResults }) {

  return (
    <section id="RE-results" className={`results-section ${showResults ? 'visible' : ''}`}>
        <div className="RE-potential-overview">
            <h2>Your Renewable Energy Potential</h2>
            <div className="RE-potential-cards">
            <PotentialCard
                icon={<Sun className="RE-card-icon" />}
                title="Annual Energy Generation"
                value="12,500 kWh"
                description="Potential solar energy generation per year"
            />
            <PotentialCard
                icon={<DollarSign className="RE-card-icon" />}
                title="Cost Savings"
                value="₹10,875"
                description="Estimated annual savings on energy bills"
            />
            <PotentialCard
                icon={<Leaf className="RE-card-icon" />}
                title="CO₂ Reduction"
                value="8.9 tons"
                description="Annual carbon emission reduction"
            />
            </div>
        </div>
            <SeasonalGraph />
            <Recommendations />
        </section>
  );
}

export default Results