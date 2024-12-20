import React, { useEffect, useState } from 'react';
import { FOODIMETRIC_HOST_URL } from '../../Utils/host';

const Users = () => {
    const [emails, setEmails] = useState([]);

    const getUsers = async function () {
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/users/emails`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            console.log("data", data.payload);
            setEmails(data.payload);

            // Write data to a txt file
            writeEmailsToTxtFile(data.payload);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const writeEmailsToTxtFile = (emailsData) => {
        // Extract email strings from the array of objects
        const emailStrings = emailsData.map(item => item.email);
        const blob = new Blob([emailStrings.join('\n')], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'emails.txt';
        link.click();

        // Clean up the object URL
        URL.revokeObjectURL(url);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <ul>
            {emails.map((h, index) => (
                <li key={index}>{h.email}</li>
            ))}
        </ul>
    );
};

export default Users;