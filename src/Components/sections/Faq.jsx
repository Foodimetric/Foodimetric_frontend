import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How to you can start your own agency?",
            answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum exercitationem pariatur iure nemo esse repellendus est quo recusandae. Delectus, maxime."
        },
        {
            question: "Before hiring a consultant, what kind of questions should I ask?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem Ipsum is that it has a more-or-less normal."
        },
        {
            question: "Should I meet with multiple consultants and shop around before hiring one?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem Ipsum is that it has a more-or-less normal."
        },
        {
            question: "In addition to billable hours, what other costs can consultants charge for?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Lorem Ipsum is that it has a more-or-less normal."
        }
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
