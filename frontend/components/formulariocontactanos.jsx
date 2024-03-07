
'use client'
import { LabeledInput } from "@/components/LabeledInputs";
import { Montserrat } from "next/font/google";
import { LabeledTextarea } from "@/components/LabeledTextarea";
import { MessageAlert } from "@/components/MessageAlert";
import { setToken } from "@/slices/authSlice";
import { ReduxProvider } from "@/providers/redux-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import style from "./formulariocontactanos.module.css";

const montserrat = Montserrat({
    weight: ['600'],
    styles: ['normal'],
    subsets: ["latin"]
});

export const Page = () => {

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();



    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const payload = Object.fromEntries(formData);

        // Validación de nombre
        if (!payload.name) {
            setError("Por favor, ingresa tu nombre y apellido");
            return;
        }

        // Validación de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!payload.email || !emailRegex.test(payload.email)) {
            setError("Por favor, ingresa un email válido");
            return;
        }

        // Validación de mensaje
        if (!payload.message) {
            setError("Por favor, ingresa un mensaje");
            return;
        }

        // Aquí iría la lógica de publicación si la validación es exitosa

        setSuccess(true);
    }

    return (
        <main className={style.main}>
            <h1 className={style.title + ' ' + montserrat.className}>CONTACTÁNOS</h1>
            <p className={style.subtitle}>Tienes alguna consulta, envíanos un mensaje.</p>
            <div>

                <div className={style.container}>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <LabeledInput
                            label="Nombre y apellido"
                            name="name"
                            type="text"
                            placeholder="Ingresa su nombre y apellido"
                            width={"428px"}
                            maxLength={20}
                            required
                        />

                        <LabeledInput
                            label="Email"
                            name="email"
                            type="text"
                            placeholder="@ Ingrese su email"
                            width={"428px"}
                            maxLength={20}
                            required
                        />

                        <LabeledTextarea
                            name="message"
                            label="Mensaje"
                            width={`${428 * 2 + 10}px`}
                            height={"246px"}
                            placeholder="Escriba su mensaje"
                            required
                        />

                        <button className={style.button}>Enviar mensaje</button>
                    </form>

                    <div className={style.columna2}>
                        <div className={style.mapa}>
                            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q='Avenida%20Siempreviva%20742,%20Buenos%20Aires'+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>
                        <div className={style.cajainformacion}>
                            <p className={`${style.informacion} text-white font-semibold text-2xl`}>INFORMACIÓN</p>
                            <p className={style.text}>Avenida Siempreviva 742, Bs. As.</p>
                            <p className={style.text}>patitasfelices@gmail.com</p>
                            <p className={style.text}>(+52) 11 6151-3562</p>
                        </div>
                    </div>
                </div>
            </div>





            <div className={style.foto}>
                <Image className={style.fotoperro} src="/images/contactanos.png" width={1136} height={484} alt="logo-perro" />
            </div>
        </main>

    )
}

export default function () {
    return (
        <ReduxProvider>
            <Page />
        </ReduxProvider>
    )
}
