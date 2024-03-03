import style from './LabeledInputs.module.css';

export const LabeledInput = ({ label, placeholder, name, type, icon, width, pattern, minLength, maxLength }) => {

    function getPatternRequirements(pattern) {
        let requirements = [];

        if (pattern.includes("(?=.*[A-Z])")) {
            requirements.push("- Al menos 1 mayúscula");
        }

        if (pattern.includes("(?=.*[a-z])")) {
            requirements.push("- Al menos 1 minúscula");
        }

        if (pattern.includes("(?=.*\\d)")) {
            requirements.push("- Al menos 1 número");
        }

        if (pattern.includes("(?=.*[@$!%*?&])")) {
            requirements.push("- Al menos 1 carácter especial");
        }

        var longitud = pattern.match(/\{(\d+),(\d+)\}/);
        if (longitud) {
            requirements.push("- Longitud entre " + longitud[1] + " y " + longitud[2] + " caracteres");
        }

        return requirements;
    }

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
            {pattern && <ul className={style.requirements}>{getPatternRequirements(pattern).map((requisito, index) => <li key={index}>{requisito}</li>)}</ul>}
        </label>
    )
}