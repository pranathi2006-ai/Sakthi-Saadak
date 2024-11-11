import React from 'react';
import { Home, Lightbulb, Thermometer, Droplets, Wind } from 'lucide-react';

const categories = [
  { id: 'insulation', name: 'Insulation', icon: Thermometer },
  { id: 'lighting', name: 'Lighting', icon: Lightbulb },
  { id: 'plumbing', name: 'Plumbing', icon: Droplets },
  { id: 'hvac', name: 'HVAC', icon: Wind },
  { id: 'structural', name: 'Structural', icon: Home }
];

function CategorySelector({ selectedCategory, onCategoryChange }) {
  return (
    <div className="mc-category-selector">
      {categories.map(category => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className={`mc-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
          >
            <Icon className="mc-category-icon" />
            <span>{category.name}</span>
          </button>
        );
      })}
    </div>
  );
}

export default CategorySelector;