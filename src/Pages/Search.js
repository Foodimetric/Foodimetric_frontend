import React, { useEffect } from 'react';
import './pages.css'
import ByFood from '../components/ByFood'
import BodyMassIndex from '../components/Bmi'
import FoodResult from '../Results/FoodResult';
import NutrientResult from '../Results/NutrientResult';
import MultiFoodResult from '../Results/MultiFoodResult';
import MultiNutrient from '../Results/MultiNutrient'
import ByNutrient from '../components/ByNutrient';
import MultiFood from '../components/MultiFood';
import MultiNutrientComponent from '../components/MultiNutrient';
import { useNavigate } from 'react-router-dom';
import { useTabs } from '../utils/useTabs';

const SearchTab = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      title: 'Search for Food',
      content: <ByFood/>,
      result: () => <FoodResult/>
    },
    {
      title: 'Search for Nutrient',
      content: <ByNutrient/>,
      result: () => <NutrientResult/>
    },
    {
      title: 'Multi-Food Search',
      content: <MultiFood />,
      result: () => <MultiFoodResult />
    },
    {
      title: 'Multi-Nutrient Search',
      content: <MultiNutrientComponent />,
      result: () => <MultiNutrient/>
    },
    {
      title: 'BMI Calculator',
      content: <BodyMassIndex />,
      result: null // No result function needed
    }
  ];
  
  const { activeTab, handleTabClick, renderTabContent, renderTabResult,  } = useTabs(0, tabs);

  useEffect(() => {
    const bearer = JSON.parse(localStorage.getItem("Foodie-token"));
    if (!bearer) navigate('/login');
  }, [navigate]);

  return (
    <div className="tab-page">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? 'active' : ''}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <div>
        {renderTabResult()}
      </div>
    </div>
  );
};

export default SearchTab;
