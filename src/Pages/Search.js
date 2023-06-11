import React, { useState } from 'react';
import './pages.css'
import ByFood from '../components/ByFood'


export function searchLoader (){
  return "folake"

}
const SearchTab = () => {
  const tabs = [
    { title: 'Search for Food', content: <ByFood searchfood={"Search Food"} foodcategory={"Food Category"} weight={"Weight"} foodgroup={"Food Group"}/> },
    { title: 'Search for Nutrient', content: <ByFood searchfood={"Search Nutrient"} foodcategory={"Food Category"} weight={"Calorie"} foodgroup={"Food Group"}/>},
    { title: 'Multi-Food Search', content: <ByFood searchfood={"Search Multiple Food"} foodcategory={"Food Category"} weight={"Weight"} foodgroup={"Food Group"}/> },
    { title: 'Multi-Nutrient Search', content: <ByFood searchfood={"Search Multiple Nutrient"} foodcategory={"Food Category"} weight={"Calories"} foodgroup={"Food Group"}/> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

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
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
};

export default SearchTab;
