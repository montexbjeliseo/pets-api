import React from "react";

import Filters from "@/components/Filters";
import Cards from "@/components/Cards";
import Adopcion from "@/components/parrafoAdopcion";

const page = ({searchParams}) => {

  return (
    <div>
      <Adopcion />
      <Filters />
      <h3 className="font-bold text-4xl px-5 mx-auto w-[1312px] mb-16 font-monserrat">Mascotas en Adopción</h3>
      <Cards searchParams={searchParams} />
    </div>
  );
};

export default page;
