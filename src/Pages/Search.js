import React, { useState, useEffect } from 'react';
import './pages.css'
import ByFood from '../components/ByFood'
import BodyMassIndex from '../components/Bmi'
import FoodResult from '../Results/FoodResult';
import NutrientResult from '../Results/NutrientResult';
import MultiFoodResult from '../Results/MultiFoodResult';
import MultiNutrient from '../Results/MultiNutrient'
import { fetchData } from '../utils/fetchfood';
import { useQuery } from '@tanstack/react-query';
import ByNutrient from '../components/ByNutrient';
import MultiFood from '../components/MultiFood';
import MultiNutrientComponent from '../components/MultiNutrient';
import { useNavigate } from 'react-router-dom';


const SearchTab = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [FoodResults, setFoodResults] = useState({});
  const [nutrientResult, setNutrientResult] = useState({});
  const [multiFoodResults, setMultiFoodResults] = useState([]);
  const [selectedValue, setSelectedValue] = useState("100");
  const [multiNutrientResult, setMultiNutrientResult] = useState([]);
  const { data, isLoading, isError } = useQuery(["foods"], fetchData)
  const tabs = [
    { title: 'Search for Food', content: <ByFood searchfood={"Search Food"} foodcategory={"Quantity(g)"} weight={"Category"} data={data} render={true} setFood={setFoodResults} setSelectedValue={setSelectedValue} selectedValue={selectedValue}/> },
    { title: 'Search for Nutrient', content: <ByNutrient searchfood={"Search Nutrient"} foodcategory={"Nutrient quantity"} weight={"Food"} render={true} data={data} setNutrientResult={setNutrientResult} nutrientResult={nutrientResult} /> },
    { title: 'Multi-Food Search', content: <MultiFood searchfood={"Search Multiple Food"} foodcategory={"Weight"} render={false} data={data} setResult={setMultiFoodResults} /> },
    { title: 'Multi-Nutrient Search', content: <MultiNutrientComponent searchnutrient={"Nutrients"} quantities={"Nutrient quantities"} food={"Food"} data={data} render={true} setMultiNutrientResult={setMultiNutrientResult} /> },
    { title: 'BMI Calculator', content: <BodyMassIndex /> },

  ];

  useEffect(() => {
    const bearer = JSON.parse(localStorage.getItem("Foodie-token"));
    if (!bearer) {
      navigate('/login');
      return
    }

  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const renderResult = () => {
    switch (tabs[activeTab].title) {
      case 'Search for Food':
        return <FoodResult data={FoodResults.details} selectedValue={selectedValue} />;
      case 'Search for Nutrient':
        return <NutrientResult result={nutrientResult} />;
      case 'Multi-Food Search':
        return <MultiFoodResult result={multiFoodResults} />;
      case 'Multi-Nutrient Search':
        return <MultiNutrient result={multiNutrientResult} />
      default:
        // Add default case or return null if no specific component is needed
        return null;
    }
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
        {/* <button className='current_tab'>{tabs[activeTab].title}</button> */}
        <div>{tabs[activeTab].content}</div>
      </div>
      <div>
        {renderResult()}
      </div>
    </div>
  );
};

export default SearchTab;
