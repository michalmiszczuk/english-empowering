import React from 'react';
import "./inputField.css"

function InputField({ name, label, error, type, onChange, value, addDayForm }) {

    const checkError = () => {
        if (error) {
            const { error: errors } = error
            if (!errors) return null;
            if (!error.value[value]) return null
            if (errors) return errors.message
        }
        return null
    }

    let msg = checkError()

    return (
        <div className={addDayForm ? "input-field-container add-day-form" : "input-field-container"}>
            <label id="input-label" className={msg ? "error-background" : 'input-label'} htmlFor={name}>{label}</label>
            <input autoFocus
                className="input-field"
                id={name}
                name={name}
                type={type}
                onChange={onChange}
            />
            {msg && !addDayForm && <div className="error-message">{msg}</div>}
        </div>
    );
}

export default InputField;