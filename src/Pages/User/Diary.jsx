import React, { useState } from 'react';

const FoodDiary = () => {
    // Simulate previous logs with dates
    const simulatedLogs = [
        {
            date: '2024-12-08',
            time: '08:00',
            food: 'Scrambled Eggs',
            quantity: '2 eggs',
            additionalInfo: 'With toast and avocado',
        },
        {
            date: '2024-12-07',
            time: '12:30',
            food: 'Chicken Salad',
            quantity: '1 bowl',
            additionalInfo: 'With dressing and croutons',
        },
        {
            date: '2024-12-06',
            time: '19:00',
            food: 'Spaghetti Bolognese',
            quantity: '1 plate',
            additionalInfo: 'With parmesan',
        }
    ];

    const [foodLogs, setFoodLogs] = useState(simulatedLogs); // Initialize with simulated data
    const [newLog, setNewLog] = useState({
        date: '',
        time: '',
        food: '',
        quantity: '',
        additionalInfo: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLog({ ...newLog, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newLog.date || !newLog.time || !newLog.food || !newLog.quantity) {
            alert("Please fill in all required fields.");
            return;
        }
        setFoodLogs([...foodLogs, newLog]);
        setNewLog({ date: '', time: '', food: '', quantity: '', additionalInfo: '' }); // Reset form
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Title */}
            {/* Food Log Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Date */}
                    <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={newLog.date}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            required
                        />
                    </div>

                    {/* Time */}
                    <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Time
                        </label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={newLog.time}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Food */}
                    <div>
                        <label htmlFor="food" className="block text-sm font-medium text-gray-700">
                            Food Eaten
                        </label>
                        <input
                            type="text"
                            id="food"
                            name="food"
                            value={newLog.food}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            required
                        />
                    </div>

                    {/* Quantity */}
                    <div>
                        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                            Quantity
                        </label>
                        <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={newLog.quantity}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            required
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Additional Info */}
                    <div>
                        <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                            Additional Info
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={newLog.additionalInfo}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            rows="3"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
                    >
                        Log Food
                    </button>
                </div>
            </form>

            {/* Food Logs */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Previous Logs</h2>

                {foodLogs.length === 0 ? (
                    <p className="text-center text-gray-500">No food logs yet. Add some!</p>
                ) : (
                    <ul className="space-y-4">
                        {foodLogs.map((log, index) => (
                            <li key={index} className="bg-white p-6 shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-green-600 mb-1">{log.food}</h3>
                                        <p className="text-gray-500 text-sm">{log.time} on {log.date}</p>
                                    </div>
                                    <span className="text-gray-700 font-medium">{log.quantity}</span>
                                </div>
                                {log.additionalInfo && (
                                    <p className="mt-3 text-gray-700 text-sm">{log.additionalInfo}</p>
                                )}
                                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                                    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-200">
                                        Edit
                                    </button>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-200">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default FoodDiary;
