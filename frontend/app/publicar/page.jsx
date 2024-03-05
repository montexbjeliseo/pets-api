'use client';

import { LabeledInput } from "@/components/LabeledInputs";
import { ReduxProvider } from "@/providers/redux-provider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import style from "./publicar.module.css";
import { Montserrat } from "next/font/google";
import { LabeledSelect } from "@/components/LabeledSelect";
import { PET_SIZES } from "@/constants";
import { LabeledRadio } from "@/components/LabeledRadio";
import { LabeledTextarea } from "@/components/LabeledTextarea";
import { ImageInput } from "@/components/ImageInput";
import { MessageAlert } from "@/components/MessageAlert";
import { publishPet } from "@/services/actions/publish-pet";
import { fetchUserProfile } from "@/services/actions/fetch-user-profile";
import { setToken } from "@/slices/authSlice";

const montserrat = Montserrat({
    weight: ['600'],
    styles: ['normal'],
    subsets: ["latin"]
});

export const Page = () => {

    const [error, setError] = useState(null);

    const [success, setSuccess] = useState(false);

    const [image, setImage] = useState(null);

    const router = useRouter();

    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    useEffect(() => {

        const validateProfile = async () => {
            const response = await fetchUserProfile(token);

            if (!response.ok) {
                dispatch(setToken(null));
            }
        }

        if (token) {
            validateProfile();
        }

        if(!token) {
            router.push("/ingreso", { next: { pathname: "/publicar" } });
        }
    }, [token]);

    const handleUploadImage = (url) => {
        setImage(url);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!image) {
            setError("Debes subir una imagen");
            return;
        }

        const formData = new FormData(event.target);

        const payload = Object.fromEntries(formData);

        const response = await publishPet(token, payload, image);

        if (response.ok) {
            setSuccess(true);
        } else {
            const data = await response.json();
            setError("Error al publicar la mascota");
        }
    }

    return (
        <main className={style.main}>
            <h1 className={style.title + ' ' + montserrat.className}>Publicar Mascota en Adopción</h1>
            <p className={style.subtitle}>Asegúrate de rellenar todos los campos para que la conozcan mejor</p>

            <div className={style.container}>
                <form className={style.form} onSubmit={handleSubmit}>
                    <LabeledInput
                        label="Nombre"
                        name="name"
                        type="text"
                        placeholder="Ingresa el nombre de la mascota"
                        width={"428px"}
                        maxLength={20}
                        required
                    />

                    <LabeledInput
                        label="Especie"
                        name="species"
                        type="text"
                        placeholder="Ingresa la especie de la mascota"
                        width={"428px"}
                        maxLength={20}
                        required
                    />

                    <LabeledInput
                        label="Raza"
                        name="breed"
                        type="text"
                        placeholder="Ingresa la raza de la mascota"
                        width={"428px"}
                        required
                    />

                    <LabeledInput
                        label="Edad"
                        name="age"
                        type="number"
                        placeholder="Ingresa la edad de la mascota en meses"
                        width={"428px"}
                        required
                    />

                    <LabeledSelect
                        label="Tamaño"
                        name="size"
                        width={"428px"}
                        placeholder="Ingresa el tamaño de la mascota"
                        options={PET_SIZES}
                    />

                    <LabeledRadio
                        label="Sexo"
                        name="gender"
                        width={"428px"}
                        options={[
                            { text: "Macho", value: "macho" },
                            { text: "Hembra", value: "hembra" },
                        ]}
                    />

                    <LabeledInput
                        label="Localidad"
                        name="city"
                        type="text"
                        placeholder="Ingresa la localidad de la mascota"
                        width={"428px"}
                        required
                    />

                    <LabeledRadio
                        label="Castrado"
                        name="neutered"
                        width={"428px"}
                        options={[
                            { text: "Sí", value: "true" },
                            { text: "No", value: "false" },
                        ]}
                    />

                    <LabeledTextarea
                        label="Información Adicional"
                        name="info"
                        width={`${428 * 2 + 10}px`}
                        height={"246px"}
                        placeholder="Describa sus características, personalidad, gustos, etc"
                    />

                    <button className={style.button}>Publicar Mascota</button>
                </form>

                <ImageInput onUploaded={handleUploadImage} />
            </div>

            {error && <MessageAlert title={"Error"} message={error} handleClose={() => setError(null)} /> }
            {success && <MessageAlert title={"Éxito"} message="Tu mascota ha sido publicada" handleClose={() => {setSuccess(false); router.push("/");}} /> }

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