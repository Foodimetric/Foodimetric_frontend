import React from 'react';
import './privacy.css';
import FooterLink from '../components/FooterLink';

const Privacy = () => {
    
    return (
        <div className='privacy-page'>
            <main className="privacy-content">
                <h2>Privacy Policy for Foodimetric</h2>

                <p><strong>Effective date:</strong> April 1, 2024</p>

                <p>Welcome to Foodimetric ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at <a href="mailto:foodimetric@gmail.com">foodimetric@gmail.com</a>.</p>

                <p>This Privacy Policy applies to all information collected through our website (<a href="http://www.foodimetric.com">www.foodimetric.com</a>), and/or any related services, sales, marketing or events (we refer to them collectively in this Privacy Policy as the "Services").</p>

                <p>Please read this Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>

                <h3 className="section-heading">1. Information We Collect</h3>

                <h4 className="subsection-heading">1.1. Personal Information:</h4>
                <p>We collect personal information that you voluntarily provide to us when registering on the Services, expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us. The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>

                <ul>
                    <li>Personal Information Provided by You: You may provide us with certain personally identifiable information when you register for an account, make a purchase, fill out a form, leave a comment, or send us an email. This may include your name, email address, phone number, address, payment information, and other similar information.</li>
                    <li>Credentials: We may collect passwords, password hints, and similar security information used for authentication and account access.</li>
                </ul>

                <h4 className="subsection-heading">1.2. Information Automatically Collected:</h4>
                <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

                <h3 className="section-heading">2. How We Use Your Information</h3>

                <p>We use the information we collect or receive:</p>

                <ul>
                    <li>To facilitate account creation and logon process.</li>
                    <li>To send you marketing and promotional communications.</li>
                    <li>To respond to inquiries and offer support.</li>
                    <li>To enhance and personalize your experience on the Services.</li>
                    <li>To process transactions.</li>
                    <li>To improve our Services.</li>
                    <li>To monitor and analyze usage trends.</li>
                    <li>To detect, prevent and address technical issues.</li>
                </ul>

                <h3 className="section-heading">3. How We Share Your Information</h3>

                <p>We may share your information with third parties only in the following circumstances:</p>

                <ul>
                    <li>With your consent.</li>
                    <li>To comply with laws.</li>
                    <li>To protect our rights.</li>
                </ul>

                <h3 className="section-heading">4. Data Retention</h3>

                <p>We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.</p>

                <h3 className="section-heading">5. Your Rights</h3>

                <p>You have the right to:</p>

                <ul>
                    <li>Request access to your personal information.</li>
                    <li>Request correction or deletion of your personal information.</li>
                    <li>Object to our use and processing of your personal information.</li>
                </ul>

                <h3 className="section-heading">6. Changes to This Privacy Policy</h3>

                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                <h3 className="section-heading">7. Contact Us</h3>

                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:contact@foodimetric.com">foodimetric@gmail.com</a>.</p>

                <p>By using our Services, you consent to our Privacy Policy and agree to its terms.</p>

                <p><strong>Last updated:</strong> April 7, 2024</p>

                <h3 className="section-heading">Disclaimer:</h3>

                <p>The information, including but not limited to, text, graphics, images and other material contained on this website are for informational purposes only. No information on this site is intended to be a substitute for professional medical advice, diagnosis or treatment. Always consult a registered dietitian with any questions you may have regarding your diet modification and before undertaking a new diet regimen. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
            </main>
            <FooterLink/>
        </div>
    );
}

export default Privacy;