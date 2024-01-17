import React from 'react';
import './component.css'
import whatsapp from '../assets/whatsapp.svg';
import message from '../assets/messageremove.png';
import { data } from '../utils/data'

const Footer = () => {
  const email = 'foodimetric@gmail.com';
  const subject = 'Email to Foodimetric';
  const cc = 'follycube2020@gmail.com';
  const bcc = 'aderemioluwadamiola@gmail.com';
  const phoneNumber = '+2347085056806';
  const initialMessage = `Hi, I'm interested in your services and have some questions. Can you please provide more information?\n\nMy name is [Your Name].`;
  const body = `Dear Foodimetric,
  I hope this message finds you well. I am reaching out to [briefly describe the purpose of your inquiry or reason for contacting the company].

  [Provide more details about your inquiry or the information you're seeking].

  You can contact me at the following details:
  - Name: [Your Name]
  - Email: [Your Email Address]
  - Phone: [Your Phone Number]

  Thank you for your time and attention. I look forward to your response.

  Sincerely,
  [Your Name]
  `;

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&cc=${encodeURIComponent(cc)}&bcc=${encodeURIComponent(bcc)}&body=${encodeURIComponent(body)}`;

  return (
    <footer className="footer">
      <div className="footer-contact">
        <h4>Contact Us</h4>
        <ul>
          <li>
            <img src={message} alt="email" /> <a href={mailtoUrl}>foodimetric@gmail.com</a>
          </li>
          <li>
            <img src={whatsapp} alt="whatsapp" />
            <a
              href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(initialMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              +2347085056806
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-resources">
        <h4>Resources</h4>
        <ul>
          {data.map((datum) => (
            <li key={datum.id}>
              <a href={datum.link} target="_blank" rel="noopener noreferrer">
                {datum.title}
              </a>
            </li>
          ))}
        </ul>

      </div>
      <div className="footer-socials">
        <h4>Socials</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/p/CzYXNuTIhqx/?igshid=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>

          </li>
          {/* <li>
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
          </li> */}
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
