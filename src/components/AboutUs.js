import React from 'react';
import about_us from '../assets/about_us.png'
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <section className="about-us" id="about-us">
            <div className="about-text">
                <h2>About Us</h2>
                <p>Foodimetrics presents data of different foods around the country and present them in a more relatable way to users.</p>
                <p>Foodimetrics is an important tool for both nutrition professionals and general public to identify nutrient composition of foods and their level of safety.</p>
                <Link to={"signup"}><button className="get-started-btn">Get Started</button></Link>
            </div>
            <div className="about-image">
                <img src={about_us} alt="About Us"/>
            </div>
      </section>
    );
}
 
export default About;