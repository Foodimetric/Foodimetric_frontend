import React from 'react';
import BMI from '../Anthro/BMI';
import { Pie } from 'react-chartjs-2';
import { useUser } from '../../Context/User/UserContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Helmet } from 'react-helmet-async';

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
    const { foodEntries, analytics } = useUser();
    const pieData = {
        labels: analytics?.calculationBreakdown.map(item => item._id),
        datasets: [
            {
                label: 'Calculation Breakdown',
                data: analytics?.calculationBreakdown.map(item => item.count),
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'], // Add more colors as needed
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
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

    // console.log(foodEntries);
    return (
        <div className="col-span-12 w-full">
            <Helmet>
                <title>Your Foodimetric Dashboard - Track Nutrition & Health</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="p-4 bg-blue-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600 font-heading-font">Diary Tracked</h3>
                    <p className="text-xl font-semibold text-blue-600 font-base-font">{analytics?.totalFoodLogs || 0}</p>
                </div>
                <div className="p-4 bg-green-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600 font-heading-font">Calculations</h3>
                    <p className="text-xl font-semibold text-green-600 font-base-font">{analytics?.totalCalculations || 0}</p>
                </div>
                <div className="p-4 bg-yellow-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600 font-heading-font">Most Used</h3>
                    <p className="text-xl font-semibold text-yellow-600 font-base-font">{analytics?.mostUsedCalculator || 0}</p>
                </div>
                <div className="p-4 bg-purple-100 rounded-lg shadow-md">
                    <h3 className="text-sm text-gray-600 font-heading-font">Usage</h3>
                    <p className="text-xl font-semibold text-purple-600 font-base-font">{analytics?.platformUsage || 0}</p>
                </div>
            </div>

            {/* Recent Meals Section */}
            {foodEntries.length > 0 && <div className="mt-4 bg-white shadow-md rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Meals</h3>
                <div className="space-y-4">
                    {foodEntries
                        .slice()
                        .reverse() // Ensure most recent entries come first
                        .slice(0, 3).map((meal, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-4 bg-gray-50 border rounded-lg shadow-sm"
                            >
                                <div>
                                    <p className="text-sm font-medium text-gray-700 font-heading-font">{meal.foodEaten}</p>
                                    <p className="text-xs text-gray-500 font-base-font italic font-medium">{meal.quantity}</p>
                                </div>
                                <div className="text-sm font-semibold text-gray-800 font-heading-font">{meal.time}</div>
                            </div>
                        ))}
                </div>
            </div>}
            {/* Actions Section */}
            <div className='flex flex-col gap-4 md:flex-row'>
                <div className='w-full md:w-1/3'>
                    {/* Nutrition Quote of the Day */}
                    <div className="mt-8 p-6 bg-gray-50 border-t rounded-lg shadow-sm w-full h-fit">
                        <h3 className="text-lg font-semibold text-gray-800 font-heading-font">Nutrition Quote of the Day</h3>
                        <p className="text-sm text-gray-600 mt-2 italic font-base-font">
                            "Let food be thy medicine and medicine be thy food." - Hippocrates
                        </p>
                    </div>

                    {/* chart, pie chart */}
                    <div className="mt-6 p-6 pb-12 bg-white border-t rounded-lg shadow-sm w-full h-80">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4 font-heading-font">Calculation Breakdown</h3>
                        {analytics?.calculationBreakdown && analytics?.calculationBreakdown.length > 0 ? (
                            <Pie data={pieData} options={pieOptions} />
                        ) : (
                            <p className='font-base-font'>No calculations performed yet.</p>
                        )}
                    </div>
                    <div className="mt-6 p-6 bg-gray-50 border-t rounded-lg shadow-sm w-full h-fit">
                        <h3 className="text-lg font-semibold text-gray-800 font-heading-font">What’s Next?</h3>
                        <p className="text-sm text-gray-600 mt-2 font-base-font">
                            Stay tuned for upcoming features like personalized AI insights and advanced nutrient tracking!
                        </p>
                    </div>

                </div>
                <div className='w-full md:w-2/3'>
                    <BMI islandingPage={false} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
