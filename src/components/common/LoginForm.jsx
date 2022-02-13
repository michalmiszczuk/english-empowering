import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from './InputField';
import Button from '../common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { validateLogin } from '../../validation/joiValidation';
import { UserContext } from '../../contexts/UserContext';
import { ToastContext } from '../../contexts/ToastContext';
import { LoadingContext } from '../../contexts/LoadingContext';
import auth from "../../services/authServices"
import Logo from './Logo';
import './register-login-forms.css'
import "../home-navigation/NavigationSite.css"

function LoginForm(props) {

    const userContext = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const [emailError] = validateLogin(email)
    const history = useHistory()

    const handleLoginSubmit = async (e) => {
        try {
            e.preventDefault()
            setIsLoading(true)
            await auth.login(email, password)
            userContext.refreshUser();
            history.push('/main')
            setIsLoading(false)
        }
        catch (ex) {
            setIsLoading(false)
            if (ex.response && ex.response.status === 400) {
                showToast("error", ex.response.data)
            }
        }

    }
    const checkErrors = emailError.error

    return (
        <div className="register-login-container" id="login-container">
            <form className="register-login-forms login-form" >
                <div className="logo-forms-container">
                    <Logo logoClass="forms-logo" />
                </div>
                <Link to="/"><FontAwesomeIcon className="close-icon" icon={faTimes} /></Link>
                <div className="form-title">Logowanie</div>
                <InputField autoFocus name={"email"} label={"Email :"} onChange={(event) => setEmail(event.target.value)} error={emailError} value={"email"} />
                <InputField name={"hasło"} label={"Hasło :"} type={"password"} onChange={(event) => setPassword(event.target.value)} value={"password"} />
                <Button text="Zaloguj" btnClass="login-register-buttons" onClick={(e) => checkErrors ? null : handleLoginSubmit(e)} validError={checkErrors} />
            </form>
        </div>
    );
}

export default LoginForm