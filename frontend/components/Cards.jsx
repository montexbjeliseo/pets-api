'use server';

import { fetchPets } from "@/services/actions/fetch-pets";
import Card from "./Card";

import style from "./cards.module.css";

const Cards = async ({searchParams}) => {

  const data = await fetchPets(searchParams);

  if(!Array.isArray(data) || data.length === 0){
    return (
      <div className={style.cardsContainer}>
        <strong>No hay mascotas disponibles con esta busqueda</strong>
      </div>
    )
  }

  return (
    <div className={style.cardsContainer}>
      {Array.isArray(data) &&
        data.map((elem) => (
          <Card
            key={elem.id}
            imagen={elem.images}
            nombre={elem.name}
            raza={elem.species}
            edad={elem.age}
            tamano={elem.size}
            genero={elem.gender}
            localidad={elem.city}
          />
        ))}
    </div>
  );
};

export default Cards;
