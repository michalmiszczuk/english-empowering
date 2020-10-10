import React from 'react';
import InputField from './InputField';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "../CSS/NavigationSite.css"


function LoginForm({ iconClick }) {
    return (
        <div className="loginContainer" style={styles.container}>
            <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} onClick={iconClick} />
            <text style={styles.text}> Login</text>
            <InputField name={"email"} label={"Email :"}></InputField>
            <InputField name={"password"} label={"Password :"} type={"password"}></InputField>
            <Button width={200} height={80} text="Take me in !" backgroundColor={"peru"} marginTop={10} />
        </div>
    );
}

export default LoginForm

const styles = {
    container: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 450,
        backgroundColor: "oldlace",
        borderRadius: 100,
        marginLeft: 100,
    },
    closeIcon: {
        width: 20,
        height: 20,
        marginLeft: 180,
        color: "black",
        cursor: "pointer"
    },
    text: {
        color: "black",
        fontFamily: "Indie Flower, cursive",
        fontSize: 40,
    }
}