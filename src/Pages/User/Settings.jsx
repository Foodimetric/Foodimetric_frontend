import React, { useState } from 'react';

const UserSettings = () => {
    const [profilePicture, setProfilePicture] = useState('/path/to/default/profile.jpg');
    const [profileDetails, setProfileDetails] = useState({
        name: 'John Doe',
        email: 'johndoe@example.com',
        location: 'New York, USA',
        profession: 'Software Developer',
        signInDate: '2024-01-01',
    });

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

    const handleSignOut = () => {
        // Implement sign-out functionality here
        console.log('Sign out');
    };

    return (
        <div className="col-span-8 mt-8 p-6 bg-white shadow-md rounded-lg">
            <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="flex flex-col items-center mb-6 md:mb-0">
                    <img className="w-32 h-32 rounded-full object-cover" src={profilePicture} alt="Profile" />
                    <input
                        type="file"
                        accept="image/*"
                        className="mt-2 text-sm text-gray-600"
                        onChange={handleProfilePictureChange}
                    />
                </div>
                <div className="w-full md:ml-6">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={profileDetails.name}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={profileDetails.email}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="location">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={profileDetails.location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="profession">Profession</label>
                        <input
                            type="text"
                            name="profession"
                            value={profileDetails.profession}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700" htmlFor="signInDate">Sign-in Date</label>
                        <input
                            type="text"
                            name="signInDate"
                            value={profileDetails.signInDate}
                            readOnly
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handleSignOut}
                    className="py-2 px-4 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700"
                >
                    Sign Out
                </button>
                <button
                    className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default UserSettings;
