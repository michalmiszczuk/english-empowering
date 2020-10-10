import React from 'react';

function InputForm(props) {
    return (
        <div style={{
            width: "100%",
            height: 1200,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            borderColor: "green",
            border: "double"
        }}>
            <LoginForm name={"email"} label={"email"} />
            <LoginForm name={"password"} label={"password"} />
        </div>
    );
}

export default InputForm;