import { API_BASE_URL } from "@/constants";

export const fetchForms = (token) => {
    return fetch(`${API_BASE_URL}/forms`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
}