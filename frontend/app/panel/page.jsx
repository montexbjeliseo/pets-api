'use client';

import { ReduxProvider } from "@/providers/redux-provider"

import style from "./panel.module.css";
import { UserPanel } from "@/components/panels/UserPanel";
import { PetPanel } from "@/components/panels/PetPanel";
import { RequestPanel } from "@/components/panels/RequestPanel";

export const PanelPage = () => {
    return (
        <main className={style.main}>

            <h1 className={style.title}>Panel de administración</h1>

            <div className={style.panelContainer}>
                <UserPanel />
                <PetPanel />
                <RequestPanel />
            </div>

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