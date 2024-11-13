import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateMonthlyCosts = () => {
  return Array.from({ length: 12 }, () => ({
    energy: Math.floor(Math.random() * 100) + 50,
    predicted: Math.floor(Math.random() * 100) + 50
  }));
};

function CostAnalysisChart({ dateRange }) {
  const monthlyData = generateMonthlyCosts();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Actual Cost ($)',
        data: monthlyData.map(d => d.energy),
        backgroundColor: '#0eff85',
      },
      {
        label: 'Predicted Cost ($)',
        data: monthlyData.map(d => d.predicted),
        backgroundColor: 'rgba(14, 255, 133, 0.3)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#fff'
        }
      }
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: '#fff'
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
}

export default CostAnalysisChart