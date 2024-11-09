
function Graph(){


    return(
        <div className="graph-container">
          <h2>Your CO2 Emissions Overview</h2>
          <div className="graph-wrapper">
            <div className="graph">
              <div className="graph-line">
                <div className="graph-point" style={{ '--value': '65%' }}>
                  <span className="tooltip">6.5 tons CO2</span>
                </div>
              </div>
              <div className="graph-labels">
                <span>Jan</span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Graph