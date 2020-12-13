import React from 'react';
import './inputForm.css'

function InputForm(props) {
    return (
        <div className="input-form">
            <LoginForm name={"email"} label={"email"} />
            <LoginForm name={"password"} label={"password"} />
        </div>
    );
}

export default InputForm;