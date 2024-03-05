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

const montserrat = Montserrat({
    weight: ['600'],
    styles: ['normal'],
    subsets: ["latin"]
});

export const Page = () => {
    return (
        <main className={style.main}>

            <h1 className={style.title + ' ' + montserrat.className}>Formulario de adopción</h1>

            <p className={style.subtitle}>Rellena todos los campos para que podamos revisar tu solicitud de adopción y ponernos en contacto</p>

            <form className={style.form}>

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

                <button className={style.button}>Enviar formulario</button>

            </form>

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