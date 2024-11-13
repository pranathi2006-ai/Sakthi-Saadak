import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format, subDays } from 'date-fns';

function Graph() {
  const [powerData, setPowerData] = useState([]);
  const [maxPower, setMaxPower] = useState(0);

  useEffect(() => {
    fetchPowerData();
    const interval = setInterval(fetchPowerData, 300000); 
    return () => clearInterval(interval);
  }, []);

  const fetchPowerData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }

      const response = await axios.get('http://localhost:5000/get-power', {
        headers: {
          'Authorization': token
        }
      });

      const groupedData = response.data;
      const today = new Date();
      const dates = Array.from({ length: 7 }, (_, i) => 
        format(subDays(today, 6 - i), 'yyyy-MM-dd')
      );

      const processedData = dates.map(date => {
        const dayData = groupedData[date] || [];
        const dayTotal = dayData.reduce((sum, entry) => sum + entry.power, 0);
        return {
          date: format(new Date(date), 'MMM dd'),
          power: dayTotal,
          originalDate: date
        };
      });

      const maxPowerValue = Math.max(...processedData.map(d => d.power));
      setMaxPower(maxPowerValue || 1000); 
      setPowerData(processedData);
    } catch (error) {
      console.error('Error fetching power data:', error);
    }
  };

  return (
    <div className="graph-container">
      <h2>Your Power Usage Overview</h2>
      <div className="graph-wrapper">
        <div className="y-axis-labels">
          {[0, maxPower/4, maxPower/2, maxPower*3/4, maxPower].map((value, index) => (
            <span key={index}>{Math.round(value)}W</span>
          ))}
        </div>
        <div className="graph">
          {powerData.map((data, index) => (
            <div key={index} className="graph-column">
              <div className="graph-line">
                <div 
                  className="graph-point" 
                  style={{ '--value': `${(data.power / maxPower) * 100}%` }}
                >
                  <span className="tooltip">{Math.round(data.power)}W</span>
                </div>
              </div>
              <div className="graph-label">{data.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Graph