import React from 'react';
import { Outlet, useLocation } from 'react-router';
import AntroNav from '../../Components/Nav/AntroNav';
import AntroHeader from '../../Components/Headers/AntroHeader';

const AnthroLayout = () => {
    const location = useLocation();
    const pageTitle = getPageTitle(location.pathname);

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

    return (
        <main className='flex max-h-screen'>
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
            </div>
        </main>
    )
}

export default AnthroLayout;