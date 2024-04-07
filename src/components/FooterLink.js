import React from 'react';
import logo from '../assets/logo.png';
import whatsapp from '../assets/whatsapp.svg';
import message from '../assets/messageremove.png';
import { Link } from 'react-router-dom';
import '../Pages/privacy.css'

const FooterLink = () => {
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
        <footer>
            <div className="footer-link">
                <div>
                    <Link to={'/'}>
                        <img src={logo} alt="logo" width={150} />
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/search">Search</a></li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/profile">Settings</a></li>
                    </ul>
                </nav>
                <div>
                    <p>
                        <a href={mailtoUrl}>
                            <img src={message} alt="email" />
                        </a>
                    </p>
                    <p>
                        <a
                            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(initialMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={whatsapp} alt="whatsapp" />
                        </a>
                    </p>
                </div>
            </div>
            <div className="privacy" id="privacy">
                <p>© Copyright 2024, All Rights Reserved</p>
                <div>
                    <p><a href="/privacy">Privacy & Policy</a></p>
                </div>
            </div>
        </footer>
    );
}
 
export default FooterLink;