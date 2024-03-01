import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';


import logo from "./../public/images/Group 3.png";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <Image src={logo} alt="logo" />{" "}
      </div>
      <nav className={style.navegacion}>
        <div className={`${style.contenedor} ${style.explorar}`}>
          <h6 className={style.h6}>Explorar</h6>
          <div className={style.columna}>
            <Link href="/inicio">Inicio</Link>
            <Link href="/sobreNosotros">Sobre Nosotros</Link>
            <Link href="/adoptame">Adoptame</Link>
            <Link href="/contactanos">Contactanos</Link>

          </div>
        </div>
        <div className={style.contenedor}>
          <h6 className={style.h6}>Links</h6>
          <div className={style.columna}>
            <Link href="/inicio">FAQs</Link>
            <Link href="/ayuda">Ayuda</Link>
            <Link href="/politicaDePrivacidad">Politica de privacidad</Link>
            <Link href="/terminosYCondiciones">Terminos y condiciones</Link>
          </div>
        </div>
        <div className={style.contenedor}>
          <h6 className={style.h6}>Contacto</h6>
          <div> <MdLocationOn color="red" />
            <p> Avenida Siempreviva 742, Bs. As.</p>
          </div>
          <div>
            <AiOutlineMail color="red" />
            <p> patitasfelices@gmail.com</p>
          </div>
          <div>
            <MdPhone color="red" />
            <p> (+52)11 6151-3562</p>
          </div>

        </div>
        <div className={style.contenedor}>
          <h6 className={style.h6}>Seguinos en nuestras Redes</h6>

          <div>
            <IoLogoFacebook color="red" />

            <FaTwitter color="red" />
            <FaInstagram color="red" />
          </div>
          <div>
            <div>
              <input type="text" />

              <FaEnvelope color="red" />
            </div>
            <button className={style.boton}>Subscribirse</button>


          </div>
        </div>
      </nav>

      <div>

        <p className={style.parrafo}>Todos los derechos reservados</p>
      </div>
    </footer>
  );
}
