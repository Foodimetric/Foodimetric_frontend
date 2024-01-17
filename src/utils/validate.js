import { FOODIMETRIC_HOST_URL } from './getData';

export async function checkAuthenticationStatus() {
    try {
        const accessToken = JSON.parse(localStorage.getItem("Foodie-token"));

        if (!accessToken) {

            return "unauthenticated";
        }

        const response = await fetch(`${FOODIMETRIC_HOST_URL}/users/logged-user`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${accessToken}`,
            },
        });

        if (!response.ok) {
            return "unauthenticated";
        }

        const data = await response.json();
        if (data?.payload?._id) {
            return "authenticated";
        } else {
            return "unauthenticated";
        }
    } catch (error) {
        console.error("Error checking authentication status:", error);
        return "unauthenticated";
    }
}