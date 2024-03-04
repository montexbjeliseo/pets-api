import style from "./LabeledSelect.module.css";

export const LabeledSelect = ({ label, name, width, placeholder, options }) => {
    return (
        <label className={style.customLabel} style={{ width: width }}>
            <span className="font-semibold">{label}</span>
            <select name={name} placeholder={placeholder} className={style.container}>
                <option>{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.text}</option>
                ))}
            </select>
        </label>
    )
}