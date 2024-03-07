import { PetIcon } from "@/icons/PetIcon"
import { PanelLayout } from "./PanelLayout"

import style from "./PetPanel.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPets } from "@/services/actions/fetch-pets";

const PetPanelElement = ({ name, age, gender, breed, city, image, ...props }) => {
    return (
        <div className={style.element}>
            <div>{name}</div>
            <div>{age}</div>
            <div>{gender}</div>
            <div>{breed}</div>
            <div>{city}</div>
            <div>{image}</div>
        </div>
    )
}

export const PetPanel = () => {

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchPets({offset: 0, limit: 50});
                if (response) {
                    setData(response);
                    setLoading(false);
                }
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
            <h2>Panel de mascotas</h2>
            <PanelLayout title="Panel de mascotas" icon={<PetIcon color="#ff0000" />}>
                {data && (
                    <div className={style.container}>
                        {data.map((pet) => <PetPanelElement key={pet.id} {...pet} />)}
                    </div>
                )}
                {error && <div>{error}</div>}
                {loading && <div>Cargando...</div>}
            </PanelLayout>
        </div>
    )
}