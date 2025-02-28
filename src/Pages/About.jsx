import React from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import AboutUs from '../Components/sections/About';
import Footer from '../Components/Footer/Footer'
import Faq from '../Components/sections/Faq';
import Team from '../Components/sections/Team';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Foodimetric - AI-Powered Nutrition & Health Insights</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <HeaderLink />
            <main>
                <AboutUs padding={'20px'} />
                <Team />
                <Faq />
            </main>
            <Footer />

        </>
    );
}

export default About;