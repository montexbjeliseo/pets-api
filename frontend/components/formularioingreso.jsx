import { AtIcon } from "@/icons/AtIcon";
import style from "./formularioingreso.module.css";
import Image from "next/image";
<<<<<<< HEAD
import { KeyIcon } from "@/icons/KeyIcon";
import Link from "next/link";
=======
import { AiOutlineMail } from 'react-icons/ai';
import { FaKey, FaGoogle, FaFacebook } from 'react-icons/fa';
>>>>>>> ce59e675ea31548e379a47ee98de896ffcef641a

export default function formularioingreso({handleSubmit}) {
    return (
        <main>
            <div className={style.contenedor}>
<<<<<<< HEAD
                <form className={style.formulario} onSubmit={handleSubmit}>
                    <p className={style.ingresar}>INGRESAR</p>
                    <p className={style.mensaje}>¡Bienvenido! Inicia sesión para  acceder a tu cuenta</p>

                    <div>
                        <label className={style.customLabel}>
                            <span className="font-semibold">Email</span>
                            <div className={style.emailInputContainer}>
                                <AtIcon color="#ff0000" />
                                <input className={style.emailInput} type="email" name="email" placeholder="Ingrese su email" required />
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className={style.customLabel}>
                            <span className="font-semibold">Contraseña</span>
                            <div className={style.passwordInputContainer}>
                                <KeyIcon color="#ff0000" />
                                <input className={style.passwordInput} type="password" name="password" placeholder="Ingrese su contraseña" required />
                            </div>
                        </label>
                    </div>

=======
            <div className={style.costadoIzquierdo}>
                <p className={style.ingresar}>INGRESAR</p>
                <br></br>
                <p className={style.mensaje}>¡Bienvenido! Inicia sesión para  acceder a tu cuenta</p>
                <br></br>


                <p className={style.parrafo}>Email</p>
                <div className={style.input}>
                <AiOutlineMail color="red"/>

                    <label className={style.label} >Ingrese aquí su email</label>
                    <input
                        type="text"
                        id="emailInput"
                    />
                </div>
                <br></br>
                <p className={style.parrafo}>Contraseña</p>

                <div className={style.input}>
                <FaKey color="red"/>
                    <label className={style.label}>Ingrese su contraseña</label>
                    <input
                        type="password"
                        id="passwordInput" />
                    <br></br>

>>>>>>> ce59e675ea31548e379a47ee98de896ffcef641a
                    <div className={style.recordame}>
                        <label>
                            <input className={style.redCheckbox} type="checkbox" name="recordame" /> Recordarme
                        </label>
                        <p>¿Olvidaste tu contraseña?</p>
                    </div>
                    <button className={style.botonrojo}>Ingresar</button>

                    <div className={style.contenedorlinea}>
                        <span className={style.circulo}>o</span>
                    </div>

                    <div>
                        <FaGoogle/>
                        <label className={style.ingresarred}>Ingresar con Google</label></div>
<<<<<<< HEAD

                    <div>
                        <label className={style.ingresarred}>Ingresar con Facebook</label></div>

=======
                        <br></br>
                     <div>   
                        <FaFacebook/>
                    <label className={style.ingresarred}>Ingresar con Facebook</label></div>
                    <br></br>
>>>>>>> ce59e675ea31548e379a47ee98de896ffcef641a
                    <div className={style.registrocuenta}>
                        <p className={style.cuenta}>¿No tienes una cuenta? <Link className={style.rojo} href="/registrarse">Regístrate</Link>
                        </p>
                    </div>
                </form>
                <div className={style.foto}>
                    <Image className={style.logo} src="/images/imageningresar.png" width={873} height={570} alt="logo-perro" />
                </div>
            </div>
        </main>
    );
}