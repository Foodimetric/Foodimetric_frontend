import { useState, useEffect } from 'react';
import './component.css';
import logo from '../assets/logo.png'
import { Link, Outlet } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ProfileTab from './Profile';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, status} = useAuthContext();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen, user]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleRedirect = () => {
    const bearer = JSON.parse(localStorage.getItem("Foodie-token"));
    if (!bearer) {
      toast.error('Kindly login', {
        duration: 3000,
        icon: <img src="img/loadingError.svg" alt='error' />,
        id: 'clipboard',
        style: {
          fontSize: '0.8rem',
        },
      });
      return
    }
  }

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
            <div className='mobile'>
              <ProfileTab/>
            </div>
            {isMobile && <h3>"Fuel your body, fuel the economy: the power of nutrition"</h3>}
            {/* <li>
              <Link to={"/"}>Home</Link>
            </li> */}
            <li onClick={() => handleRedirect()}>
              <Link smooth to={"search"}>Search</Link>
            </li>
            <li>
              <HashLink smooth to="/#resources-container">Resources</HashLink>
            </li>
            <li>
              <HashLink smooth to='/#about-us' > About Us </HashLink>
            </li>
            <li>
              <HashLink smooth to='/#contact-us' > Contact Us </HashLink>
            </li>
            {/* <li>
              <HashLink  smooth to={"alt"}>Food</HashLink>
            </li> */}
          </ul>
        </nav>
        <div className='third-child'>
          {status === 'authenticated' && (
            <div className='desktop'>
              <ProfileTab/>
            </div>
          )}
          {(status === 'loading' || status === 'unauthenticated') && (<button><Link to={"signup"} style={{ textDecoration: 'none', color: 'inherit' }}>Get Started</Link></button>)}
        </div>
      </div>
      <Toaster />
      <Outlet />
    </header>
  );
};

export default Header;
