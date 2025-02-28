import { FOODIMETRIC_HOST_URL } from "../Utils/host";

class AuthService {
    static async login(email, password) {
        return AuthService.fetchWrapper(`${FOODIMETRIC_HOST_URL}/users/sign-in`, "POST", { email, password });
    }

    static async register(userData) {
        return AuthService.fetchWrapper(`${FOODIMETRIC_HOST_URL}/users/sign-up`, "POST", userData);
    }

    static async fetchWrapper(url, method, body) {
        try {
            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Request failed");
            return data;
        } catch (error) {
            // console.error(`AuthService error: ${error.message}`);
            throw error;
        }
    }
}
