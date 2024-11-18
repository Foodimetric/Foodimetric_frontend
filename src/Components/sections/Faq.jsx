import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            id: 1,
            question: "What is Foodimetric?",
            answer:
                "Foodimetric is a database-inclined platform that assists users to make informed nutrition choices by providing important information about foods around them. Having noted the gap between nutrition information and healthy eating among Nigerians, Foodimetric presents compiled data on several foods around the country in a more relatable way to its users. Foodimetric is an important tool for both nutrition professionals and the general public to identify the nutrient composition of foods and their level of safety. Our vision is to advance the reality of healthiness to all. Our mission is to harness technology resources to improve nutrition and health.",
        },
        {
            id: 2,
            question: "Why Foodimetric?",
            answer:
                "Foodimetric improves the knowledge of users about the compositions of their foods and encourages healthy nutrition practices by presenting the data of foods in a simplified and understandable way. Foodimetric is a powerful tool for dietetics students and professionals because it eases the process of calculating the nutrient composition of foods for medical nutrition therapy. Foodimetric also provides reliable and credible nutrition information. Foodimetric aims to encourage researchers to conduct more studies on indigenous food composition to further expand the available database.",
        },
        {
            id: 3,
            question: "What is Food Composition?",
            answer:
                "Food composition refers to the detailed breakdown of the nutrients and other components present in a specific food. This information is important for understanding the nutritional value and potential health benefits of different foods. Food composition data is often used by researchers, nutritionists, and food manufacturers to assess dietary intake and develop guidelines for healthy eating.",
        },
        {
            id: 4,
            question: "What is Nutrition?",
            answer:
                "Nutrition refers to the process of obtaining and utilizing food for growth, development, and overall health. It involves the study of nutrients and how they impact us. Good nutrition is essential for maintaining proper bodily functions, supporting growth and development, and preventing diseases. It plays a crucial role in providing energy, building and repairing tissues, and supporting the immune system.",
        },
        {
            id: 5,
            question: "What is BMI?",
            answer:
                "BMI stands for Body Mass Index, and it's a measure used to assess a person's body weight in relation to their height. It's a simple calculation that helps determine if a person is underweight, normal weight, overweight, or obese. The formula for BMI is weight (in kilograms) divided by height (in meters) squared. The resulting number can be interpreted using standard BMI categories. However, it's important to note that BMI is a general indicator and does not take into account factors such as muscle mass or body composition. It's always a good idea to consult with a healthcare professional for a comprehensive evaluation of your health and weight.",
        },
    ];
    return (
        <section className="section-wrap">
            <div className="wraper">
                <div className="mb-[75px] sm:mb-[40px] text-center">
                    <h2 className="text-[55px] md:text-[35px] sm:text-[32px] col:text-[28px] leading-[70px] md:leading-[55px] sm:leading-[40px] 
                    relative capitalize font-heading-font font-bold
                     text-[#14212b]">Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-[860px] mx-auto">
                    <div className="mt-[50px]">
                        <div id="accordionFlushExample">
                            {faqs.map((faq, index) => (
                                <div key={index} className="rounded-none bg-white border-[1px] border-[#e1e1e1] mb-[20px]">
                                    <h2 className="mb-0">
                                        <button
                                            className="group relative flex w-full items-center rounded-none border-0 bg-white px-5 py-5 text-left text-[18px] font-base-font transition
                                            [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none"
                                            type="button"
                                            onClick={() => toggleAccordion(index)}
                                            aria-expanded={activeIndex === index}
                                        >
                                            {faq.question}
                                            <span
                                                className={`-mr-1 ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out ${activeIndex === index ? 'rotate-[-180deg]' : 'rotate-0'} motion-reduce:transition-none`}
                                            >
                                                <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h2>
                                    <div
                                        id={`flush-collapse${index}`}
                                        className={`${activeIndex === index ? '!visible' : 'hidden'} border-0`}
                                        aria-labelledby={`flush-heading${index}`}
                                        data-te-parent="#accordionFlushExample"
                                    >
                                        <div className="px-5 py-4">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq;
