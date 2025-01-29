import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';
import showToast from '../../Utils/toast';

const UserSettings = () => {
    const { user } = useAuth();
    const [profilePicture, setProfilePicture] = useState('/assets/images/folake.png');
    const [profileDetails, setProfileDetails] = useState({
        name: '',
        email: '',
        location: '',  // Default location
        profession: '',
        signInDate: '2024-01-01',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletionReason, setDeletionReason] = useState('');


    const countries = [
        // Existing countries
        'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
        'France', 'India', 'Brazil', 'China', 'Japan', 'Mexico', 'South Africa',
        'Italy', 'Spain', 'Netherlands', 'Russia', 'South Korea', 'Argentina',
        'Nigeria', 'Egypt', 'Saudi Arabia',

        // All African countries
        'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi',
        'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros',
        'Congo (Congo-Brazzaville)', 'Djibouti', 'Equatorial Guinea', 'Eritrea',
        'Eswatini (fmr. "Swaziland")', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana',
        'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho', 'Liberia',
        'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
        'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Rwanda', 'Sao Tome and Principe',
        'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Sudan',
        'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
    ];
    //  simplified list of countries (you can expand or load dynamically)

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
                location: user.location,  // Default location if not found in user profile
                profession: user.category,
                signInDate: '2024-01-01',
            });
        }
    }, [user]);

    const handleSaveChanges = async () => {
        const updatedProfile = {
            location: profileDetails.location,
            // category: profileDetails.profession,
        };

        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/update-profile`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: JSON.stringify(updatedProfile),
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // const data = await response.json();
            showToast('success', 'Profile updated successfully')
            // Optionally, update the user context or state
        } catch (error) {
            showToast('error', 'Error updating profile');
        }
    };

    const profession = [
        { label: "Lecturer/Researcher", value: 1 },
        { label: "Registered Dietitian/Clinical Nutritionist", value: 2 },
        { label: "Nutrition Student", value: 3 },
        { label: "Others", value: 0 },
    ];

    const getProfessionLabel = (value) => {
        console.log("value", value);

        const prof = profession.find((p) => p.value === value);
        return prof ? prof.label : "Unknown"; // Default to "Unknown" if no match is found
    };

    console.log("profile", user);


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
                        { label: 'Name', name: 'name', type: 'text', value: profileDetails.name, readOnly: true },
                        { label: 'Email', name: 'email', type: 'email', value: profileDetails.email, readOnly: true },
                        { label: 'Profession', name: 'profession', type: 'text', value: getProfessionLabel(profileDetails.profession), readOnly: false },
                    ].map(({ label, name, type, value, readOnly }) => (
                        <div key={name}>
                            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                                {label}
                            </label>
                            <input
                                readOnly={readOnly}
                                type={type}
                                name={name}
                                value={value}
                                onChange={handleInputChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600"
                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Location
                        </label>
                        <select
                            name="location"
                            value={profileDetails.location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 capitalize"
                        >
                            {countries.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </div>

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

                {/* Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="py-2 px-4 bg-red-700 text-white rounded-lg shadow-md hover:bg-red-800 transition-colors"
                    >
                        Delete Account
                    </button>
                    <button onClick={handleSaveChanges} className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
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