import React, { useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Icon for delete action

const HistoryPage = () => {
    const [selectedCalculation, setSelectedCalculation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Example data for anthropometric calculations
    const historyData = [
        { date: '2024-11-20', height: '5.8 ft', weight: '70 kg', bmi: '24.3', waist: '30 in' },
        { date: '2024-10-15', height: '5.6 ft', weight: '65 kg', bmi: '23.1', waist: '28 in' },
        { date: '2024-09-10', height: '5.7 ft', weight: '75 kg', bmi: '26.5', waist: '32 in' },
    ];

    const handleDelete = (index) => {
        // Delete logic here (you would typically update the state to remove the item)
        alert(`Deleted item at index: ${index}`);
    };

    const handleViewDetails = (calculation) => {
        setSelectedCalculation(calculation);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCalculation(null);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
                <table className="min-w-full table-auto text-sm text-gray-700">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Calculation</th>
                            <th className="p-4 text-left">Result</th>
                            <th className="p-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100 transition-all duration-300">
                                <td className="p-4">{item.date}</td>
                                <td className="p-4">{item.height}</td>
                                <td className="p-4">{item.weight}</td>
                                <td className="p-4 text-center flex justify-center space-x-4">
                                    <button
                                        onClick={() => handleViewDetails(item)}
                                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                    >
                                        <FaEye size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-red-500 hover:text-red-700 focus:outline-none"
                                    >
                                        <FaTrashAlt size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && selectedCalculation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 w-2/5 shadow-lg">
                        <h2 className="text-xl font-semibold mb-4">Calculation Details</h2>
                        <p><strong>Calculation Name:</strong> {selectedCalculation?.name}</p>
                        <p><strong>Date:</strong> {selectedCalculation?.date}</p>
                        <p><strong>Result:</strong> {selectedCalculation?.result}</p>
                        <p><strong>Parameters Used:</strong> {selectedCalculation?.parameters?.join(", ")}</p>
                        <p><strong>Formula Reference:</strong> EER (Estimated Energy Requirement)</p>
                        <div className="mt-4 flex justify-end space-x-2">
                            <button
                                onClick={closeModal}
                                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HistoryPage;
