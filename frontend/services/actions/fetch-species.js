import { API_BASE_URL } from "@/constants";

export const fetchPetsSpecies = async () => {
    const response = await fetch(`${API_BASE_URL}/pets/species`);

    if (response.status !== 200) {
        return null;
    }
    
    const data = await response.json();
    return data;
}