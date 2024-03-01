"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";

import style from "./cards.module.css";
import { API_BASE_URL } from "@/constants";

const Cards = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await fetch(
          API_BASE_URL.concat("/pets")
         );
         const jsonData = await response.json();
         setData(jsonData);
       } catch (error) {
         console.error("Error al obtener los datos:", error);
       }
     }
     fetchData();
   }, []);

  return (
    <div className={style.cardsContainer}>
      {Array.isArray(data) &&
        data.map((elem, index) => (
          <Card
            key={elem.index}
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
