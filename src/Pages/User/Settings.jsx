import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';

const UserSettings = () => {
    const { user, logout } = useAuth();
    const [profilePicture, setProfilePicture] = useState('/assets/images/folake.png');
    const [profileDetails, setProfileDetails] = useState({
        name: '',
        email: '',
        location: 'New York, USA',
        profession: '',
        signInDate: '2024-01-01',
    });


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletionReason, setDeletionReason] = useState('');

    const professionOptions = [
        { value: 'Software Developer', label: 'Software Developer' },
        { value: 'Designer', label: 'Designer' },
        { value: 'Product Manager', label: 'Product Manager' },
        { value: 'Data Scientist', label: 'Data Scientist' },
        { value: 'Engineer', label: 'Engineer' },
    ];

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfilePicture(URL.createObjectURL(file));
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({ ...profileDetails, [name]: value });
    };


    const handleDeleteAccount = () => {
        // Logic for account deletion goes here
        console.log('Account deleted');
        setIsModalOpen(false); // Close modal after deletion
    };

    useEffect(() => {
        if (user) {
            setProfileDetails({
                name: `${user.lastName || ''} ${user.firstName || ''}`.trim(),
                email: user.email || '',
                location: 'New York, USA',
                profession: localStorage.getItem('category') || String(user.category) || 'Unknown',
                signInDate: '2024-01-01',
            });
        }
    }, [user]);

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-10">
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center w-1/4">
                <img
                    className="w-32 h-32 rounded-full object-cover border-4 border-green-600"
                    src={profilePicture}
                    alt="Profile"
                />

                {/* Custom Upload Image Button */}
                <label
                    htmlFor="upload-image"
                    className="mt-3 text-sm text-gray-600 cursor-pointer bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
                >
                    Upload Image
                </label>
                <input
                    id="upload-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureChange}
                />
            </div>

            {/* User Details Form */}
            <div className="flex-grow w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        { label: 'Name', name: 'name', type: 'text', value: profileDetails.name },
                        { label: 'Email', name: 'email', type: 'email', value: profileDetails.email },
                        { label: 'Location', name: 'location', type: 'text', value: profileDetails.location },
                        { label: 'Profession', name: 'profession', type: 'text', value: profileDetails.profession },
                    ].map(({ label, name, type, value, options }) => (
                        <div key={name}>
                            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                                {label}
                            </label>
                            {type === 'select' ? (
                                <select
                                    name={name}
                                    value={value}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 capitalize"
                                >
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={type}
                                    name={name}
                                    value={value}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                                />
                            )}
                        </div>
                    ))}
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="signInDate" className="block text-sm font-medium text-gray-700">
                            Sign-in Date
                        </label>
                        <input
                            type="text"
                            name="signInDate"
                            value={profileDetails.signInDate}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                        />
                    </div>

                </div>
                {!user.category === 1 && (
                    <p className="mt-4 p-4 text-sm bg-green-50 border border-green-200 rounded-lg shadow-sm text-green-700">
                        If you are a nutritionist, dietitian, nutrition student, or have expertise in the field of nutrition, consider updating your profession to access advanced tools designed to enhance your work and streamline your professional tasks.
                    </p>
                )}

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="py-2 px-4 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 transition-colors"
                    >
                        Delete Account
                    </button>
                    <button className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Confirmation Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h3 className="text-xl font-semibold mb-4">Are you sure you want to delete your account?</h3>
                        <textarea
                            value={deletionReason}
                            onChange={(e) => setDeletionReason(e.target.value)}
                            placeholder="Please provide a reason for deleting your account"
                            className="w-full p-2 border border-gray-300 rounded-md mb-4"
                        ></textarea>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Confirm Deletion
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserSettings;