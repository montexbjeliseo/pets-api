import { API_BASE_URL } from "@/constants";

export const signIn = async (payload) => {
    return fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
}