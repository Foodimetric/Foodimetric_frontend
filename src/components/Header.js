import React, { useState, useEffect } from 'react';
import './component.css';
import logo from '../assets/logo.svg'
import { Link, Outlet } from 'react-router-dom';

export function headerLoader (){
  return "folake"

}
const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isMobile ? 'mobile' : ''} ${isFixed ? 'fixed' : ''}`}>
      <div className="container_box">
        <div className="container-img">
          <Link to={"/"}><img src={logo} width="30px" alt="Logo" /></Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            {isMobile && <h3>"Fuel your body, fuel the economy: the power of nutrition"</h3>}
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#resources-container">Resources</a>
            </li>
            <li>
              <a href="#faq-section">FAQs</a>
            </li>
          </ul>
        </nav>
        <button><Link to={"signup"} style={{ textDecoration: 'none', color: 'inherit' }}>Get Started</Link></button>
      </div>
      <Outlet />
    </header>
  );
};

export default Header;
