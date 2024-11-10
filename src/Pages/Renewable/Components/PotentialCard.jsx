import React from 'react';

function PotentialCard({ icon, title, value, description }) {
  return (
    <div className="RE-potential-card">
      {icon}
      <h3>{title}</h3>
      <div className="RE-value">{value}</div>
      <p>{description}</p>
    </div>
  );
}

export default PotentialCard