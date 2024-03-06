import { PetIcon } from "@/icons/PetIcon"
import { PanelLayout } from "./PanelLayout"

export const PetPanel = () => {
    return (
        <div>
            <h2>Panel de solicitud de mascotas</h2>
            <PanelLayout title="Panel de mascotas" icon={<PetIcon color="#ff0000" />}>
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