import { API_BASE_URL } from "@/constants";

export const fetchUsers = (token) => {
    return fetch(`${API_BASE_URL}/auth/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}