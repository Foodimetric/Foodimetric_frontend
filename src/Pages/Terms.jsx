import React from 'react';
import Footer from '../Components/Footer/Footer';
import HeaderLink from '../Components/Headers/HeaderLink';
import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
    const sections = [
        { id: 'introduction', title: 'Introduction', content: 'Welcome to Foodimetric ("we", "our", or "us"). By using our website (www.foodimetric.com) and services (collectively referred to as the "Services"), you agree to comply with and be bound by these Terms of Service. Please read them carefully.' },
        { id: 'user-agreement', title: 'Acceptance of Terms', content: 'By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you may not access or use the Services.' },
        { id: 'changes-to-terms', title: 'Changes to These Terms', content: 'We may update these Terms from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated. It is your responsibility to review these Terms regularly. Your continued use of the Services constitutes your acceptance of any changes.' },
        { id: 'account-responsibilities', title: 'User Accounts', content: 'To access certain features, you may need to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately of any unauthorized use of your account.' },
        { id: 'prohibited-activities', title: 'Use of Services', content: 'You agree to use the Services only for lawful purposes and in compliance with all applicable laws and regulations. You are responsible for your own conduct and activities on the platform.' },
        { id: 'intellectual-property', title: 'Intellectual Property', content: 'All content on the Services, including but not limited to text, graphics, logos, and software, is the property of Foodimetric or its licensors and is protected by intellectual property laws. You may not use, copy, or distribute any content without our prior written permission.' },
        { id: 'limitation-liability', title: 'Limitation of Liability', content: 'To the fullest extent permitted by law, Foodimetric shall not be liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages arising from your use of the Services.' },
        { id: 'termination', title: 'Termination of Services', content: 'We reserve the right to suspend or terminate your access to the Services at any time, without notice, for any reason, including violation of these Terms.' },
        { id: 'governing-law', title: 'Governing Law', content: 'These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles.' },
        { id: 'medical-disclaimer', title: 'Medical Disclaimer', content: "The nutrition data provided by Foodimetric is for informational purposes only. It should not be considered medical advice or a substitute for professional consultation with a healthcare provider. Always seek professional interpretation of nutrition data and consult a qualified healthcare professional before making any dietary or health-related decisions." },
        { id: 'contact-us', title: 'Contact Us', content: 'If you have any questions about these Terms, please contact us at foodimetric@gmail.com.' }
    ];

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <HeaderLink />
            <Helmet>
                <title>Terms of Service | Foodimetric Usage Agreement</title>
                <meta name="description" content="Review the terms and conditions for using Foodimetric's services." />
            </Helmet>
            <div className="container xs:w-[90%] xs:max-w-[85%] sm:container mx-auto py-12 lg:py-16 flex">
                {/* Table of Contents */}
                <aside className="hidden lg:block w-1/4 pr-8">
                    <nav className="sticky top-20">
                        <h2 className="text-xl font-semibold mb-4 font-base-font">Table of Contents</h2>
                        <ul className="space-y-2">
                            {sections.map(section => (
                                <li key={section.id}>
                                    <a href={`#${section.id}`} className="font-base-font text-gray-600 hover:underline">
                                        {section.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                {/* Main Content */}
                <main className="w-full lg:w-3/4 bg-white p-8 shadow-lg rounded-lg font-heading-font">
                    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Terms of Service</h1>
                    <p className="text-center text-sm text-gray-500 mb-8">Effective Date: April 1, 2024</p>

                    {sections.map(section => (
                        <section id={section.id} key={section.id} className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                            <p className="text-gray-700 leading-relaxed">{section.content}</p>
                        </section>
                    ))}

                    <p className="text-yellow-700 leading-relaxed mt-4">Last updated: March 7, 2025</p>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default TermsOfService;