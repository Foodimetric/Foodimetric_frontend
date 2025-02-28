import React from 'react';
import Footer from '../Components/Footer/Footer';
import HeaderLink from '../Components/Headers/HeaderLink'
import { Helmet } from 'react-helmet-async';
const Terms = () => {
    return (
        <div>
            <Helmet>
                <title>Terms of Service | Foodimetric User Agreement</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <HeaderLink />
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p className="mb-4">Effective Date: April 1, 2024</p>

                <p className="mb-4">
                    Welcome to Foodimetric ("we", "our", or "us"). By using our website (www.foodimetric.com) and services (collectively referred to as the "Services"), you agree to comply with and be bound by these Terms of Service. Please read them carefully.
                </p>

                <h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
                <p className="mb-4">
                    By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you may not access or use the Services.
                </p>

                <h2 className="text-2xl font-bold mb-2">2. Changes to Terms</h2>
                <p className="mb-4">
                    We may update these Terms from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. It is your responsibility to review these Terms regularly. Your continued use of the Services constitutes your acceptance of any changes.
                </p>

                <h2 className="text-2xl font-bold mb-2">3. Use of Services</h2>
                <p className="mb-4">
                    You agree to use the Services only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for your own conduct and activities on the platform.
                </p>

                <h2 className="text-2xl font-bold mb-2">4. Intellectual Property</h2>
                <p className="mb-4">
                    All content on the Services, including but not limited to text, graphics, logos, and software, is the property of Foodimetric or its licensors and is protected by intellectual property laws. You may not use, copy, or distribute any content without our prior written permission.
                </p>

                <h2 className="text-2xl font-bold mb-2">5. User Accounts</h2>
                <p className="mb-4">
                    To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.
                </p>

                <h2 className="text-2xl font-bold mb-2">6. Limitation of Liability</h2>
                <p className="mb-4">
                    To the fullest extent permitted by law, Foodimetric shall not be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages arising from your use of the Services.
                </p>

                <h2 className="text-2xl font-bold mb-2">7. Termination</h2>
                <p className="mb-4">
                    We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any reason, including violation of these Terms.
                </p>

                <h2 className="text-2xl font-bold mb-2">8. Governing Law</h2>
                <p className="mb-4">
                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.
                </p>

                <h2 className="text-2xl font-bold mb-2">9. Contact Us</h2>
                <p className="mb-4">
                    If you have any questions about these Terms, please contact us at <a href="mailto:foodimetric@gmail.com" className="text-blue-500 underline">foodimetric@gmail.com</a>.
                </p>

                <p className="mt-6 text-sm text-gray-500">
                    By using the Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.
                </p>
            </div>
            <Footer />
        </div>

    );
};

export default Terms;
