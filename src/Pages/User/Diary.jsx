import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
// import { FOODIMETRIC_HOST_URL } from '../../Utils/host';
import { useUser } from '../../Context/User/UserContext';
import showToast from '../../Utils/toast';

const FoodDiary = () => {
    const { user } = useAuth();
    console.log("user", user);
    const { foodEntries, handleDiary, handleDeleteFood, editDiary } = useUser();
    const [newLog, setNewLog] = useState({
        date: '',
        time: '',
        food: '',
        quantity: '',
        additionalInfo: '',
    });
    const [editMode, setEditMode] = useState(false);
    const [currentLogId, setCurrentLogId] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewLog({ ...newLog, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!newLog.date || !newLog.time || !newLog.food || !newLog.quantity) {
            showToast('error', "Please fill in all required fields.")
            return;
        }

        if (editMode) {
            await editDiary(currentLogId, newLog)
            setEditMode(false); // Switch off edit mode
        } else {
            // Add new log if not in edit mode
            await handleDiary(newLog);
        }

        setNewLog({ date: '', time: '', food: '', quantity: '', additionalInfo: '' }); // Reset form
    };

    const handleEdit = (log) => {
        setNewLog({
            date: log.date,
            time: log.time,
            food: log.foodEaten,
            quantity: log.quantity,
            additionalInfo: log.additionalInfo,
        });
        setEditMode(true);
        setCurrentLogId(log._id);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 font-base-font">
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
                            Quantity(g)
                        </label>
                        <input
                            type="number"
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
                            Additional info (describe the quantity/size of foods in detail, eating location, e.t.c)
                        </label>
                        <textarea
                            id="additionalInfo"
                            name="additionalInfo"
                            value={newLog.additionalInfo}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            rows="3"
                            placeholder='Additional info (describe the quantity/size of foods in detail, eating location, e.t.c)'
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
                {foodEntries.length === 0 ? (
                    <p className="text-center text-gray-500">No food logs yet. Add some!</p>
                ) : (
                    <ul className="space-y-4">
                        {foodEntries.map((log, index) => (
                            <li key={index} className="bg-white p-6 shadow-lg rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                                <div className="flex justify-between items-start">
                                    <div className='w-11/12'>
                                        <h3 className="text-2xl font-semibold text-green-600 mb-1">{log.foodEaten}</h3>
                                        <p className="text-gray-500 text-sm">{log.time} on {new Date(log.date).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })}</p>
                                    </div>
                                    <span className="text-gray-700 font-medium">{log.quantity}g</span>
                                </div>
                                {log.additionalInfo && (
                                    <p className="mt-3 text-gray-700 text-sm">{log.additionalInfo}</p>
                                )}
                                <div className="mt-4 flex justify-between items-center text-gray-500 text-sm">
                                    <button
                                        onClick={() => handleEdit(log)}
                                        className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all duration-200"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteFood(log._id)}
                                        className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-all duration-200"
                                    >
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
