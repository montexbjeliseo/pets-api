import { AtIcon } from "@/icons/AtIcon";
import { LabeledInput } from "./LabeledInputs";
import style from "./formularioregistro.module.css"
import Image from "next/image";
<<<<<<< HEAD
import { UserIcon } from "@/icons/UserIcon";
import { AddLocationIcon } from "@/icons/AddLocationIcon";
import { MyLocationIcon } from "@/icons/MyLocationIcon";
import { PostOfficeIcon } from "@/icons/PostOfficeIcon";
import { PASSWORD_PATTERN, PASSWORD_PATTERN_STRING } from "@/constants";
import { MessageAlert } from "./MessageAlert";
import { useState } from "react";
import { KeyIcon } from "@/icons/KeyIcon";
=======
import { FaUser, FaLock } from 'react-icons/fa';
import { MdMail, MdLocationOn } from 'react-icons/md';
>>>>>>> ce59e675ea31548e379a47ee98de896ffcef641a

export default function formularioregistro({ handleSubmit }) {

    const [message, setMessage] = useState(null);

    const handleValidSubmit = (e) => {
        
        e.preventDefault();

        const payload = Object.fromEntries(new FormData(e.target));

        if(payload.email !== payload.email2) {
            setMessage("Los correos no coinciden");
            return;
        }

        if(payload.password !== payload.password2) {
            setMessage("Las contraseñas no coinciden");
            return;
        }
        
        handleSubmit(e);
    };

    return (
<<<<<<< HEAD
        <main className={style.container}>
=======
        <main>

            <div class= "grid grid-cols-1 gap-4 p-4">
                <p className={style.ingresar}>REGISTRARSE</p>
                <br></br>
                <p className={style.mensaje}>Crea tu cuenta y encuentra tu compañero ideal</p>


                <br></br>
                <div className={style.primercolumna}>
                <FaUser color="red"/>
                    <p className={style.parrafo}>Nombre</p>
                    <div className={style.input}>
                        <label className={style.label} >Ingrese aquí su nombre</label>
                        <input
                            type="text"
                            id="nombre"
                        />
                    </div>

                    <br></br>
                    <MdMail color="red"/>
                    <p className={style.parrafo}>Email</p>
                    <div className={style.input}>
                        <label className={style.label} >Ingrese aquí su email</label>
                        <input
                            type="text"
                            id="emailInput"
                        />
                    </div>

                    <br></br>
                    <FaLock color="red"/>
                    <p className={style.parrafo}>Contraseña</p>

                    <div className={style.input}>
                        <label className={style.label}>Ingrese su contraseña</label>
                        <input
                            type="password"
                            id="passwordInput" />
                    </div>
                    <br></br>
                    <MdLocationOn color="red"/>

                    <p className={style.parrafo}>Ciudad</p>
                    <div className={style.input}>
                        <label className={style.label} > Ingrese su ciudad</label>
                        <input
                            type="text"
                            id="ciudadInput"
                        />
                    </div>

                    <br></br>



                    <p className={style.parrafo}>Codigo postal</p>
                    <div className={style.input}>
                        <label className={style.label} > Ingrese su codigo postal</label>
                        <input
                            type="number"
                            id="codigopostalInput"
                        />
                    </div>
                </div>

                <br></br>

                <div class= "grid grid-cols-1 gap-4 p-4">
                <FaUser color="red"/>

                <p className={style.parrafo}>Apellido</p>
                <div className={style.input}>
                    <label className={style.label} > Ingrese su apellido</label>
                    <input
                        type="text"
                        id="apellidoInput"
                    />
                </div>
                <br></br>
                <MdMail color="red"/>

                <p className={style.parrafo}>Email</p>
                <div className={style.input}>
                    <label className={style.label} > Confirme su email</label>
                    <input
                        type="text"
                        id="emailInput1"
                    />
                </div>
                <br></br>
                <FaLock color="red"/>
                <p className={style.parrafo}>Contraseña</p>

                <div className={style.input}>
                    <label className={style.label}>Confirme su contraseña</label>
                    <input
                        type="password"
                        id="passwordInpu1" />
                </div>

                <br></br>
                <p className={style.parrafo}>Provincia</p>

                <div className={style.input}>
                    <label className={style.label}>Ingrese su provincia</label>
                    <input
                        type="text"
                        id="provincia" />
                </div>
                </div>
                <br></br>
                <br></br>





                <div className={style.recordame}>
                    <button className={style.boton}></button>
                    <p>Acepto los términos y condiciones</p>


                </div>
                <button className={style.botonrojo}>Registarse</button>
                <br></br>
                <br></br>
                <div className={style.contenedorlinea}>
                    <span className={style.circulo}></span>
                </div>
                <br></br>

                <div>
                    <label className={style.ingresarred}>Ingresar con Google</label></div>
                <br></br>
                <div>
                    <label className={style.ingresarred}>Ingresar con Facebook</label></div>
                <br></br>

            </div>

>>>>>>> ce59e675ea31548e379a47ee98de896ffcef641a
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
                        icon={<KeyIcon color="#ff0000" />}
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
                        icon={<KeyIcon color="#ff0000" />}
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
                        {/* <div className={style.contenedorlinea}>
                            <span className={style.circulo}>o</span>
                        </div>

                        <div>
                            <label className={style.ingresarred}>Ingresar con Google</label>
                        </div>
                        <div>
                            <label className={style.ingresarred}>Ingresar con Facebook</label>
                        </div> */}
                    </div>
                    <Image className={style.logo} src="/images/imagenregistro.png" width={873} height={570} alt="logo-perro" />
                </div>
            </form>
            {message && (
                <MessageAlert 
                title={"Compruebe que los datos sean correctos"}
                message={message}
                handleClose={() => setMessage(null)}
                />
            )}
        </main >

    );
}