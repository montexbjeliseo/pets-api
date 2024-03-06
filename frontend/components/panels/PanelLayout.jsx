import { useState } from "react";
import style from "./PanelLayout.module.css";
import { ChevronDownIcon } from "@/icons/ChevronDownIcon";

export const PanelLayout = ({ children, title, icon, open }) => {

    const [show, setShow] = useState(open ?? false);

    return (
        <div className={style.container}>
            <h3 className={style.title} onClick={() => setShow(!show)}>
                {icon}
                {title}
                <div className={style.chevron + (show ? " " + style.flip : "")}>
                    <ChevronDownIcon />
                </div>
            </h3>
            <div className={style.content + (show ? " " + style.show : "")}>
                {children}
            </div>
        </div>
    )
}