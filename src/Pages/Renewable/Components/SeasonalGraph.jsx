import React from 'react';

function SeasonalGraph() {
  React.useEffect(() => {
    const points = document.querySelectorAll('.graph-point');
    points.forEach((point, index) => {
      setTimeout(() => {
        point.style.height = `${point.getAttribute('data-value')}px`;
      }, index * 200);
    });
  }, []);

  return (
    <div className="RE-graph-container">
      <h2>Seasonal Energy Generation Potential</h2>
      <div className="RE-graph-wrapper">
        <div className="RE-graph">
          <div className="RE-graph-line">
            <div className="RE-graph-point" data-value="85">
              <span className="RE-tooltip">1,250 kWh</span>
            </div>
            <div className="RE-graph-point" data-value="95">
              <span className="RE-tooltip">1,400 kWh</span>
            </div>
            <div className="RE-graph-point" data-value="100">
              <span className="RE-tooltip">1,500 kWh</span>
            </div>
            <div className="RE-graph-point" data-value="90">
              <span className="RE-tooltip">1,350 kWh</span>
            </div>
          </div>
          <div className="RE-graph-labels">
            <span>Spring</span>
            <span>Summer</span>
            <span>Fall</span>
            <span>Winter</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeasonalGraph;