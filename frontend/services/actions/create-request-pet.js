import { API_BASE_URL } from "@/constants";

export const createPetRequest = async (id, payload, token) => {
    return fetch(`${API_BASE_URL}/forms/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
    });
}