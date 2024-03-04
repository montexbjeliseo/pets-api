import { API_BASE_URL } from "@/constants"

export const fetchUserProfile = async (token) => {
    return fetch(`${API_BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    })
}