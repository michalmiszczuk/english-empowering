import React from 'react';
import InputField from './InputField';
import Button from '../common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import "../Home-Navigation/NavigationSite.css"
import './register-login-forms.css'
import { saveUser } from '../../services/userServices'
import { Link } from 'react-router-dom';
import { validateRegister } from '../../Validation/joiValidation';

function RegisterForm({ iconClick, refreshUser }) {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const userToSave = { email: email, name: firstName, surname: secondName, phone: phone, password: password }

    const onRegisterSubmit = async () => {
        try {
            await saveUser(userToSave)
            refreshUser()
            window.location = "/"
        }
        catch (ex) {
            console.log(ex)
        }

    }

    const [emailError, phoneError, firstNameError, secondNameError, passwordError]
        = validateRegister(email, phone, firstName, secondName, password)

    const checkErrors = emailError.error || phoneError.error || firstNameError.error || secondNameError.error || passwordError.error

    return (
        <div className="register-login-container">
            <div className="register-login-forms register-form">
                <Link to="/"><FontAwesomeIcon className="close-icon" icon={faTimes} onClick={iconClick} /></Link>
                <div className="form-title">Zarejestruj</div>
                <InputField name={"email"} label={"Email :"} onChange={(event) => setEmail(event.target.value)} error={emailError} value={"email"}></InputField>
                <InputField name={"phone"} label={"Telefon :"} onChange={(event) => setPhone(event.target.value)} error={phoneError} value={"phone"}></InputField>
                <InputField name={"first name"} label={"Imię :"} onChange={(event) => setFirstName(event.target.value)} error={firstNameError} value={"firstName"}></InputField>
                <InputField name={"second name"} label={"Nazwisko :"} onChange={(event) => setSecondName(event.target.value)} error={secondNameError} value={"secondName"}></InputField>
                <InputField name={"password"} label={"Hasło :"} type={"password"} onChange={(event) => setPassword(event.target.value)} error={passwordError} value={"password"}></InputField>
                <Button text="Zarejestruj !" btnClass="login-register-buttons" onClick={checkErrors ? null : onRegisterSubmit} validError={checkErrors} />
            </div>
        </div>
    );
}

export default RegisterForm