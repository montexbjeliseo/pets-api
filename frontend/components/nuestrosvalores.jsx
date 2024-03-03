import style from "./nuestrosvalores.module.css";
import Image from "next/image";


export default function nuestrosvalores() {
    return (
        <section>
            <div>
                <div className={style.contenedor}>
                    <div className={style.contenedorheader}>
                        <div className={style.divheader}>
                            <p className={style.header}>Nuestros valores</p>
                        </div>
                        <p className={style.titulos}>EMPATÍA</p>
                        <p className={style.parrafo}>Hay que entender la situación de estos seres, debemos estar siempre al rescate de ellos, no pueden quedar abandonados</p>
                        <p className={style.titulos}>POSITIVIDAD</p>
                        <p className={style.parrafo}>No hay mal que por bien no venga, siempre habrá una persona dispuesta a ayudarte</p>
                        <p className={style.titulos}>CONCIENCIA</p>
                        <p className={style.parrafo}>Debemos ser conscientes de que dejar abandonados a nuestras mascotas, habla mal de nosotros</p>
                        <p className={style.titulos}>SOLIDARIDAD</p>
                        <p className={style.parrafo}>Solidaridad total con estos animales dejados al abandono.</p>
                    </div>
                    <div className={style.contenedorfotos}>
                    </div>
                    <div>
                        <Image className={style.foto} src="/images/nuestrosvalores.png" width={535} height={541} alt="foto-valores" />
                    </div>
                </div>
            </div>
        </section>
    );
}