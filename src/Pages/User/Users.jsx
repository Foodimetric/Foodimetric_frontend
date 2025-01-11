import React, { useCallback, useEffect, useState } from "react";
import { FOODIMETRIC_HOST_URL } from "../../Utils/host";

const Users = () => {
    const [users, setUsers] = useState([]);

    const writeUsersToCsvFile = useCallback((usersData) => {
        // Create CSV content
        const csvHeaders = "Name,Email\n";
        const csvRows = usersData.map(item => `${item.firstName || "N/A"},${item.email}`).join("\n");
        const csvContent = csvHeaders + csvRows;

        // Create a blob with the CSV content
        const blob = new Blob([csvContent], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        // Create a download link and trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.download = "users.csv";
        link.click();

        // Clean up the object URL
        URL.revokeObjectURL(url);
    }, []); // Dependency array is empty because this function doesn't rely on external variables

    const getUsers = useCallback(async () => {
        try {
            const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/users/emails`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            console.log("data", data.payload);
            setUsers(data.payload);

            // Write data to a CSV file
            writeUsersToCsvFile(data.payload);
        } catch (error) {
            console.error("Error:", error);
        }
    }, [setUsers, writeUsersToCsvFile]);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>{user.firstName || "N/A"} - {user.email}</li>
            ))}
        </ul>
    );
};

export default Users;