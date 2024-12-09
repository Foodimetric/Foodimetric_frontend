import React, { useState } from 'react';
import BMI from '../Anthro/BMI';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
    const [userStats, setUserStats] = useState({
        mealsTracked: 120,
        caloriesBurned: 1500,
        caloriesConsumed: 1800,
        nutrientsTracked: 45,
    });

    const [recentMeals, setRecentMeals] = useState([
        { name: 'Grilled Chicken Salad', time: '12:30 PM', calories: 350 },
        { name: 'Smoothie Bowl', time: '3:00 PM', calories: 300 },
        { name: 'Avocado Toast', time: '7:00 PM', calories: 250 },
    ]);


    const pieData = {
        labels: ['Carbs', 'Protein', 'Fat'],
        datasets: [
            {
                label: 'Nutrient Breakdown',
                data: [50, 30, 20], // Example data
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    };

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
            },
        },
    };

    return (
        <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600">Meals Tracked</h3>
                    <p className="text-xl font-semibold text-blue-600">{userStats.mealsTracked}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600">Calories Burned</h3>
                    <p className="text-xl font-semibold text-green-600">{userStats.caloriesBurned} kcal</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600">Calories Consumed</h3>
                    <p className="text-xl font-semibold text-yellow-600">{userStats.caloriesConsumed} kcal</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600">Nutrients Tracked</h3>
                    <p className="text-xl font-semibold text-purple-600">{userStats.nutrientsTracked}</p>
                </div>
            </div>

            {/* Recent Meals Section */}
            <div className="mt-4 bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Meals</h3>
                <div className="space-y-4">
                    {recentMeals.map((meal, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg shadow-sm"
                        >
                            <div>
                                <p className="text-sm font-medium text-gray-700">{meal.name}</p>
                                <p className="text-xs text-gray-500">{meal.time}</p>
                            </div>
                            <div className="text-sm font-semibold text-gray-800">{meal.calories} kcal</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Actions Section */}
            <div className='flex gap-4'>
                <div className='w-1/3'>
                    {/* Nutrition Quote of the Day */}
                    <div className="mt-8 p-6 bg-gray-50 border-t rounded-lg shadow-sm w-full h-fit">
                        <h3 className="text-lg font-semibold text-gray-800">Nutrition Quote of the Day</h3>
                        <p className="text-sm text-gray-600 mt-2 italic">
                            "Let food be thy medicine and medicine be thy food." - Hippocrates
                        </p>
                    </div>

                    {/* chart, pie chart */}
                    <div className="mt-6 p-6 pb-12 bg-white border-t rounded-lg shadow-sm w-full h-80">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Nutrient Breakdown</h3>
                        <Pie data={pieData} options={pieOptions} />
                    </div>
                    <div className="mt-6 p-6 bg-gray-50 border-t rounded-lg shadow-sm w-full h-fit">
                        <h3 className="text-lg font-semibold text-gray-800">What’s Next?</h3>
                        <p className="text-sm text-gray-600 mt-2">
                            Stay tuned for upcoming features like personalized AI insights and advanced nutrient tracking!
                        </p>
                    </div>

                </div>
                <div className='w-2/3'>
                    <BMI islandingPage={false} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
