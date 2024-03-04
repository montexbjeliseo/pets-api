export const fetchPetsSpecies = async () => {
    const response = await fetch(`${API_BASE_URL}/api/pets/species`);

    if (response.status !== 200) {
        return null;
    }
    
    const data = await response.json();
    return data;
}