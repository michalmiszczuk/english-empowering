import React from 'react';
import InputField from './InputField';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "../CSS/NavigationSite.css"


function AddDayForm({ iconClick, onSubmit, dayName, onChange }) {

    return (
        <div className="loginContainer" style={styles.container}>
            <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} onClick={iconClick} />
            <div style={styles.title}> Dodaj lekcję</div>
            <div style={styles.text}> {dayName.dayMonth}</div>
            <div style={styles.text}> {dayName.dayName}</div>
            <InputField name={"Hour:"} label={"Hour:"} onChange={onChange}></InputField>
            <Button width={200} height={80} text="Add lesson!" backgroundColor={"peru"} marginTop={10} onClick={onSubmit} />
        </div>
    );
}

export default AddDayForm

const styles = {
    container: {
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        width: 350,
        height: 400,
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
        fontFamily: "Marcellus SC",
        fontStyle: "italic",
        fontSize: 25,
    },
    title: {
        color: "black",
        fontFamily: "Indie Flower, cursive",
        fontSize: 30,
    }
}