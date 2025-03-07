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
            answer: "Foodimetric is a health-tech startup that's devoted to promoting the reality of healthiness to Africans through tech and nutrition science. Foodimetric is an important platform for both nutrition professionals and the general public to identify the nutrient composition of their foods, assess their nutrition status, and access nutrition care."
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
        {
            id: 6,
            question: "What is the best way to track my daily food intake?",
            answer:
                "Tracking your daily food intake is a great way to become more aware of your eating habits and work towards your nutrition goals. One effective method is to keep a food diary. You can do this using a notebook, a dedicated app, or even a simple spreadsheet. The key is to record everything you eat and drink, along with portion sizes and when you consume it. Being consistent with your food journal will make the process easier and increase the likelihood of following through. Foodimetric can help you with this! Our Food Diary feature allows you to easily log your meals and snacks throughout the day. This can help you identify patterns in your diet, track your calorie and nutrient intake, and make informed decisions about your food choices. To get started, simply create an account on Foodimetric and begin logging your meals in the Food Diary. You might also find our Food Search feature useful for quickly looking up the nutritional content of different foods you're eating. If you have any questions or need further assistance, feel free to reach out to us on our contact page or at foodimetric@gmail.com.",
        },

        {
            id: 7,
            question: "How can I create a balanced meal plan?",
            answer:
                "Creating a balanced meal plan is all about including the right proportions of different food groups to ensure you get all the nutrients you need. A good starting point is to aim for a plate that's one-half fruits and vegetables. To help you plan your meals, you can use Foodimetric's Food Search feature to look up the nutritional content of different local foods you enjoy. This will help you make informed choices about what to include in your meals. You can also use the Multi-food Search feature to compare the nutrients across different foods. If you're looking to increase your intake of a specific nutrient, try the Nutrient Search feature to find foods rich in that nutrient. And to keep track of your progress, the Food Diary can help you monitor your daily dietary intake. For more personalized advice, you can always reach out to a dietitian or contact foodimetric@gmail.com.",
        },
        {
            id: 8,
            question: "What are the essential nutrients my body needs daily?",
            answer:
                "Your body needs a variety of nutrients every day to function properly. These can be broken down into macronutrients and micronutrients.  Macronutrients are the nutrients needed in larger amounts and include carbohydrates, fats, and proteins. They provide your body with energy.  Micronutrients are vitamins and minerals, which are needed in smaller amounts but are still vital for health. To get a better understanding of the specific nutrients in the foods you eat, you should use Foodimetric's Food Search feature. You can look up the nutritional content of various local foods. Also, the Multi-food Search feature lets you compare nutrients across different foods, which can be super helpful for meal planning. If you're curious about foods rich in a specific nutrient, try the Nutrient Search feature. And to keep track of your daily intake, the Food Diary can be a game-changer. For more personalized advice, you can always reach out to a nutritionist, dietitian or contact Foodimetric at foodimetric@gmail.com.",
        },
        {
            id: 9,
            question: "How does calorie tracking help with weight management?",
            answer:
                "Calorie tracking can be a helpful tool for weight management because it helps you become more aware of how much energy you're consuming versus how much you're burning. By tracking calories, you can identify areas where you might be overeating and make adjustments to create a calorie deficit, which is essential for weight loss. To get started, you can use Foodimetric's Food Diary to log your daily meals and snacks. This will give you a clear picture of your calorie intake. You can also use our Food Search feature to look up the calorie content of different foods, especially local dishes you enjoy. If you're curious about the calorie differences between similar foods, try the Multi-food Search to compare their nutritional values side-by-side. If you'd like to calculate your individual calorie needs based on your age, sex, and activity level, you might find our Nutritional Assessment Calculators useful.",
        },
        {
            id: 10,
            question: "What’s the best way to measure food portions correctly?",
            answer:
                "Measuring food portions accurately is key to healthy eating. Here's a simple way to do it: One helpful method is to use the kitchen table weighing scale.  You can also use measuring cups and spoons, especially when following a recipe. For consistent tracking, try using Foodimetric's Food Diary feature to log your meals and portion sizes. This can help you stay on track with your nutrition goals.",
        },
        {
            id: 11,
            question: "How do I calculate my meal calories accurately?",
            answer:
                "Calculating your meal calories accurately can be a game-changer for your health goals.Here's a simple approach: 1. Know Your Food: The first step is understanding the calorie content of the foods you're eating. Food labels are your best friend here. Pay attention to serving sizes, as the calorie information is based on that specific amount. 2. Measure Your Portions: Eyeballing it can lead to inaccuracies. Use measuring cups, spoons, or a food scale to get precise portion sizes. 3. Track Everything: Keep a record of all the foods and drinks you consume throughout the day. This can be done with Foodimetric Food Dairy.4. Use  our Food Search to quickly look up the calorie content of the foods. Our Multi-food Search feature allows you to compare the calories and other nutrients across different food items, helping you make informed choices. For consistent tracking, use our Food Diary feature. It's a convenient way to log your daily intake and monitor your calorie consumption over time.",
        },
        {
            id: 12,
            question: "Are there any free nutrition tracking tools available?",
            answer:
                "Our Food Diary, Food & Multifood Search, Nutrient & Multinutrient Search, Nutrition Assessment Calculators and educational support articles are available for free!.",
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
                                        className={`${activeIndex === index ? '!visible' : 'hidden'} border-0 font-heading-font`}
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
