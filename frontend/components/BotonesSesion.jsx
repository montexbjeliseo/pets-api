'use client';

import Link from "next/link";
import style from "./BotonesSesion.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "@/services/actions/fetch-user-profile";
import { ReduxProvider } from "@/providers/redux-provider";

export const BotonesSesion = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const token = useSelector((state) => state.auth.token);

    useEffect(() => {

        const validateProfile = async () => {
            const response = await fetchUserProfile(token);

            if (response.ok) {
                const data = await response.json();
                setCurrentUser(data);
            }
        }

        if (token) {
            validateProfile();
        }

    }, []);

    if (currentUser) {
        return (
            <>
                <Link href="/publicar" className={style.registerButton}>Publicar</Link>
                <Link href="/mi-perfil" className={style.loginButton}>{currentUser.firstname}</Link>
            </>
        )
    }

    return (
        <>
            <Link href="/registrarse" className={style.registerButton}>Registrarse</Link>
            <Link href="/ingreso" className={style.loginButton}>Ingresar</Link>
        </>
    )
}

export default function () {
    return (
        <ReduxProvider>
            <BotonesSesion />
        </ReduxProvider>
    )
}