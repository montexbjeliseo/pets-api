import { AtIcon } from "@/icons/AtIcon";
import { LabeledInput } from "./LabeledInputs";
import style from "./formularioregistro.module.css"
import Image from "next/image";
import { UserIcon } from "@/icons/UserIcon";
import { AddLocationIcon } from "@/icons/AddLocationIcon";
import { MyLocationIcon } from "@/icons/MyLocationIcon";
import { PostOfficeIcon } from "@/icons/PostOfficeIcon";
import { PASSWORD_PATTERN_STRING } from "@/constants";


export default function formularioregistro({ handleSubmit }) {

    const handleValidSubmit = (e) => {
        
        e.preventDefault();

        const payload = Object.fromEntries(new FormData(e.target));

        console.log(payload);

        if(payload.email !== payload.email2) {
            alert("Los correos no coinciden");
            return;
        }

        if(payload.password !== payload.password2) {
            alert("Las contraseñas no coinciden");
            return;
        }
        
        //handleSubmit(e);
    };

    return (
        <main className={style.container}>
            <div>
                <p className={style.ingresar}>REGISTRARSE</p>
                <p className={style.mensaje}>Crea tu cuenta y encuentra tu compañero ideal</p>
            </div>
            <form onSubmit={handleValidSubmit}>
                <div className={style.inputs}>
                    <LabeledInput
                        label="Nombre"
                        name="firstname"
                        type="text"
                        icon={<UserIcon />}
                        placeholder="Ingrese aquí su nombre"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Apellido"
                        name="lastname"
                        type="text"
                        icon={<UserIcon />}
                        placeholder="Ingrese aquí su apellido"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Email"
                        name="email"
                        type="email"
                        icon={<AtIcon color="#ff0000" />}
                        placeholder="Ingrese aquí su email"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Confirmar email"
                        name="email2"
                        type="email"
                        icon={<AtIcon color="#ff0000" />}
                        placeholder="Confirme aquí su email"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Contraseña"
                        name="password"
                        type="password"
                        icon={<AtIcon color="#ff0000" />}
                        placeholder="Ingrese aquí su contraseña"
                        width={'428px'}
                        pattern={PASSWORD_PATTERN_STRING}
                        minLength={8}
                        maxLength={15}
                    />

                    <LabeledInput
                        label="Confirmar contraseña"
                        name="password2"
                        type="password"
                        icon={<AtIcon color="#ff0000" />}
                        placeholder="Confirme aquí su contraseña"
                        width={'428px'}
                        pattern={PASSWORD_PATTERN_STRING}
                        minLength={8}
                        maxLength={15}
                    />

                    <LabeledInput
                        label="Ciudad"
                        name="city"
                        type="text"
                        icon={<AddLocationIcon color="#ff0000" />}
                        placeholder="Ingrese su ciudad"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Provincia"
                        name="province"
                        type="text"
                        icon={<MyLocationIcon color="#ff0000" />}
                        placeholder="Ingrese su provincia"
                        width={'428px'}
                        minLength={4}
                    />

                    <LabeledInput
                        label="Codigo postal"
                        name="code"
                        type="text"
                        icon={<PostOfficeIcon color="#ff0000" />}
                        placeholder="Ingrese su código postal"
                        width={'428px'}
                        minLength={4}
                    />
                </div>
                <div className={style.formBottom}>
                    <div className={style.buttons}>

                        <label>
                            <input type="checkbox" name="terms" required value={"agree"} /> <span>He leído y aceptos los términos y condiciones</span>
                        </label>

                        <button className={style.botonrojo}>Registarse</button>
                        <div className={style.contenedorlinea}>
                            <span className={style.circulo}>o</span>
                        </div>

                        <div>
                            <label className={style.ingresarred}>Ingresar con Google</label>
                        </div>
                        <div>
                            <label className={style.ingresarred}>Ingresar con Facebook</label>
                        </div>
                    </div>
                    <Image className={style.logo} src="/images/imagenregistro.png" width={873} height={570} alt="logo-perro" />
                </div>

            </form>
        </main >

    );
}