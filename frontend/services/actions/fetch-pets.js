'use server';

import { API_BASE_URL } from "@/constants";

export const fetchPets = async (searchParams) => {
    const url = new URL(`${API_BASE_URL}/pets`);
    const params = new URLSearchParams(searchParams).toString();

    const response = await fetch(url + "?" + params, {
        cache: "no-store",
    });

    if(response.status !== 200) {
        return [];
    }
    const data = await response.json();
    return data;
}