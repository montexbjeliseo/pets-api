import style from "./UserPanel.module.css";

import { UserIcon } from "@/icons/UserIcon"
import { PanelLayout } from "./PanelLayout"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers } from "@/services/actions/fetch-users";
import { UserPanelElement } from "./UserPanelElement";

export const UserPanel = () => {

    const token = useSelector((state) => state.auth.token);

    const [error, setError] = useState(null);

    const [data, setData] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetchUsers(token);
                if (response.ok) {
                    const jsonData = await response.json();
                    setData(jsonData.content);
                } else {
                    setError('Ocurrió un error mientras se cargaban los usuarios');
                }
            } catch (error) {
                setError('Comprueba tu conexión a internet');
            }
        }

        if (token) {
            fetchData();
        }

    }, [token]);

    return (
        <div>
            <h2>Panel de usuarios</h2>
            <PanelLayout title="Panel de usuarios" icon={<UserIcon color="#ff0000" />}>
                {!data && !error && <p>Cargando...</p>}
                {error && <p>{error}</p>}
                {data && <div className={style.container}>{data.map(user => <UserPanelElement key={user.id} user={user} />)}</div >}
            </PanelLayout>
        </div>
    )
}