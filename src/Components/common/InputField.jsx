import React from 'react';

function InputField({ name, label, error, type, onChange }) {

    return (
        <div style={styles.mainDiv}>
            <label style={styles.label} htmlFor={name}>{label}</label>
            <input autoFocus
                style={styles.inputField}
                id={name}
                name={name}
                type={type}
                onChange={onChange}
            />
        </div>
    );
}

export default InputField;

const styles = {
    mainDiv: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#333",
        width: 220,
        height: 90,
        margin: 10,
        color: "white",
        fontFamily: "Roboto, cursive",
        fontWeight: 100,
        fontSize: 18,
        borderRadius: 70,
        paddingBottom: 15,
    },
    label: {
        marginBottom: 5,
    },
    inputField: {
        backgroundColor: "cornsilk",
        height: 30,
        width: 100,
        fontFamily: "Roboto, cursive",
        fontWeight: "bold",
        fontSize: 18,
        outline: "none",
        borderRadius: 20,
        textAlign: "center",
    }
}