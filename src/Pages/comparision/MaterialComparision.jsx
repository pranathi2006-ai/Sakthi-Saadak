import React, { useState } from 'react';
import ComparisonTable from './components/ComparisonTable';
import MaterialGrid from './components/MaterialGrid';
import ComparisonChart from './components/ComparisonChart';
import CategorySelector from './components/CategorySelector';
import { ArrowLeft } from 'lucide-react';
import './material-comparison.css';

function MaterialComparison() {
  const [selectedCategory, setSelectedCategory] = useState('insulation');
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [comparisonView, setComparisonView] = useState('table'); // 'table' or 'chart'

  const handleBack = () => {
    window.history.back();
  };

  const handleAddMaterial = (material) => {
    if (selectedMaterials.length < 4) {
      setSelectedMaterials([...selectedMaterials, material]);
    }
  };

  const handleRemoveMaterial = (materialId) => {
    setSelectedMaterials(selectedMaterials.filter(m => m.id !== materialId));
  };

  return (
    <div className="mc-container">
      <button onClick={handleBack} className="mc-back-button">
        <ArrowLeft className="mc-back-icon" />
        <span>Back</span>
      </button>

      <header className="mc-header">
        <h1>Material Comparison Tool</h1>
        <p>Compare different materials and make informed decisions for your sustainable home</p>
      </header>

      <CategorySelector 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory}
      />

      <div className="mc-view-controls">
        <button 
          className={`mc-view-btn ${comparisonView === 'table' ? 'active' : ''}`}
          onClick={() => setComparisonView('table')}
        >
          Table View
        </button>
        <button 
          className={`mc-view-btn ${comparisonView === 'chart' ? 'active' : ''}`}
          onClick={() => setComparisonView('chart')}
        >
          Chart View
        </button>
      </div>

      <div className="mc-main-content">
        <MaterialGrid 
          category={selectedCategory}
          onSelectMaterial={handleAddMaterial}
          selectedMaterials={selectedMaterials}
        />

        {comparisonView === 'table' ? (
          <ComparisonTable 
            materials={selectedMaterials}
            onRemoveMaterial={handleRemoveMaterial}
          />
        ) : (
          <ComparisonChart 
            materials={selectedMaterials}
          />
        )}
      </div>
    </div>
  );
}

export default MaterialComparison;