import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProfileTab = ({ status }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (status) {
            const userData = JSON.parse(localStorage.getItem("foodie-user"));
            setUser(userData);
        }

        return () => {
        }
    }, [status]);


    return (
        <div className="profile-tab">
            <div className="profile-circle">
                <Link to={'/profile'} className="initials" style={{ textDecoration: "none" }} >
                    {`${user?.user?.firstName?.charAt(0).toUpperCase()} ${user?.user?.lastName?.charAt(0).toUpperCase()}`}
                </Link>
            </div>


        </div>
    );
}

export default ProfileTab;