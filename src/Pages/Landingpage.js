import React from 'react';
import Hero from '../components/Hero';
import Partner from '../components/Partner';
import Features from '../components/Features';
import Easy from '../components/Easy';
import About from '../components/AboutUs';
import Resources from '../components/Resources';
import Faq from '../components/Faq';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { FOODIMETRIC_HOST_URL } from '../utils/getData';


const LandingPage = () => {
    const response = async () => {
        const request = await fetch(FOODIMETRIC_HOST_URL, {
            method: "GET"
        })
        const data = await request.json();
        console.log(data);
    }
    return (
        <>
            <Hero />
            <Partner />
            <Features />
            <Easy />
            <About />
            <Resources />
            <Faq />
            <Newsletter />
            <Footer />
        </>
    );
}

export default LandingPage;