import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";
import { MdLocationOn, MdPhone } from 'react-icons/md';
import { FaEnvelope, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';


import logo from "./../public/images/Group 3.png";
import { FbIcon } from "@/icons/FbIcon";
import { XIcon } from "@/icons/XIcon";
import { IgIcon } from "@/icons/IgIcon";
import { EnvelopeFilledIcon } from "@/icons/EnvelopeFilledIcon";
import { GtIcon } from "@/icons/GtIcon";

export default function Footer() {
  return (
    <footer className={style.footer}>

      <div className={style.wrapper}>

        <div className={style.logo}>
          <Image src={logo} alt="logo" />
        </div>
        <nav className={style.navegacion}>
          {/* Explorar */}
          <div className={`${style.contenedor} ${style.explorar}`}>
            <h6 className={style.h6}>Explorar</h6>
            <div className={style.columna}>
              <Link href="/inicio">Inicio</Link>
              <Link href="/sobreNosotros">Sobre Nosotros</Link>
              <Link href="/adoptame">Adoptame</Link>
              <Link href="/contactanos">Contactanos</Link>
            </div>
          </div>
          {/* Links */}
          <div className={style.contenedor}>
            <h6 className={style.h6}>Links</h6>
            <div className={style.columna}>
              <Link href="/inicio">FAQs</Link>
              <Link href="/ayuda">Ayuda</Link>
              <Link href="/politicaDePrivacidad">Politica de privacidad</Link>
              <Link href="/terminosYCondiciones">Terminos y condiciones</Link>
            </div>
          </div>
          {/* Contacto */}
          <div className={style.contenedor}>
            <h6 className={style.h6}>Contacto</h6>
            <div className={style.columna}>
              <div className="flex items-center"> <MdLocationOn color="red" />
                <p> Avenida Siempreviva 742, Bs. As.</p>
              </div>
              <div className="flex items-center">
                <AiOutlineMail color="red" />
                <p> patitasfelices@gmail.com</p>
              </div>
              <div className="flex items-center">
                <MdPhone color="red" />
                <p> (+52)11 6151-3562</p>
              </div>
            </div>
          </div>
          {/* Subscribirse */}
          <div className={style.contenedor}>
            <h6 className={style.h6}>Seguinos en nuestras Redes</h6>

            <div className="flex items-center justify-center gap-6 py-6 w-full">
              <FbIcon color="#ff0000" />
              <XIcon color="#ff0000" />
              <IgIcon color="#ff0000" />
            </div>
            <div>
              <div className={style.subscribe}>
                <EnvelopeFilledIcon color="#ff0000" />
                <input className={style.subscribeInput} name="email" placeholder="Ingrese su email" type="text" />
                <button className={style.subscribeButton}>Suscribirse <GtIcon color={"#ffffff"} /></button>
              </div>

            </div >

          </div >
        </nav>
        <div>
          <p className={style.parrafo}>Todos los derechos reservados</p>
        </div>
      </div>
    </footer >
  );
}
