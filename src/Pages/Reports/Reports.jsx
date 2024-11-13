import React, { useState } from 'react';
import { ArrowLeft, Download, Calendar } from 'lucide-react';
import EnergyUsageChart from './components/EnergyUsageChart.jsx';
import CostAnalysisChart from './components/CostAnalysisChart.jsx';
import ComparisonStats from './components/ComparsionStats.jsx';
import DateRangePicker from './components/DateRangePicker.jsx';
import './Reports.css';

function Reports() {
  const [dateRange, setDateRange] = useState('month');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleBack = () => {
    window.history.back();
  };

  const handleExport = () => {
    console.log('Exporting reports...');
  };

  return (
    <div className="reports-container">
      <nav className="reports-nav">
        <button onClick={handleBack} className="back-btn">
          <ArrowLeft className="icon" />
          <span>Back</span>
        </button>
        <button onClick={handleExport} className="export-btn">
          <Download className="icon" />
          <span>Export Report</span>
        </button>
      </nav>

      <header className="reports-header">
        <h1>Energy Usage Reports</h1>
        <div className="date-range-selector">
          <button 
            className="date-picker-btn"
            onClick={() => setShowDatePicker(!showDatePicker)}>
            <Calendar className="icon" />
            <span>Select Date Range</span>
          </button>
          {showDatePicker && (
            <DateRangePicker 
              onSelect={(range) => {
                setDateRange(range);
                setShowDatePicker(false);
              }}
            />
          )}
        </div>
      </header>

      <div className="reports-grid">
        <section className="chart-section">
          <h2>Energy Consumption Over Time</h2>
          <EnergyUsageChart dateRange={dateRange} />
        </section>

        <section className="chart-section">
          <h2>Cost Analysis</h2>
          <CostAnalysisChart dateRange={dateRange} />
        </section>

        <section className="stats-section">
          <h2>Comparison Statistics</h2>
          <ComparisonStats dateRange={dateRange} />
        </section>
      </div>
    </div>
  );
}

export default Reports