export const fetchPetsCities = async () => {
    const response = await fetch(`http://localhost:10000/api/pets/cities`);

    if (response.status !== 200) {
        return null;
    }
    
    const data = await response.json();
    return data;
}