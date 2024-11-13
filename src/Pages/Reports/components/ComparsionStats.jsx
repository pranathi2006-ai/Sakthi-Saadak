import React from 'react';
import { TrendingUp, TrendingDown, Zap, DollarSign, Leaf } from 'lucide-react';

function ComparisonStats({ dateRange }) {
  const stats = {
    usage: {
      current: 450,
      previous: 500,
      unit: 'kWh'
    },
    cost: {
      current: 120,
      previous: 135,
      unit: '$'
    },
    carbon: {
      current: 200,
      previous: 225,
      unit: 'kg'
    }
  };

  const calculateChange = (current, previous) => {
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-header">
          <Zap className="stat-icon" />
          <h3>Energy Usage</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.usage.current} {stats.usage.unit}</p>
          <div className="stat-change">
            {stats.usage.current < stats.usage.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.usage.current, stats.usage.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.usage.current, stats.usage.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <DollarSign className="stat-icon" />
          <h3>Cost</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.cost.current} {stats.cost.unit}</p>
          <div className="stat-change">
            {stats.cost.current < stats.cost.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.cost.current, stats.cost.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.cost.current, stats.cost.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-header">
          <Leaf className="stat-icon" />
          <h3>Carbon Footprint</h3>
        </div>
        <div className="stat-content">
          <p className="stat-value">{stats.carbon.current} {stats.carbon.unit}</p>
          <div className="stat-change">
            {stats.carbon.current < stats.carbon.previous ? (
              <>
                <TrendingDown className="trend-icon down" />
                <span className="positive">
                  {Math.abs(calculateChange(stats.carbon.current, stats.carbon.previous))}% Less
                </span>
              </>
            ) : (
              <>
                <TrendingUp className="trend-icon up" />
                <span className="negative">
                  {calculateChange(stats.carbon.current, stats.carbon.previous)}% More
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonStats