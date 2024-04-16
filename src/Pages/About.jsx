import React from 'react';
import HeaderLink from '../Components/Headers/HeaderLink';
import AboutUs from '../Components/sections/About';
import Footer from '../Components/Footer/Footer'
import Faq from '../Components/sections/Faq';
import Team from '../Components/sections/Team';

const About = () => {
    return (
        <>
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