import React from 'react';
import InputField from './InputField';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "../CSS/NavigationSite.css"

function RegisterForm({ iconClick }) {
    return (
        <div className="registerContainer" style={styles.container}>
            <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} onClick={iconClick} />
            <text style={styles.text}>Register</text>
            <InputField name={"email"} label={"Email :"}></InputField>
            <InputField name={"first name"} label={"First Name :"}></InputField>
            <InputField name={"second name"} label={"Second Name :"}></InputField>
            <InputField name={"password"} label={"Password :"} type={"password"}></InputField>
            <Button width={200} height={80} text="Register me !" backgroundColor={"sienna"} marginTop={10} />
        </div>
    );
}

export default RegisterForm

const styles = {
    container: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        width: 400,
        height: 700,
        backgroundColor: "moccasin",
        borderRadius: 100,
        marginLeft: 100,
    },
    closeIcon: {
        width: 20,
        height: 20,
        marginLeft: 250,
        color: "black",
        cursor: "pointer"
    },
    text: {
        color: "black",
        fontFamily: "Indie Flower, cursive",
        fontSize: 40,
    }
}