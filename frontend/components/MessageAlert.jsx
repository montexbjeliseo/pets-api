import style from './MessageAlert.module.css'

export const MessageAlert = ({ message, title, handleClose }) => {
    return (
        <div className={style.alert} role="alert">
            <div className={style.alertBody} >
                <h2 className='font-semibold'>{title ?? 'Alerta'}</h2>
                <p>{message}</p>
                <div>
                    <button className={style.button} onClick={handleClose}>Cerrar</button>
                </div>
            </div>

        </div>
    );
}