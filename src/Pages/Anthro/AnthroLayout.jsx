import React from 'react';
import { Outlet, useLocation } from 'react-router';
import AntroNav from '../../Components/Nav/AntroNav';
import AntroHeader from '../../Components/Headers/AntroHeader';
import { useAuth } from '../../Context/AuthContext';
import { Helmet } from 'react-helmet-async';

const AnthroLayout = () => {
    const { user } = useAuth()
    const location = useLocation();

    const pageTitle = getPageTitle(location.pathname);
    const formulaName = getFormulaName(location.pathname);


    console.log(user);

    function getPageTitle(pathname) {
        switch (pathname) {
            case '/anthro/BMI':
                return 'Body Mass Index';
            case '/anthro/IBW':
                return 'Ideal Body Weight';
            case '/anthro/WHR':
                return 'Waist to Hip Ratio';
            case '/anthro/BMI-age':
                return 'BMI for Age';
            case '/anthro/BMR':
                return 'Basal Metabolic Rate';
            case '/anthro/EER':
                return 'Estimated Energy Requirement';
            case '/anthro/EE':
                return 'Energy Expenditure';
            case '/anthro/Weight-age':
                return 'Weight for Age';
            case '/anthro/Height-age':
                return 'Height for Age';
            case '/anthro/Weight-Height':
                return 'Weight for Height';
            case '/anthro/Water-intake':
                return 'Water Intake Recommendation';
            default:
                return 'Anthropometry';  // Or 'Anthropometry' as a default for anything under '/anthro'
        }
    }

    function getFormulaName(pathname) {
        switch (pathname) {
            case '/anthro/BMI': return 'Body Mass Index Formula';
            case '/anthro/IBW': return 'B. J. Devine Formula (1974)';
            case '/anthro/WHR': return 'Waist to Hip Ratio Formula';
            case '/anthro/BMI-age': return 'BMI for Age Formula';
            case '/anthro/BMR': return 'Revised Harris-Benedict Equation';
            case '/anthro/EER': return 'Estimated Energy Requirement Formula';
            case '/anthro/EE': return 'Mifflin-St Jeor Equation';
            case '/anthro/Weight-age': return 'Weight for Age Formula';
            case '/anthro/Height-age': return 'Height for Age Formula';
            case '/anthro/Weight-Height': return 'Weight for Height Formula';
            case '/anthro/Water-intake': return 'Water Intake Recommendation Formula';
            default: return null;
        }
    }

    return (
        <main className='flex max-h-screen'>
            <Helmet>
                <title>Track your health and Find Your Body Mass Index | Foodimetric</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <div className=''>
                <AntroNav />
            </div>
            <div className='ml-60 max-h-screen overflow-auto max-w-6xl w-[100vw] mx-auto xs:ml-0 md:ml-60'>
                <AntroHeader title={pageTitle} />
                <div className='bg-gray-100'>
                    <div className='px-8 pt-16 '>
                        <Outlet />
                    </div>
                </div>
                <footer className="bg-gray-200 text-center text-gray-700 text-sm py-4 mt-8 font-base-font">
                    Formula: {formulaName}
                </footer>
            </div>
        </main>
    )
}

export default AnthroLayout;