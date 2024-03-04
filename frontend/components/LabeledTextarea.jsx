import style from "./LabeledTextarea.module.css";

export const LabeledTextarea = ({ label, name, width, height, placeholder }) => {
    return (
        <label className={style.customLabel}>
            <span className="font-semibold">{label}</span>
            <div className={style.textInputContainer}>
                <textarea placeholder={placeholder} className={style.textarea} name={name} required style={{ width: width, height: height }}></textarea>
            </div>
        </label>
    )
}