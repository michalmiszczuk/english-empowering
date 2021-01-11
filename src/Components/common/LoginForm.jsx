import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from './InputField';
import Button from '../common/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { validateLogin } from '../../Validation/joiValidation';
import { UserContext } from '../../contexts/UserContext';
import auth from "../../services/authServices"
import "../Home-Navigation/NavigationSite.css"
import './register-login-forms.css'
import { ToastContext } from '../../contexts/ToastContext';
import Logo from './Logo';
import { LoadingContext } from '../../contexts/LoadingContext';

function LoginForm(props) {

    const userContext = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { showToast } = useContext(ToastContext)
    const { setIsLoading } = useContext(LoadingContext)

    const [emailError, passwordError] = validateLogin(email, password)
    const history = useHistory()

    const handleLoginSubmit = async () => {
        try {
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
    const checkErrors = emailError.error || passwordError.error

    return (
        <div className="register-login-container">
            <div className="register-login-forms" >
                <div className="logo-forms-container">
                    <Logo logoClass="forms-logo" />
                </div>
                <Link to="/"><FontAwesomeIcon className="close-icon" icon={faTimes} /></Link>
                <div className="form-title">Logowanie</div>
                <InputField name={"email"} label={"Email :"} onChange={(event) => setEmail(event.target.value)} error={emailError} value={"email"} />
                <InputField name={"password"} label={"Password :"} type={"password"} onChange={(event) => setPassword(event.target.value)} error={passwordError} value={"password"} />
                <Button text="Zaloguj !" btnClass="login-register-buttons" onClick={checkErrors ? null : handleLoginSubmit} validError={checkErrors} />
            </div>
        </div>
    );
}

export default LoginForm