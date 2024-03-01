import style from "./formularioingreso.module.css";
import Image from "next/image";
import { AiOutlineMail } from 'react-icons/ai';
import { FaKey, FaGoogle, FaFacebook } from 'react-icons/fa';

export default function formularioingreso() {
    return (
        <main>
            <div className={style.contenedor}>
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

                    <div className={style.recordame}>
                        <button className={style.boton}></button>
                        <p>Recordarme</p>
                        <p>¿Olvidaste la contraseña?</p>

                    </div>
                    <button className={style.botonrojo}>Ingresar</button>
                    <br></br>
                    <br></br>
                    <div className={style.contenedorlinea}>
                        <span className={style.circulo}></span>
                    </div>
                    <br></br>

                    <div>
                        <FaGoogle/>
                        <label className={style.ingresarred}>Ingresar con Google</label></div>
                        <br></br>
                     <div>   
                        <FaFacebook/>
                    <label className={style.ingresarred}>Ingresar con Facebook</label></div>
                    <br></br>
                    <div className={style.registrocuenta}>
                    <p className={style.cuenta}>¿No tienes una cuenta?<span className={style.rojo}>Regístrate</span></p></div>
                    <div className={style.foto}>
                <Image className={style.logo} src="/images/imageningresar.png" width={873} height={570} alt="logo-perro" />
                

            </div>



                </div>






            </div>
            </div>



        </main >

    );
}