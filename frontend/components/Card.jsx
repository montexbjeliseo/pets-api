import React from "react";
import Image from "next/image";

import style from "./card.module.css";

const Card = ({ imagen, nombre, raza, edad, tamano, genero, localidad }) => {

  const sizeToText = (size) => {
    switch (size) {
      case "P":
        return "Pequeño";
      case "M":
        return "Mediano";
      case "G":
        return "Grande";
      default:
        return "Desconocido";
    }
  }

  const genderToText = (gender) => {
    switch (gender) {
      case "M":
        return "Masculino";
      case "F":
        return "Femenino";

      default:
        return "Desconocido";
    }
  }

  const ageToText = (age) => {
    if (age < 12) {
      return "Cachorro";
    } else if (age < 18) {
      return "Joven";
    } else {
      return "Adulto";
    }
  }

  return (
    <div className={style.cardContainer}>
      <Image
        width={500}
        height={200}
        src={imagen[0]}
        alt="mascota"
        objectFit="cover"
        className={style.imagenAdopcion}
      />
      <div className={style.dataContainer}>
        <h5 className={style.name}>{nombre}</h5>
        <div className="p-2">
          <p className="font-bold">{raza}</p>
          <p className={style.description}>
            <span>{ageToText(edad)}</span>
            <span>{sizeToText(tamano)}</span>
            <span>{genderToText(genero)}</span>
          </p>
          <p className="font-bold">{localidad}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
