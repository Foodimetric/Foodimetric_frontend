import React, { useEffect, useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';
import showToast from '../../Utils/toast';
import { Avatar } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const UserSettings = () => {
    const { user, setUser } = useAuth();
    const [profilePicture, setProfilePicture] = useState('');
    const [profileDetails, setProfileDetails] = useState({
        name: '',
        email: '',
        location: '',  // Default location
        profession: '',
        signInDate: '',
        profilePicture: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [deletionReason, setDeletionReason] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(false);


    const countries = [
        // Existing countries
        'Choose Location',
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
            setProfilePicture(file);
            // Optionally, you can preview the image before saving
            // const reader = new FileReader();
            // reader.onloadend = () => {
            //     setProfilePicture(reader.result);
            // };
            // reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileDetails({ ...profileDetails, [name]: value });
    };


    const handleDeleteAccount = async () => {
        if (!deletionReason.trim()) {
            showToast('error', "Please provide a reason for deleting your account.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/users/delete`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`, // Include Bearer token
                },
                // body: JSON.stringify({ reason: deletionReason }),
            });

            if (!response.ok) {
                throw new Error("Failed to delete account. Please try again.");
            }

            showToast('success', "Account deleted successfully");
            setIsModalOpen(false); // Close modal after deletion
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = '/login'
        } catch (error) {
            // console.error("Error:", error.message);
            showToast('error', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            setProfileDetails({
                name: `${user.lastName || ''} ${user.firstName || ''}`.trim(),
                email: user.email || '',
                location: user.location,  // Default location if not found in user profile
                profession: user.category,
                signInDate: new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                }),
                profilePicture: user.profilePicture,
            });
        }
    }, [user]);

    const handleSaveChanges = async () => {
        const formData = new FormData();

        formData.append('location', profileDetails.location);
        if (profilePicture) {
            formData.append('profilePicture', profilePicture); // 'profilePictureFile' is the selected file
        }
        setIsLoading(true);

        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/update-profile`, {
                method: 'PATCH',
                headers: {
                    // 'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            const data = await response.json();
            // Retrieve the current user object from localStorage
            const storedUser = JSON.parse(localStorage.getItem("user")) || {};

            // Update user details but retain the existing token
            const updatedUser = {
                ...storedUser, // Keep existing values
                _id: data.payload._id,
                email: data.payload.email,
                firstName: data.payload.firstName,
                lastName: data.payload.lastName,
                category: data.payload.category,
                location: data.payload.location,
                profilePicture: data?.payload?.profilePicture || '',
            };
            // Save the updated user object back to localStorage
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setUser(updatedUser)
            showToast('success', 'Profile updated successfully')
            // Optionally, update the user context or state
        } catch (error) {
            showToast('error', 'Error updating profile');
        } finally {
            setIsLoading(false)
        }
    };

    const profession = [
        { label: "Lecturer/Researcher", value: 1 },
        { label: "Registered Dietitian/Clinical Nutritionist", value: 2 },
        { label: "Nutrition Student", value: 3 },
        { label: "Others", value: 0 },
    ];

    const getProfessionLabel = (value) => {
        // console.log("value", value);

        const prof = profession.find((p) => p.value === value);
        return prof ? prof.label : "Unknown"; // Default to "Unknown" if no match is found
    };



    return (
        <div className="font-base-font flex flex-col lg:flex-row items-center lg:items-start gap-8 p-6 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-10">
            <Helmet>
                <title>Account Settings - Customize Your Foodimetric Experience</title>
                <meta name="description"
                    content="Foodimetric is your AI-powered nutrition companion, helping you track and improve your diet with advanced tools. Explore our food database, nutrient search, and BMI calculator—trusted across Africa and Nigeria for smarter health choices." />
            </Helmet>
            {/* Profile Picture Section */}
            <div className="flex flex-col items-center w-1/4 xs:w-1/2 md:w-1/4">
                {profileDetails.profilePicture ? (
                    <img
                        className="w-32 xs:w-64 md:w-32 md:h-32 rounded-full object-cover border-4 border-green-600"
                        // src={`${FOODIMETRIC_HOST_URL}${profileDetails?.profilePicture}`}
                        src={profileDetails?.profilePicture?.startsWith("http") ? profileDetails.profilePicture : `${FOODIMETRIC_HOST_URL}${profileDetails?.profilePicture}`}
                        alt="Profile"
                    />
                ) : (
                    <Avatar
                        className="w-32 xs:w-64 md:w-32 md:h-32 border-4 border-green-600"
                        alt="Profile"
                    />
                )}

                {/* Custom Upload Image Button */}
                <label
                    htmlFor="upload-image"
                    className=" sm:w-[70%] mt-3 text-sm text-gray-600 cursor-pointer bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
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
                    <button onClick={handleSaveChanges} disabled={isLoading} className="py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors">
                        {isLoading ? (
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                        ) : (
                            'Save Changes'
                        )}
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
                                disabled={loading}
                                className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteAccount}
                                disabled={loading}
                                className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                {loading ? (
                                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
                                ) : (
                                    '  Confirm Deletion'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserSettings;