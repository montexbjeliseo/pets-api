import style from "./nuestroequipo.module.css"
import Image from "next/image";


export default function nuestroequipo() {
    return (
        <section>
            <div>
                <div className={style.contenedor}>
                    <div className={style.contenedorheader}>
                    <p className={style.header}>Nuestro equipo</p>
                    </div>
                    <div className={style.contenedorfotos} style={{ display: 'flex' }}>
                        <Image className={style.foto} src="/images/jesica.png" width={424} height={500} alt="foto-integrante3" />
                        <Image className={style.foto} src="/images/sebastian.png" width={424} height={500} alt="foto-integrante3" />
                    </div>
                </div>
            </div>
        </section >

    );
}