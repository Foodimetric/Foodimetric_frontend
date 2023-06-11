import React from 'react';
import './component.css'
import whatsapp from '../assets/whatsapp.svg';
import message from '../assets/messageremove.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <img src={message} alt="email" /> info@example.com
          </li>
          <li>
            <img src={whatsapp} alt="email" />+1 123-456-7890
          </li>
        </ul>
      </div>
      <div className="footer-resources">
        <h4>Resources</h4>
        <ul>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Newsletter</a>
          </li>
          <li>
            <a href="#">Articles</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
        </ul>
      </div>
      <div className="footer-socials">
        <h4>Socials</h4>
        <ul>
          <li>
            <a href="#">
              <i className="fab fa-instagram"></i>Instagram
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-linkedin"></i>Linkedin
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-facebook"></i>Facebook
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-menu">
        <h4>Menu</h4>
        <ul>
          <li>
            <a href="#">Home</a>
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
      </div>
    </footer>
  );
};

export default Footer;
