import { BoneIcon } from "@/icons/BoneIcon"
import { PanelLayout } from "./PanelLayout"

export const RequestPanel = () => {
    return (
        <div>
            <h2>Panel de solicitudes</h2>
            <PanelLayout title="Solicitudes de adopción" icon={<BoneIcon color="#ff0000" />}>
                <ul>
                    <li>Elemento 1</li>
                    <li>Elemento 1</li>
                    <li>Elemento 1</li>
                    <li>Elemento 1</li>
                    <li>Elemento 1</li>
                </ul>
            </PanelLayout>
        </div>
    )
}