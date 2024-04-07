import React, { useEffect } from 'react';
import './pages.css'
import './privacy.css'
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
import Tooltip from '@mui/material/Tooltip'
import FooterLink from '../components/FooterLink';

const SearchTab = () => {
  const navigate = useNavigate();
  const tabs = [
    {
      title: 'Food Search',
      content: <ByFood />,
      result: () => <FoodResult />
    },
    {
      title: 'Nutrient Search',
      content: <ByNutrient />,
      result: () => <NutrientResult />
    },
    {
      title: 'Multi-Food Search',
      content: <MultiFood />,
      result: () => <MultiFoodResult />
    },
    {
      title: 'Multi-Nutrient Search',
      content: <MultiNutrientComponent />,
      result: () => <MultiNutrient />
    },
    {
      title: 'BMI Calculator',
      content: <BodyMassIndex />,
      result: null // No result function needed
    }
  ];

  const { activeTab, handleTabClick, renderTabContent, renderTabResult, } = useTabs(0, tabs);

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
            <span>
              {tab.title}
            </span>
            {tab.title === 'Multi-Food Search' && <Tooltip title="Search for more than one food">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className='tips'>
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
              </svg>
            </Tooltip>
            }
            {tab.title === 'Multi-Nutrient Search' && <Tooltip title="Search for more than one nutrient">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30" className='tips'>
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16,21h-2v-7h2V21z M15,11.5 c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,11.5,15,11.5z"></path>
              </svg>
            </Tooltip>
            }
          </button>
        ))}
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
      <div>
        {renderTabResult()}
      </div>
      <FooterLink/>
    </div>
  );
};

export default SearchTab;
