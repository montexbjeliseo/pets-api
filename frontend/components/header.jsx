'use client';
import Image from "next/image";
import Link from "next/link";

import logo from "./../public/images/Group 3.png";
import stlye from "./header.module.css";

import dynamic from "next/dynamic";
import { NavIcon } from "@/icons/NavIcon";
import { useState } from "react";

const BotonesSesionDinamic = dynamic(() => import('./BotonesSesion'), { ssr: false });

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={stlye.header}>
      <div className={stlye.navBarContainer}>
        <Image src={logo} width="300" height="40" alt="imagen logotipo" />
        <div className={stlye.menuItems + " " + (showMenu ? stlye.showMenu : "")}>
          <nav className={stlye.navButtonContainer}>
            <Link href="/" className={stlye.navButton}>Inicio</Link>
            <Link href="/nosotros" className={stlye.navButton}>Sobre Nosotros</Link>
            <Link href="/adopcion" className={stlye.navButton}>Adoptame</Link>
            <Link href="/contactanos" className={stlye.navButton}>Contactanos</Link>
          </nav>
          <nav className={stlye.sessionButtonsContainer}>
            <BotonesSesionDinamic />
          </nav>
        </div>

        <button className={stlye.menuButton} onClick={() => setShowMenu(!showMenu)}>
          <NavIcon />
        </button>
      </div>
    </header>
  );
}
