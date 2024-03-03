import style from './LabeledInputs.module.css';

export const LabeledInput = ({ label, placeholder, name, type, icon, width, pattern, minLength, maxLength }) => {
    return (
        <label className={style.customLabel} style={{ maxWidth: width }}>
            <span className="font-semibold">{label}</span>
            <div className={style.textInputContainer}>
                {icon}
                <input
                    className={style.textInput}
                    type={type ?? 'text'}
                    name={name ?? 'email'}
                    placeholder={placeholder ?? 'Ingrese su email'}
                    required
                    pattern={pattern}
                    minLength={minLength}
                    maxLength={maxLength}
                />
            </div>
        </label>
    )
}