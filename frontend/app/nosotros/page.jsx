import React from "react";
import Nosotros from "@/components/nosotros";
import Nuestroequipo from "@/components/nuestroequipo";
import Nuestrosvalores from "@/components/nuestrosvalores";

import Footer from "@/components/footer";


const page = () => {
  return (
    <div>
      <Nosotros/>
      <Nuestroequipo/>
      <Nuestrosvalores/>
      <Footer/>

    </div>
  );
};

export default page;