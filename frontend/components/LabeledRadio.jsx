import style from './LabeledRadio.module.css';

export const LabeledRadio = ({ label, name, width, options }) => {
    return (
        <div style={{ maxWidth: width, width: "100%" }}>
            <span className="font-semibold">{label}</span>
            <div className={style.container}>
                {options.map((option) => (
                    <label className={style.customLabel} key={option.value}>
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            required
                            className={style.radio}
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </div>
    )
}