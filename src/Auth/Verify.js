import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FOODIMETRIC_HOST_URL } from '../utils/getData';

const Verify = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();

    // Function to extract token from URL
    const getTokenFromUrl = () => {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('token');
    };

    useEffect(() => {
        const verifyUser = async () => {
            const token = getTokenFromUrl(); // Get token from the URL

            if (!token) {
                setMessage('Invalid verification link.');
                setLoading(false);
                return;
            }

            try {
                const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/verify-user/${token}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const data = await response.json();
                
                if (response.ok) {
                    setUserName(data?.payload?.payload?.firstName); // Assuming user's first name is returned
                    setMessage('Your account has been successfully verified!');
                } else {
                    setMessage(data.message || 'Failed to verify your account.');
                }
            } catch (error) {
                setMessage('An error occurred during verification. Please try again.');
            }

            setLoading(false);
        };

        verifyUser();
    }, []);

    if (loading) {
        return <p>Verifying...</p>;
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Hello {userName}!</h1>
            <p>{message}</p>
            {message === 'Your account has been successfully verified!' && (
                <button onClick={() => navigate('/login')} className='create_acct' style={{ margin: '0 auto', width: '300px', marginTop: '20px'}}>
                    Login
                </button>
            )}
        </div>
    );
};

export default Verify;
