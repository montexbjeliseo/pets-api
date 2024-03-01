import React from "react";

import Filters from "@/components/Filters";
import Cards from "@/components/Cards";
import Footer from "@/components/footer";
import Adopcion from "@/components/parrafoAdopcion";

const page = () => {
  return (
    <div>
      <Adopcion />
      <Filters />
      <h3 className="font-bold text-4xl px-5 mx-auto w-[1312px] mb-16 font-monserrat">Mascotas en Adopcion</h3>
      <Cards />
      <Footer />
    </div>
  );
};

export default page;
