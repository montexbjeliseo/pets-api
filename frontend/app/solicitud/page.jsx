'use client';

import { LabeledInput } from "@/components/LabeledInputs"
import { LabeledRadio } from "@/components/LabeledRadio"
import { ReduxProvider } from "@/providers/redux-provider"

import style from "./solicitud.module.css";
import { Montserrat } from "next/font/google";
import { UserIcon } from "@/icons/UserIcon";
import { AtIcon } from "@/icons/AtIcon";
import { PhoneIcon } from "@/icons/PhoneIcon";
import { AddLocationIcon } from "@/icons/AddLocationIcon";
import { MyLocationIcon } from "@/icons/MyLocationIcon";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "@/services/actions/fetch-user-profile";
import { useRouter } from "next/navigation";
import { setToken } from "@/slices/authSlice";
import { createPetRequest } from "@/services/actions/create-request-pet";
import { Loader } from "@/components/Loader";
import { MessageAlert } from "@/components/MessageAlert";

const montserrat = Montserrat({
    weight: ['600'],
    styles: ['normal'],
    subsets: ["latin"]
});

export const Page = ({searchParams}) => {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [success, setSuccess] = useState(false);

    const [currentUser, setCurrentUser] = useState(null);

    const token = useSelector((state) => state.auth.token);

    const router = useRouter();

    const dispatch = useDispatch();

    console.log(searchParams);

    const goToLogin = () => {
        router.push("/ingreso?next=/solicitud?pet_id=" + searchParams.pet_id);
    }

    useEffect(() => {
        
        const validateToken = async () => {
            const response = await fetchUserProfile(token);

            if (response.ok) {
                const data = await response.json();
                setCurrentUser(data);
            } else {
                dispatch(setToken(null));
                goToLogin();
            }
        }

        if (token) {
            validateToken();
        } else {
            goToLogin();
        }

    }, [token]);

    const handleSubmit = async (event) => {
        
        event.preventDefault();

        setLoading(true);

        console.log("Intento:", event.target);

        const payload = Object.fromEntries(new FormData(event.target));

        try {
            const response = await createPetRequest(searchParams.pet_id, payload, token);
            if (response.ok) {
                setSuccess(true);
                setLoading(false);
            } else {
                setError("Se ha producido un error");
                setLoading(false);
            }
        } catch (error) {
            setError("Comprueba tu conexión a internet");
            setLoading(false);
        }
    }

    const done = () => {
        setSuccess(false);
        setError(null);
        setSuccess(false);
        router.push("/adopcion");
    }

    return (
        <main className={style.main}>

            <h1 className={style.title + ' ' + montserrat.className}>Formulario de adopción</h1>

            <p className={style.subtitle}>Rellena todos los campos para que podamos revisar tu solicitud de adopción y ponernos en contacto</p>

            <form className={style.form} onSubmit={handleSubmit}>

                <LabeledInput
                    label="Nombre"
                    name="firstname"
                    type="text"
                    placeholder="Ingrese su nombre"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={
                        <UserIcon
                            color="#ff0000"
                        />
                    }
                />

                <LabeledInput
                    label="Apellido"
                    name="lastname"
                    type="text"
                    placeholder="Ingrese su apellido"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={
                        <UserIcon
                            color="#ff0000"
                        />
                    }
                />

                <LabeledInput
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Ingrese su email"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={<AtIcon color="#ff0000" />}
                />

                <LabeledInput
                    label="Telefono"
                    name="phone"
                    type="tel"
                    placeholder="Ingrese su teléfono"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={<PhoneIcon color="#ff0000" />}
                />

                <LabeledInput
                    label="Ciudad"
                    name="city"
                    type="text"
                    placeholder="Ingrese su ciudad"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={<AddLocationIcon color="#ff0000" />}
                />

                <LabeledInput
                    label="Provincia"
                    name="province"
                    type="text"
                    placeholder="Ingrese su provincia"
                    width={"428px"}
                    maxLength={20}
                    required
                    icon={<MyLocationIcon color="#ff0000" />}
                />

                <LabeledRadio
                    label="¿Tiene hijos?"
                    name="kids"
                    width={"428px"}
                    options={[
                        { text: "Sí", value: "true" },
                        { text: "No", value: "false" },
                    ]}
                />

                <LabeledRadio
                    label="¿Tiene otras mascotas?"
                    name="pets"
                    width={"428px"}
                    options={[
                        { text: "Sí", value: "true" },
                        { text: "No", value: "false" },
                    ]}
                />

                <button type="submit" className={style.button}>Enviar formulario</button>

            </form>
            {loading && <Loader />}
            {error && <MessageAlert message={error} title="Error" handleClose={() => setError(null)} />}
            {success && <MessageAlert message="Formulario enviado correctamente" title="Exito" handleClose={done} />}
        </main>
    )
}

export default function (props) {
    return (
        <ReduxProvider>
            <Page {...props} />
        </ReduxProvider>
    )
}