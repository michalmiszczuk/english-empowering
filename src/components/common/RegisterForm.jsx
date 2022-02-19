import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/Button';
import InputField from './InputField';
import Logo from './Logo';

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LoadingContext } from '../../contexts/LoadingContext';
import { saveUser } from '../../services/userServices'
import { ToastContext } from '../../contexts/ToastContext';
import { validateRegister } from '../../validation/joiValidation';

import './register-login-forms.css'
import "../home-navigation/NavigationSite.css"

function RegisterForm({ iconClick, refreshUser }) {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const userToSave = { email: email, name: firstName, surname: secondName, phone: phone, password: password }

    const handleRegisterSubmit = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            const response = await saveUser(userToSave)
            localStorage.setItem('token', response.headers['x-auth-token'])
            window.location = '/'
            setIsLoading(false)
        }
        catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) {
                showToast('error', ex.response.data)
            }
        }
    }

    const [emailError, phoneError, firstNameError, secondNameError, passwordError]
        = validateRegister(email, phone, firstName, secondName, password)

    const checkErrors = emailError.error || phoneError.error || firstNameError.error || secondNameError.error || passwordError.error

    return (
        <div className="register-login-container" id="register-container">
            <form className="register-login-forms">
                <Link to="/"><FontAwesomeIcon className="close-icon" icon={faTimes} onClick={iconClick} /></Link>
                <div className="logo-forms-container">
                    <Logo logoClass="forms-logo" />
                </div>
                <div className="form-title">Zarejestruj</div>
                <InputField autoFocus name={"email"} label={"Email :"} onChange={(event) => setEmail(event.target.value)} error={emailError} value={"email"}></InputField>
                <InputField name={"phone"} label={"Telefon :"} onChange={(event) => setPhone(event.target.value)} error={phoneError} value={"phone"}></InputField>
                <InputField name={"first name"} label={"Imię :"} onChange={(event) => setFirstName(event.target.value)} error={firstNameError} value={"firstName"}></InputField>
                <InputField name={"second name"} label={"Nazwisko :"} onChange={(event) => setSecondName(event.target.value)} error={secondNameError} value={"secondName"}></InputField>
                <InputField name={"password"} label={"Hasło :"} type={"password"} onChange={(event) => setPassword(event.target.value)} error={passwordError} value={"password"}></InputField>
                <div id="register-info">Kilkając "Zarejestruj" wyrażasz zgodę na przetwarzanie Twoich danych osobowych zgodnie z <Link className="link-to-privacy" to="/privacypolicy">polityką prywatności.</Link></div>
                <Button text="Zarejestruj" btnClass="login-register-buttons" enable onClick={handleRegisterSubmit} validError={checkErrors} />
            </form>
        </div>
    );
}

export default RegisterForm