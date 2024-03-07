'use client';

import { ReduxProvider } from "@/providers/redux-provider"

import style from "./panel.module.css";
import { UserPanel } from "@/components/panels/UserPanel";
import { PetPanel } from "@/components/panels/PetPanel";
import { RequestPanel } from "@/components/panels/RequestPanel";
import { ROLES } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserProfile } from "@/services/actions/fetch-user-profile";
import { setToken } from "@/slices/authSlice";
import { MessageAlert } from "@/components/MessageAlert";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/Loader";

export const PanelPage = () => {

    const [error, setError] = useState(null);

    const router = useRouter();

    const [currentUser, setCurrentUser] = useState(null);

    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    useEffect(() => {

        const validateToken = async () => {
            const response = await fetchUserProfile(token);

            if (response.ok) {
                const data = await response.json();
                setCurrentUser(data);
            } else {
                dispatch(setToken(null));
                setError("Error: la sesión a expirado.");
            }
        }

        if (token) {
            validateToken();
        } else {
            router.replace("/ingreso?next=/panel");
        }

    }, [token]);

    const handleCloseAlert = () => {
        setError(null);
        router.replace("/ingreso?next=/panel");
    }

    const handleLogout = () => {
        dispatch(setToken(null));
        router.replace("/ingreso");
    }

    return (
        <main className={style.main}>

            <h1 className={style.title}>Panel de administración</h1>

            {currentUser && (
                <div className={style.panelContainer}>
                    {currentUser.roles[0].name === ROLES.ADMIN && (
                        <UserPanel />
                    )}
                    <PetPanel />
                    <RequestPanel />
                    <button className="text-red-400 hover:text-red-500" onClick={handleLogout}>Cerrar sesión</button>
                </div>
            )}

            {
                error && (
                    <MessageAlert message={error} title="Error" handleClose={handleCloseAlert} />
                )
            }
            {
                !currentUser && (
                    <Loader />
                )
            }
        </main>
    )
}


export default function () {
    return (
        <ReduxProvider>
            <PanelPage />
        </ReduxProvider>
    )
}