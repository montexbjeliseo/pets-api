import { UserIcon } from "@/icons/UserIcon"
import { PanelLayout } from "./PanelLayout"

export const UserPanel = () => {
    
    return (
        <div>
            <h2>Panel de usuarios</h2>
            <PanelLayout title="Panel de usuarios" icon={<UserIcon color="#ff0000" />}>
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