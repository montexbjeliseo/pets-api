import React from "react";
import Nosotros from "@/components/nosotros";
import Nuestroequipo from "@/components/nuestroequipo";
import Nuestrosvalores from "@/components/nuestrosvalores";
import style from "./nosotros.module.css";

const page = () => {
  return (
    <main className={style.contenedor}>
      <Nosotros />
      <Nuestroequipo />
      <Nuestrosvalores />
    </main>
  );
};

export default page;