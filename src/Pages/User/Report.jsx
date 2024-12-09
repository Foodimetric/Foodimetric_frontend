import React, { useState } from 'react';
import { FaLeaf, FaCarrot, FaAppleAlt, FaBreadSlice, FaFireAlt, FaAngleUp, FaAngleDown } from 'react-icons/fa'; // Icons for nutrition categories

const NutritionReportCard = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const toggleCardExpansion = (index) => {
        // Toggle between expanding and collapsing the card
        setExpandedCard(expandedCard === index ? null : index);
    };
    const reportData = [
        {
            caloriesConsumed: 2200,
            caloriesGoal: 2500,
            proteins: 85,
            carbs: 275,
            fats: 70,
            fiber: 30,
            vitamins: [
                { name: 'Vitamin A', value: 750, unit: 'mcg' },
                { name: 'Vitamin C', value: 60, unit: 'mg' },
                { name: 'Vitamin D', value: 15, unit: 'mcg' },
                { name: 'Vitamin E', value: 12, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 900, unit: 'mg' },
                { name: 'Iron', value: 16, unit: 'mg' },
                { name: 'Magnesium', value: 370, unit: 'mg' },
                { name: 'Potassium', value: 3200, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 1800,
            caloriesGoal: 2200,
            proteins: 100,
            carbs: 150,
            fats: 50,
            fiber: 25,
            vitamins: [
                { name: 'Vitamin A', value: 800, unit: 'mcg' },
                { name: 'Vitamin C', value: 100, unit: 'mg' },
                { name: 'Vitamin D', value: 10, unit: 'mcg' },
                { name: 'Vitamin E', value: 15, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 1100, unit: 'mg' },
                { name: 'Iron', value: 12, unit: 'mg' },
                { name: 'Magnesium', value: 350, unit: 'mg' },
                { name: 'Potassium', value: 3100, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2700,
            caloriesGoal: 2300,
            proteins: 120,
            carbs: 320,
            fats: 90,
            fiber: 28,
            vitamins: [
                { name: 'Vitamin A', value: 950, unit: 'mcg' },
                { name: 'Vitamin C', value: 80, unit: 'mg' },
                { name: 'Vitamin D', value: 20, unit: 'mcg' },
                { name: 'Vitamin E', value: 18, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 1000, unit: 'mg' },
                { name: 'Iron', value: 18, unit: 'mg' },
                { name: 'Magnesium', value: 400, unit: 'mg' },
                { name: 'Potassium', value: 3400, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2200,
            caloriesGoal: 2000,
            proteins: 95,
            carbs: 280,
            fats: 75,
            fiber: 32,
            vitamins: [
                { name: 'Vitamin A', value: 800, unit: 'mcg' },
                { name: 'Vitamin C', value: 90, unit: 'mg' },
                { name: 'Vitamin D', value: 12, unit: 'mcg' },
                { name: 'Vitamin E', value: 14, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 900, unit: 'mg' },
                { name: 'Iron', value: 16, unit: 'mg' },
                { name: 'Magnesium', value: 380, unit: 'mg' },
                { name: 'Potassium', value: 3000, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2600,
            caloriesGoal: 2800,
            proteins: 130,
            carbs: 310,
            fats: 95,
            fiber: 40,
            vitamins: [
                { name: 'Vitamin A', value: 1000, unit: 'mcg' },
                { name: 'Vitamin C', value: 110, unit: 'mg' },
                { name: 'Vitamin D', value: 25, unit: 'mcg' },
                { name: 'Vitamin E', value: 20, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 1200, unit: 'mg' },
                { name: 'Iron', value: 20, unit: 'mg' },
                { name: 'Magnesium', value: 450, unit: 'mg' },
                { name: 'Potassium', value: 3500, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 1900,
            caloriesGoal: 1800,
            proteins: 80,
            carbs: 180,
            fats: 60,
            fiber: 22,
            vitamins: [
                { name: 'Vitamin A', value: 650, unit: 'mcg' },
                { name: 'Vitamin C', value: 50, unit: 'mg' },
                { name: 'Vitamin D', value: 10, unit: 'mcg' },
                { name: 'Vitamin E', value: 11, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 850, unit: 'mg' },
                { name: 'Iron', value: 14, unit: 'mg' },
                { name: 'Magnesium', value: 320, unit: 'mg' },
                { name: 'Potassium', value: 2800, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2200,
            caloriesGoal: 2300,
            proteins: 100,
            carbs: 250,
            fats: 70,
            fiber: 28,
            vitamins: [
                { name: 'Vitamin A', value: 950, unit: 'mcg' },
                { name: 'Vitamin C', value: 85, unit: 'mg' },
                { name: 'Vitamin D', value: 15, unit: 'mcg' },
                { name: 'Vitamin E', value: 17, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 950, unit: 'mg' },
                { name: 'Iron', value: 19, unit: 'mg' },
                { name: 'Magnesium', value: 380, unit: 'mg' },
                { name: 'Potassium', value: 3100, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2100,
            caloriesGoal: 2000,
            proteins: 90,
            carbs: 220,
            fats: 65,
            fiber: 33,
            vitamins: [
                { name: 'Vitamin A', value: 700, unit: 'mcg' },
                { name: 'Vitamin C', value: 75, unit: 'mg' },
                { name: 'Vitamin D', value: 10, unit: 'mcg' },
                { name: 'Vitamin E', value: 14, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 980, unit: 'mg' },
                { name: 'Iron', value: 15, unit: 'mg' },
                { name: 'Magnesium', value: 370, unit: 'mg' },
                { name: 'Potassium', value: 2900, unit: 'mg' },
            ],
        },
        {
            caloriesConsumed: 2400,
            caloriesGoal: 2500,
            proteins: 110,
            carbs: 280,
            fats: 85,
            fiber: 35,
            vitamins: [
                { name: 'Vitamin A', value: 800, unit: 'mcg' },
                { name: 'Vitamin C', value: 95, unit: 'mg' },
                { name: 'Vitamin D', value: 18, unit: 'mcg' },
                { name: 'Vitamin E', value: 16, unit: 'mg' },
            ],
            minerals: [
                { name: 'Calcium', value: 1050, unit: 'mg' },
                { name: 'Iron', value: 22, unit: 'mg' },
                { name: 'Magnesium', value: 420, unit: 'mg' },
                { name: 'Potassium', value: 3300, unit: 'mg' },
            ],
        }
    ];

    return (
        <div className="flex items-center flex-wrap gap-4">
            {reportData.map((report, index) => (
                <div
                    key={index}
                    className="p-6 bg-gradient-to-r from-green-400 to-blue-500 shadow-xl rounded-xl"
                    style={{ height: expandedCard === index ? 'auto' : '500px', overflow: 'hidden' }}
                >
                    <div className="space-y-6">
                        {/* Calorie Goal Progress */}
                        <div className='flex justify-end'>
                            {expandedCard === index && (
                                <FaAngleUp className="mr-2 " onClick={() => toggleCardExpansion(index)} />
                            )}
                            {expandedCard !== index && (
                                <FaAngleDown className="mr-2" onClick={() => toggleCardExpansion(index)} />
                            )}
                        </div>
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-white">Calories Intake</h3>
                                <p className="text-white text-sm">{report.caloriesConsumed} / {report.caloriesGoal} kcal</p>
                            </div>
                            <div className="w-32 h-4 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-yellow-400"
                                    style={{ width: `${(report.caloriesConsumed / report.caloriesGoal) * 100}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Macronutrients Breakdown */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center space-x-2">
                                <FaAppleAlt size={24} className="text-green-300" />
                                <div>
                                    <h4 className="text-sm text-white">Proteins</h4>
                                    <p className="text-white text-xl">{report.proteins} g</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaBreadSlice size={24} className="text-brown-300" />
                                <div>
                                    <h4 className="text-sm text-white">Carbs</h4>
                                    <p className="text-white text-xl">{report.carbs} g</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaLeaf size={24} className="text-green-400" />
                                <div>
                                    <h4 className="text-sm text-white">Fats</h4>
                                    <p className="text-white text-xl">{report.fats} g</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <FaCarrot size={24} className="text-orange-300" />
                                <div>
                                    <h4 className="text-sm text-white">Fiber</h4>
                                    <p className="text-white text-xl">{report.fiber} g</p>
                                </div>
                            </div>
                        </div>

                        {/* Vitamins Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">Vitamins</h3>
                            <div className="grid grid-cols-3 gap-4 text-white">
                                {report.vitamins.map((vitamin, vitaminIndex) => (
                                    <div key={vitaminIndex} className="bg-white text-black p-3 rounded-lg text-center">
                                        <h5 className="font-medium">{vitamin.name}</h5>
                                        <p>{vitamin.value} {vitamin.unit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mineral Section */}
                        <div>
                            <h3 className="text-lg font-semibold text-white">Minerals</h3>
                            <div className="grid grid-cols-3 gap-4 text-white">
                                {report.minerals.map((mineral, mineralIndex) => (
                                    <div key={mineralIndex} className="bg-white text-black p-3 rounded-lg text-center">
                                        <h5 className="font-medium">{mineral.name}</h5>
                                        <p>{mineral.value} {mineral.unit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NutritionReportCard;
