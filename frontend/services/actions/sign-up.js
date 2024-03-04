import { API_BASE_URL } from "@/constants";

export const signUp = async (payload) => {
    return fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
}