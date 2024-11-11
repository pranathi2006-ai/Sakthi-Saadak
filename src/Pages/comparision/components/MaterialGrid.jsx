import React from 'react';
import { Plus, Check } from 'lucide-react';

const materialData = {
  insulation: [
    { id: 'fiberglass', name: 'Fiberglass', rValue: 3.7, cost: 0.64, eco: 7 },
    { id: 'cellulose', name: 'Cellulose', rValue: 3.5, cost: 0.55, eco: 9 },
    { id: 'mineral-wool', name: 'Mineral Wool', rValue: 3.8, cost: 0.95, eco: 8 },
    { id: 'spray-foam', name: 'Spray Foam', rValue: 6.5, cost: 1.25, eco: 6 }
  ],
  lighting: [
    { id: 'led', name: 'LED Bulbs', watts: 9, lifespan: 25000, cost: 8 },
    { id: 'cfl', name: 'CFL Bulbs', watts: 14, lifespan: 10000, cost: 3 },
    { id: 'halogen', name: 'Halogen', watts: 43, lifespan: 2000, cost: 5 },
    { id: 'smart-led', name: 'Smart LED', watts: 9, lifespan: 25000, cost: 15 }
  ],
  // Add more categories as needed
};

function MaterialGrid({ category, onSelectMaterial, selectedMaterials }) {
  const materials = materialData[category] || [];

  const isSelected = (materialId) => {
    return selectedMaterials.some(m => m.id === materialId);
  };

  return (
    <div className="mc-grid">
      {materials.map(material => (
        <div key={material.id} className="mc-grid-item">
          <div className="mc-material-card">
            <h3>{material.name}</h3>
            <div className="mc-material-specs">
              {Object.entries(material).map(([key, value]) => {
                if (key !== 'id' && key !== 'name') {
                  return (
                    <div key={key} className="mc-spec">
                      <span className="mc-spec-label">{key}</span>
                      <span className="mc-spec-value">{value}</span>
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <button
              className={`mc-select-btn ${isSelected(material.id) ? 'selected' : ''}`}
              onClick={() => onSelectMaterial(material)}
              disabled={isSelected(material.id)}
            >
              {isSelected(material.id) ? (
                <><Check /> Selected</>
              ) : (
                <><Plus /> Compare</>
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MaterialGrid;