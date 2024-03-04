import { API_BASE_URL } from "@/constants";

export const fetchPetsCities = async () => {
    const response = await fetch(`${API_BASE_URL}/pets/cities`);
    
    if (response.status !== 200) {
        return null;
    }

    const data = await response.json();
    return data;
}