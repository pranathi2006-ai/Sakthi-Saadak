import React from 'react';

function DateRangePicker({ onSelect }) {
  const ranges = [
    { id: 'week', label: 'Last 7 Days' },
    { id: 'month', label: 'Last 30 Days' },
    { id: 'quarter', label: 'Last 3 Months' },
    { id: 'year', label: 'Last 12 Months' }
  ];

  return (
    <div className="date-picker-dropdown">
      {ranges.map(range => (
        <button
          key={range.id}
          className="date-range-option"
          onClick={() => onSelect(range.id)}
        >
          {range.label}
        </button>
      ))}
    </div>
  );
}

export default DateRangePicker;