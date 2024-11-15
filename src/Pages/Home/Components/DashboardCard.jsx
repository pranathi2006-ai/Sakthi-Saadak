import React from 'react';

function DashboardCard({ icon: Icon, title, description, onClick, index }) {
  return (
    <div 
      className="dashboard-card fade-in" 
      onClick={onClick}
      style={{ '--index': index }}
    >
      <div className="card-icon">
        <Icon size={48} />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default DashboardCard;