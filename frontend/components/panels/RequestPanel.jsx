import { BoneIcon } from "@/icons/BoneIcon"
import { PanelLayout } from "./PanelLayout"
import style from "./RequestPanel.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchForms } from "@/services/actions/fetch-forms";

const RequestElement = ({ firstname, lastname, email }) => {
    return (
        <div className={style.element}>
            <div>{firstname}</div>
            <div>{lastname}</div>
            <div>{email}</div>
        </div>
    )
}

export const RequestPanel = () => {

    const [data, setData] = useState(null);

    const [error, setError] = useState(null);

    const [loading, setLoading] = useState(true);

    const token = useSelector((state) => state.auth.token);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchForms(token);

                if (response.status === 200) {
                    const jsonData = await response.json();
                    setData(jsonData);
                    setLoading(false);
                    return;
                }

                if (response.status === 204) {
                    setError('No hay solicitudes');
                    setLoading(false);
                    return;
                }

                setError('Ocurrio un error mientras se cargaban las solicitudes');
                setLoading(false);

            } catch (error) {
                setError('Comprueba tu conexión a internet');
                setLoading(false);
            }
        }

        if (token) {
            fetchData();
        }

    }, [token]);

    return (
        <div>
            <h2>Panel de solicitudes</h2>
            <PanelLayout title="Solicitudes de adopción" icon={<BoneIcon color="#ff0000" />}>
                {error && <div>{error}</div>}
                {loading && <div>Cargando...</div>}
                {data && data.map((form) => <RequestElement key={form.id} {...form} />)}
            </PanelLayout>
        </div>
    )
}