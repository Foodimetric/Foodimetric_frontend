import React from "react";
import HeaderLink from "../Components/Headers/HeaderLink";
import Footer from "../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Education = () => {
    return (
        <div className="">
            <Helmet>
                <title>Nutrition Education Hub | Learn Healthy Eating with Foodimetric</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <HeaderLink />
            <div className="max-w-6xl mx-auto p-6">
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-[#0a272c] mb-4">
                        Understanding Nutrition and Measurements
                    </h1>
                    <p className="text-lg text-[#687693] leading-7">
                        Nutrition plays a vital role in maintaining health and well-being. At Foodimetric, we aim to educate you on the
                        basics of nutrition, commonly used terms, and practical ways to measure food tailored for Nigerians and Africans.
                    </p>
                </section>

                {/* Section: Common Nutritional Terms */}
                <section className="mb-12 bg-white shadow-md p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-[#0a272c] mb-4">
                        Common Nutritional Terms
                    </h2>
                    <ul className="list-disc pl-5 text-[#687693] text-base leading-7">
                        <li>
                            <strong>Calories:</strong> The energy your body gets from food, measured per serving or portion.
                        </li>
                        <li>
                            <strong>Protein:</strong> An important nutrient for building and repairing tissues found in foods like beans, fish, eggs, meat, etc.
                        </li>
                        <li>
                            <strong>Carbohydrates:</strong> The body’s primary energy source, found in rice, yam, and cassava.
                        </li>
                        <li>
                            <strong>Fats:</strong> Healthy fats such as groundnut oil and olive oil are essential for synthesizing vital substances for our daily body function and also supply the body with energy.
                        </li>
                        <li>
                            <strong>Vitamins & Minerals:</strong> These nutrients support immunity and metabolism of other nutrients. They are primarily found in fruits and vegetables.
                        </li>
                        <li className="mt-2 font-semibold">
                            Moderation is key—do not consume less or more than you should. Consult a registered dietitian for professional assessment and personalized nutrition care.
                        </li>
                    </ul>
                </section>

                {/* Section: Local Measurements */}
                {/* <section className="mb-12 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-[#0a272c] mb-4">
                        Local Measurements and Their Equivalents
                    </h2>
                    <p className="text-[#687693] text-base leading-7 mb-4">
                        Understanding measurements can help you prepare balanced meals. Here are some common Nigerian household
                        measurements and their approximate equivalents in grams:
                    </p>
                    <ul className="list-disc pl-5 text-[#687693] text-base leading-7">
                        <li><strong>1 cup of rice:</strong> Approximately 200 grams.</li>
                        <li><strong>1 milk tin of garri:</strong> About 250 grams.</li>
                        <li><strong>1 tablespoon of palm oil:</strong> Roughly 10 grams.</li>
                        <li><strong>1 medium-sized tuber of yam:</strong> Around 2-3 kg.</li>
                        <li><strong>1 wrap of moi-moi:</strong> About 250 grams.</li>
                    </ul>
                </section> */}

                <div className="mb-10 bg-white shadow-md p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold text-[#0a272c] mb-4">
                        Why Nutrition Matters
                    </h2>
                    <p className="text-base text-[#687693] leading-7">
                        Good nutrition helps in preventing malnutrition, reducing the risk of diseases like diabetes and high blood pressure, and promoting growth and development. By understanding the nutritional value of local foods, you can make better choices for you and your family.
                    </p>
                </div>

                {/* Section: Anthropometric Measurements */}
                <div className="mb-12 bg-gray-100 p-8 rounded-lg">
                    <h1 className="text-4xl font-semibold text-[#0a272c] mb-6">
                        Understanding Anthropometric Measurements
                    </h1>
                    <p className="text-[#687693] leading-8 mb-6 text-base">
                        Have you ever wondered how health experts assess your overall nutritional and physical status? Anthropometric measurements are methods used to evaluate the size, shape, and composition of the human body. These tools are essential for understanding your health and making better dietary choices.
                    </p>

                    <div className="mb-8">
                        <h2 className="text-3xl font-semibold text-[#0a272c] mb-4">
                            What Are Anthropometric Measurements?
                        </h2>
                        <p className="text-base text-[#687693] leading-7 ">
                            Anthropometric measurements involve assessing your body’s physical dimensions and composition. This includes calculating body mass index (BMI), understanding your body’s energy needs, and determining if you’re at risk for malnutrition, obesity, or other health conditions. These measurements give insight into your overall nutritional health.
                        </p>
                    </div>
                </div>

                {/* Section: Anthropometric Measurements */}
                <section className="mb-12 bg-white shadow-md p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-[#0a272c] mb-4">
                        Understanding Anthropometric Measurements
                    </h2>
                    <p className="text-[#687693] text-base leading-7 mb-4">
                        Anthropometric measurements are used to evaluate your body’s physical dimensions and composition. They provide
                        insights into nutritional health, energy needs, and risk factors for various conditions.
                    </p>
                    <ul className="list-disc pl-5 text-[#687693] text-base leading-7">
                        <li><strong>BMI (Body Mass Index):</strong> A measure of your weight in relation to your height, used to classify underweight, normal weight, overweight, and obesity.</li>
                        <li><strong>BMI-for-Age:</strong> This helps assess if a child’s growth is on track compared to their peers of the same age.</li>
                        <li><strong>BMR (Basal Metabolic Rate):</strong> The amount of energy your body needs to perform basic functions like breathing and digestion while at rest.</li>
                        <li><strong>IBW (Ideal Body Weight):</strong> An estimation of the most healthy weight for your height and body frame.</li>
                        <li><strong>Percentiles:</strong> Used to compare your measurements (like height or weight) against population standards, especially for children.</li>
                        <li><strong>WHR (Waist-to-Hip Ratio):</strong> Assesses fat distribution and risks for conditions like heart disease.</li>
                        <li><strong>EE (Energy Expenditure):</strong> The total calories you burn in a day, considering physical activity and other factors.</li>
                        <li><strong>EER (Estimated Energy Requirements):</strong> The amount of energy (calories) you need daily to maintain your current weight.</li>
                        <li><strong>Weight-for-Height:</strong> Determines if your weight is appropriate for your height, often used for children.</li>
                        <li><strong>Height-for-Age:</strong> Tracks a child’s height compared to their age to assess growth and potential stunting.</li>
                        <li><strong>Water Intake:</strong> Ensures you’re drinking enough water daily to stay hydrated and support bodily functions.</li>
                    </ul>
                </section>

                {/* Call-to-Action Section */}
                <section className="text-center">
                    <h2 className="text-2xl font-semibold text-[#0a272c] mb-4">
                        How Foodimetric Can Help
                    </h2>
                    <p className="text-[#687693] text-base leading-7 mb-6">
                        At Foodimetric, we simplify these measurements with tools designed to cater to the unique needs of Nigerians
                        and Africans. Explore our tools for personalized health tips and accurate calculations.
                    </p>
                    <Link
                        to="/anthro/BMI"
                        className="bg-[#ffba08] text-white px-6 py-3 rounded-lg hover:bg-[#f78914] transition"
                    >
                        Explore Tools
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Education;
