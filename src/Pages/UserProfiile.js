import React, { useDeferredValue, useState } from 'react';
import './pages.css'
import { useNavigate } from 'react-router-dom'; // Assuming you use React Router for routing
import toast from 'react-hot-toast';
import { useAuthContext } from '../Context/AuthContext';

const UserProfile = () => {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("foodie-user"))
    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState(`${userData.firstName} ${userData.lastName}`);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState('********');
    const userStatus = useDeferredValue('Active');
    const subscriptionInfo = useDeferredValue('Freemium');
    const [profileImage, setProfileImage] = useState(localStorage.getItem('userProfileImage') || null);
    const {setStatus} = useAuthContext()
    // const handleEditClick = () => {
    //     setIsEditing(!isEditing);
    // };

    const handleLogoutClick = () => {
        // Clear the token from localStorage
        localStorage.clear();
        setIsEditing(false);
        // Show a toast notification that the user has been logged out
        toast.success('You have been logged out.');
        setStatus("unauthenticated");
        navigate('/login'); 
      };
      

    const handleSubscribeClick = () => {
        // Handle subscribing to a new plan here
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
          // Read the selected file as a data URL
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageDataUrl = e.target.result;
            setProfileImage(imageDataUrl);
    
            // Save the image in localStorage
            localStorage.setItem('userProfileImage', imageDataUrl);
          };
          reader.readAsDataURL(file);
        }
    };

    return (
        <div className='user-container'>
            <div className="user-profile">
                <div className="profile-header">
                    <div className="profile-image">
                        <label htmlFor="profile-image-input">
                            {profileImage ? (
                                <img src={profileImage} alt="User Profile" />
                            ) : (
                                <p className="profile-dummy">
                                    {`${(userData?.firstName?.charAt(0) || '').toUpperCase()} ${(userData?.lastName?.charAt(0) || '').toUpperCase()}`}
                                </p>
                            )}
                        </label>

                        <input
                            type="file"
                            id="profile-image-input"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="profile-info">
                        <div className='user-name'>
                            <input
                                type="text"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                readOnly={!isEditing}
                            />
                        </div>
                        <div className="email-address">

                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                readOnly={!isEditing}

                            />
                        </div>
                        <div className="password">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                readOnly={!isEditing}

                            />
                        </div>
                        {/* <div className="edit-icon" onClick={handleEditClick}>
                            {isEditing ? (
                                <span className="save-button">Save</span>
                            ) : (
                                <span className="edit-button">Edit <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                                    <path d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"></path>
                                </svg></span>
                            )}
                        </div> */}
                    </div>
                </div>
                <div className="user-status">
                    <p>Status: {userStatus}</p>
                    <p>Subscription: {subscriptionInfo}</p>
                </div>
                <div className="actions">
                    <button className="upgrade-button" onClick={handleLogoutClick}>
                        Logout
                    </button>
                    <button className="subscribe-button" onClick={handleSubscribeClick} disabled>
                        Subscribe
                    </button>
                </div>
            </div>
        </div>

    );
};

export default UserProfile;
