import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../Context/AuthContext';

const ProfileTab = () => {
    const [user, setUser] = useState({});
    const {status} = useAuthContext();

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
                {
                    user && 
                    <Link to={'/profile'} className="initials" style={{ textDecoration: "none" }} >
                        {`${user?.firstName?.charAt(0).toUpperCase()} ${user?.lastName?.charAt(0).toUpperCase()}`}
                    </Link>
                }
            </div>


        </div>
    );
}

export default ProfileTab;