import React, { useState } from 'react';
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Icons for actions
import { useUser } from '../../Context/User/UserContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

const HistoryPage = () => {
    const { calculations, handleDelete } = useUser();
    const [selectedCalculation, setSelectedCalculation] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


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
            {/* Responsive Table */}
            <div className="overflow-x-auto bg-white shadow-xl rounded-lg">
                <table className="min-w-full table-auto text-sm text-gray-700">
                    <thead className="bg-green-600 text-white">
                        <tr>
                            <th className="p-4 text-left">Date</th>
                            <th className="p-4 text-left">Calculation</th>
                            <th className="p-4 text-left">Result</th>
                            <th className="p-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calculations.map((item, index) => (
                            <tr
                                key={item._id || index}
                                className="hover:bg-gray-100 transition-all duration-300"
                            >
                                <td className="p-4">{item.timestamp
                                    ? `${new Date(item.timestamp).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })} ${new Date(item.timestamp).toLocaleTimeString('en-US', {
                                        hour: '2-digit',
                                        minute: '2-digit',
                                        second: '2-digit',
                                    })}`
                                    : 'N/A'}</td>
                                <td className="p-4">{item.calculator_name || 'Unnamed'}</td>
                                <td className="p-4">{item.result || 'N/A'}</td>
                                <td className="p-4 text-center flex justify-center space-x-4">
                                    <button
                                        onClick={() => handleViewDetails(item)}
                                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                                    >
                                        <FaEye size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(item._id)}
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
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-describedby="modal-description"
                >
                    <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
                        <h2
                            id="modal-title"
                            className="text-xl font-semibold mb-4"
                        >
                            Calculation Details
                        </h2>
                        <p>
                            <strong>Calculation Name:</strong>{' '}
                            {selectedCalculation.calculator_name || 'Unnamed'}
                        </p>
                        <p>
                            <strong>Date & Time:</strong>{' '}
                            {selectedCalculation.timestamp
                                ? `${new Date(selectedCalculation.timestamp).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })} ${new Date(selectedCalculation.timestamp).toLocaleTimeString('en-US', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                })}`
                                : 'N/A'}
                        </p>
                        <p>
                            <strong>Result:</strong>{' '}
                            {selectedCalculation.result || 'N/A'}
                        </p>
                        <p>
                            <strong>Parameters Used:</strong>
                        </p>
                        {selectedCalculation.parameters && typeof selectedCalculation.parameters === 'object' ? (
                            <ul className="list-disc pl-5">
                                {Object.entries(selectedCalculation.parameters).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>None</p>
                        )}
                        <p>
                            <strong>Formula Reference:</strong> {selectedCalculation.calculation_details}
                        </p>
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