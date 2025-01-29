import React from 'react';
import Footer from '../Components/Footer/Footer';
import HeaderLink from '../Components/Headers/HeaderLink'

const Privacy = () => {
    return (
        <div>
            <HeaderLink />
            <div className="container mx-auto px-4 py-8 text-gray-800">
                <h1 className="text-4xl font-bold text-center mb-6">Privacy Policy for Foodimetric</h1>
                <p className="text-center mb-8 text-sm text-gray-600">
                    Effective date: April 1, 2024
                </p>

                <section className="mb-6">
                    <p>
                        Welcome to Foodimetric ("us", "we", or "our"). We are committed to protecting your
                        personal information and your right to privacy. If you have any questions or concerns
                        about our policy, or our practices with regards to your personal information, please
                        contact us at <a href="mailto:foodimetric@gmail.com" className="text-blue-600 underline">foodimetric@gmail.com</a>.
                    </p>
                    <p>
                        This Privacy Policy applies to all information collected through our website
                        (<a href="https://www.foodimetric.com" className="text-blue-600 underline">www.foodimetric.com</a>),
                        and/or any related services, sales, marketing or events (we refer to them collectively in this
                        Privacy Policy as the "Services").
                    </p>
                    <p>
                        Please read this Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-medium mb-2">1.1. Personal Information:</h3>
                    <p>
                        We collect personal information that you voluntarily provide to us when registering on
                        the Services, expressing an interest in obtaining information about us or our products
                        and services, participating in activities on the Services, or otherwise contacting us.
                    </p>
                    <ul className="list-disc ml-6 mt-2">
                        <li>
                            <strong>Personal Information Provided by You:</strong> Includes name, email address,
                            phone number, address, payment information, etc.
                        </li>
                        <li>
                            <strong>Credentials:</strong> Includes passwords, password hints, and similar security information.
                        </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-4 mb-2">1.2. Information Automatically Collected:</h3>
                    <p>
                        This includes device and usage information, such as your IP address, browser and device
                        characteristics, and other technical data needed for security and analytics.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                    <ul className="list-disc ml-6">
                        <li>To facilitate account creation and logon process.</li>
                        <li>To send marketing and promotional communications.</li>
                        <li>To respond to inquiries and offer support.</li>
                        <li>To process transactions and improve our Services.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">3. How We Share Your Information</h2>
                    <p>We share your information only under the following circumstances:</p>
                    <ul className="list-disc ml-6">
                        <li>With your consent.</li>
                        <li>To comply with laws.</li>
                        <li>To protect our rights.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
                    <p>
                        We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
                    <ul className="list-disc ml-6">
                        <li>Request access to your personal information.</li>
                        <li>Request correction or deletion of your personal information.</li>
                        <li>Object to our use and processing of your personal information.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">6. Changes to This Privacy Policy</h2>
                    <p>
                        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
                    <p>
                        If you have any questions or suggestions about our Privacy Policy, contact us at
                        <a href="mailto:foodimetric@gmail.com" className="text-blue-600 underline"> foodimetric@gmail.com</a>.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                    <p>
                        The information on this website is for informational purposes only and is not intended as a substitute
                        for professional medical advice. Always consult a registered dietitian for questions regarding your diet.
                    </p>
                    <p>Last updated: April 7, 2024</p>
                </section>

            </div>
            <Footer />
        </div>
    );
};

export default Privacy;
