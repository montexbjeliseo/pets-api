import style from "./UserPanelElement.module.css";

const RedButton = ({ children }) => {
    return (
        <div className={style.redButton}>{children}</div>
    )
}

export const UserPanelElement = ({ user }) => {

    return (
        <div className={style.container}>
            <div className={style.text}>{user.firstname}</div>
            <div className={style.text}>{user.lastname}</div>
            <div className={style.text}>{user.email}</div>
            <div className={style.text}>-</div>
            <div className={style.text}>{user.city}</div>
            <div className={style.text}>-</div>
            <div className={style.text}><RedButton>Suspender</RedButton></div>
            <div className={style.text}><RedButton>Eliminar</RedButton></div>
        </div>
    )
}