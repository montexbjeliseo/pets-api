import { AtIcon } from "@/icons/AtIcon";
import style from "./formulariocontactanos.module.css";
import Image from "next/image";
import { FaEdit } from 'react-icons/fa';


import { UserIcon } from "@/icons/UserIcon";


export default function formulariocontactanos({ handleSubmit }) {
    return (
        <main>

            <div className={style.contenedor}>
                <p className={style.ingresar}> CONTACTÁNOS</p>
                <p className={style.mensaje}>Tienes alguna consulta, envíanos un mensaje.</p>


                <form className={style.formulario} onSubmit={handleSubmit}>
                    <div className="grid grid-cols-10 gap-4">

                        


                            <div className={`${style.inputs} col-start-1 col-span-4`}>
                                <label className={style.customLabel}>
                                    <span className="font-semibold">Nombre y apellido</span>
                                    <div className={style.emailInputContainer}>
                                        <UserIcon color="#ff0000" />
                                        <input className={style.emailInput} type="nombre y apellido" name="nombre y apellido" placeholder="Ingrese su nombre y apellido" required />
                                    </div>
                                </label>
                            </div>
                        



                        <div className={`${style.inputs} col-start-5 col-end-9 gap-4`}>
                            <label className={style.customLabel}>
                                <span className="font-semibold">Email</span>
                                <div className={style.emailInputContainer}>
                                    <AtIcon color="#ff0000" />
                                    <input className={style.emailInput} type="email" name="email" placeholder="Ingrese su email" required />
                                </div>
                            </label>
                        </div>

                        <div className={`${style.inputsmensaje} col-start-1 col-end-9`}>


                        <div >
                            <label className={style.customLabel}>
                                <span className="font-semibold">Mensaje</span>
                                <div className={style.mensajeInputContainer}>
                                    <FaEdit color="#ff0000" />
                                    <textarea className={`${style.emailInput} max-h-311px`} type="text" name="mensaje" placeholder="Escriba su mensaje" required />
                                </div>
                            </label>
                        </div>
                        </div>





                        
                    </div>

                </form>
                <button className={` ${style.botonrojo} p-4 mt-5 mb-5 space-y-8`}>Enviar mensaje</button>
            
            

                <div className={` ${style.cajainformacion} p-4 mt-5 mb-5 space-y-8`}>
                    <p className={`{style.informacion} text-white font-semibold text-2xl`}>INFORMACIÓN</p>
                    <p className={style.text}>Avenida Siempreviva 742, Bs. As.</p>
                    <p className={style.text}>patitasfelices@gmail.com</p>
                    <p className={style.text}>(+52) 11 6151-3562</p>
                </div>
                <div className={style.mapa}><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q='Avenida%20Siempreviva%20742,%20Buenos%20Aires'+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>


                <div>


                    <div className={style.foto}>
                        <Image className={style.fotoperro} src="/images/contactanos.png" width={873} height={570} alt="logo-perro" />
                    </div>
                </div>
            </div>
        </main >
    );
}