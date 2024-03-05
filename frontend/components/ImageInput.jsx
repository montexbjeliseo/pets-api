import { useEffect, useState } from "react";
import style from "./ImageInput.module.css";
import { upload } from "@vercel/blob/client";

export const ImageInput = ({onUploaded}) => {

    const [blob, setBlob] = useState(null);

    const handleImageChange = async(event) => {
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
        </div>
    )
}