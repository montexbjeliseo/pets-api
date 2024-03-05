import { API_BASE_URL } from "@/constants";

export const publishPet = async (token, payload, image) => {
    return fetch(`${API_BASE_URL}/pets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            ...payload,
            images: [image],
        }),
    });
}