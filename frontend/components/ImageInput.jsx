import { useEffect, useState } from "react";
import style from "./ImageInput.module.css";
import { upload } from "@vercel/blob/client";
import { MessageAlert } from "./MessageAlert";
import { Loader } from "./Loader";

export const ImageInput = ({onUploaded}) => {

    const [error, setError] = useState(null);

    const [success, setSuccess] = useState(null);

    const [loading, setLoading] = useState(false);

    const [blob, setBlob] = useState(null);

    const handleImageChange = async(event) => {

        setLoading(true);

        const file = event.target.files[0];

        const newBlob = await upload(file.name, file, {
            access: 'public',
            handleUploadUrl: '/api/upload',
        });

        setBlob(newBlob);

    };

    useEffect(() => {
        if (blob) {
            onUploaded(blob.url);
            setSuccess(true);
            setLoading(false);
        }
    }, [blob]);

    return (
        <div className={style.container}>
            <p>Imágen</p>
            <div className={style.imageBox}>
                <img src={blob ? blob.url : null} alt="" />
                <label className={style.label}>
                    <input
                        type="file"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <div role="button" className={style.button}>
                        Agregar imagen
                    </div>
                </label>

            </div>
            {error && <MessageAlert message={error} title="Error" handleClose={() => setError(null)} />}
            {success && <MessageAlert message="Imagen subida correctamente" title="Éxito" handleClose={() => setSuccess(null)} />}
            {loading && <Loader />}
        </div>
    )
}