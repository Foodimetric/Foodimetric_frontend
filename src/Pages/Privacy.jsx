import React from 'react';
import Footer from '../Components/Footer/Footer';
import HeaderLink from '../Components/Headers/HeaderLink';
import { Helmet } from 'react-helmet-async';

const Privacy = () => {
    const sections = [
        { id: 'introduction', title: 'Introduction' },
        { id: 'information-we-collect', title: 'Information We Collect' },
        { id: 'how-we-use-information', title: 'How We Use Your Information' },
        { id: 'how-we-share-information', title: 'How We Share Your Information' },
        { id: 'data-retention', title: 'Data Retention' },
        { id: 'your-rights', title: 'Your Rights' },
        { id: 'changes-to-policy', title: 'Changes to This Privacy Policy' },
        { id: 'contact-us', title: 'Contact Us' },
        { id: 'disclaimer', title: 'Disclaimer' },
    ];

    return (
        <div className="bg-gray-50 min-h-screen text-gray-800">
            <HeaderLink />
            <Helmet>
                <title>Privacy Policy | How Foodimetric Protects Your Data</title>
                <meta name="description" content="Learn how Foodimetric safeguards your personal information and maintains your privacy." />
            </Helmet>
            <div className="container mx-auto py-12 lg:py-16 flex">
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
                    <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-6">Privacy Policy</h1>
                    <p className="text-center text-sm text-gray-500 mb-8">Effective Date: April 1, 2024</p>

                    <section id="introduction" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Welcome to Foodimetric ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, please contact us at foodimetric@gmail.com.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-4">
                            This Privacy Policy applies to all information collected through our website (www.foodimetric.com) and related services, sales, marketing, or events ("Services").
                        </p>
                    </section>

                    <section id="information-we-collect" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
                        <ul className="space-y-3">
                            <li className="bg-gray-100 p-4 rounded-lg"><strong>Personal Information:</strong> Name, email, phone number, address, payment information, etc.</li>
                            <li className="bg-gray-100 p-4 rounded-lg"><strong>Credentials:</strong> Passwords, password hints, and security information.</li>
                            <li className="bg-gray-100 p-4 rounded-lg"><strong>Automatically Collected Data:</strong> IP address, browser details, and other technical data for security and analytics.</li>
                        </ul>
                    </section>

                    <section id="how-we-use-information" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
                        <ul className="space-y-3">
                            <li className="bg-gray-100 p-4 rounded-lg">To facilitate account creation and logon processes.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">To send marketing and promotional communications.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">To process transactions and improve our Services.</li>
                        </ul>
                    </section>

                    <section id="how-we-share-information" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Share Your Information</h2>
                        <ul className="space-y-3">
                            <li className="bg-gray-100 p-4 rounded-lg">With your consent.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">To comply with laws.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">To protect our rights.</li>
                        </ul>
                    </section>

                    <section id="data-retention" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                        <p className="text-gray-700 leading-relaxed">We will retain your personal information only as long as necessary for legal and operational purposes.</p>
                    </section>

                    <section id="your-rights" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
                        <ul className="space-y-3">
                            <li className="bg-gray-100 p-4 rounded-lg">Request access to your personal information.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">Request correction or deletion of your personal data.</li>
                            <li className="bg-gray-100 p-4 rounded-lg">Object to our use and processing of your personal information.</li>
                        </ul>
                    </section>

                    <section id="changes-to-policy" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 leading-relaxed">We may update our Privacy Policy periodically and will notify users of changes by posting updates on this page.</p>
                    </section>

                    <section id="contact-us" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed">For any inquiries, contact us at:</p>
                        <p className="mt-2"><a href="mailto:foodimetric@gmail.com" className="text-blue-600 font-medium underline">foodimetric@gmail.com</a></p>
                    </section>

                    <section id="disclaimer" className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
                        <p className="text-gray-700 leading-relaxed">The information on this website is for informational purposes only and is not intended as a substitute for professional medical advice. Always consult a registered dietitian for questions regarding your diet. The information, including but not limited to, text, graphics, images, and other material contained on this website, is for informational purposes only. No information on this site is intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult a registered dietitian with any questions you may have regarding your diet modification and before undertaking a new diet regimen. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.</p>
                    </section>

                    <p className="text-green-700 leading-relaxed mt-4">Last updated: March 7, 2025</p>
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Privacy;