import { AtIcon } from "@/icons/AtIcon";
import style from "./formularioingreso.module.css";
import Image from "next/image";
import { KeyIcon } from "@/icons/KeyIcon";

export default function formularioingreso({handleSubmit}) {
    return (
        <main>
            <div className={style.contenedor}>
                <form className={style.formulario} onSubmit={handleSubmit}>
                    <p className={style.ingresar}>INGRESAR</p>
                    <p className={style.mensaje}>¡Bienvenido! Inicia sesión para  acceder a tu cuenta</p>

                    <div>
                        <label className={style.customLabel}>
                            <span className="font-semibold">Email</span>
                            <div className={style.emailInputContainer}>
                                <AtIcon color="#ff0000" />
                                <input className={style.emailInput} type="email" name="email" placeholder="Ingrese su email" />
                            </div>
                        </label>
                    </div>

                    <div>
                        <label className={style.customLabel}>
                            <span className="font-semibold">Contraseña</span>
                            <div className={style.passwordInputContainer}>
                                <KeyIcon color="#ff0000" />
                                <input className={style.passwordInput} type="password" name="password" placeholder="Ingrese su contraseña" />
                            </div>
                        </label>
                    </div>

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
                        <label className={style.ingresarred}>Ingresar con Google</label></div>

                    <div>
                        <label className={style.ingresarred}>Ingresar con Facebook</label></div>

                    <div className={style.registrocuenta}>
                        <p className={style.cuenta}>¿No tienes una cuenta? <span className={style.rojo}>Regístrate</span>
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