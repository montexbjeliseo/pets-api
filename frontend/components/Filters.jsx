'use client';

import React, { useCallback, useEffect, useState } from "react";

import style from "./filters.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { fetchPetsCities } from "@/services/actions/fetch-cities";
import { fetchPetsSpecies } from "@/services/actions/fetch-species";

const Filters = () => {

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [cities, setCities ] = useState([]);
  const [species, setSpecies ] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await fetchPetsCities();
      setCities(data ?? []);
    }

    fetchCities();

    const fetchSpecies = async () => {
      const data = await fetchPetsSpecies();
      setSpecies(data ?? []);
    }

    fetchSpecies();

  }, []);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString())

      if (!value) {
        params.delete(name)
      } else {
        params.set(name, value)
      }

      return params.toString()
    },
    [searchParams]
  );

  const handleFilter = (key, value) => {
    const newURI = pathname + "?" + createQueryString(key, value);
    router.push(newURI);
  }

  const handleSpeciesFilterChange = (event) => handleFilter("species", event.target.value);
  const handleSizeFilterChange = (event) => handleFilter("size", event.target.value);
  const handleAgeFilterChange = (event) => handleFilter("age", event.target.value);
  const handleGenderFilterChange = (event) => handleFilter("gender", event.target.value);
  const handleCityFilterChange = (event) => handleFilter("city", event.target.value);

  return (
    <div className={style.filterContainer}>
      <div>
        <p className={style.filterName}>ESPECIE</p>
        <select 
        onChange={handleSpeciesFilterChange}
        defaultValue={searchParams.get("species")}>
          <option value="">Cualquiera</option>
          {species.map((specie) => (
            <option key={specie} value={specie} className={style.capitalize}>{specie}</option>
          ))}
        </select>
      </div>
      <div>
        <p className={style.filterName}>TAMAÑO</p>
        <select
          className={style.select}
          onChange={handleSizeFilterChange}
          defaultValue={searchParams.get("size")}>
          <option value="">Cualquiera</option>
          <option value="G">Grande</option>
          <option value="M">Mediano</option>
          <option value="P">Chico</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>EDAD</p>
        <select
          onChange={handleAgeFilterChange}
          defaultValue={searchParams.get("age")}>
          <option value="">Cualquiera</option>
          <option value="cachorro">Cachorro</option>
          <option value="joven">Joven</option>
          <option value="adulto">Adulto</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>GENERO</p>
        <select
          onChange={handleGenderFilterChange}
          defaultValue={searchParams.get("gender")}>
          <option value="">Cualquiera</option>
          <option value="M">Macho</option>
          <option value="F">Hembra</option>
        </select>
      </div>
      <div>
        <p className={style.filterName}>LOCALIDAD</p>
        <select 
        onChange={handleCityFilterChange}
        defaultValue={searchParams.get("city")}>
          <option value="">Cualquiera</option>
          {cities.map((city) => (
            <option key={city} value={city} className={style.capitalize}>{city}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;



