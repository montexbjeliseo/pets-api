'use server';

import { API_BASE_URL } from "@/constants";

export const fetchPets = async (searchParams) => {
    const url = new URL(`${API_BASE_URL}/pets`);
    const params = new URLSearchParams(searchParams);

    if(params.get("age")) {

        const ageValue = params.get("age");

        params.delete("age");

        if(ageValue === "cachorro") {
            params.append("min_age", "0");
            params.append("max_age", "11");
        } else if(ageValue === "joven") {
            params.append("min_age", "12");
            params.append("max_age", "17");
        } else if(ageValue === "adulto") {
            params.append("min_age", "18");
            params.append("max_age", "500");
        }
    }

    console.log("Fetch params:", params);

    const response = await fetch(url + "?" + params.toString(), {
        cache: "no-store",
    });

    if(response.status !== 200) {
        return [];
    }
    const data = await response.json();
    return data;
}