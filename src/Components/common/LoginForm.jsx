import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import InputField from './InputField';
import Button from '../common/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import auth from "../../services/authServices"
import "../Home-Navigation/NavigationSite.css"
import './register-login-forms.css'
import { validateLogin } from '../../Validation/joiValidation';
import { UserContext } from '../../hooks/UserContext';
import { refreshUser } from '../../services/userServices';

function LoginForm(props) {

    const userContext = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [emailError, passwordError] = validateLogin(email, password)
    const history = useHistory()

    const handleLoginSubmit = async () => {
        try {
            await auth.login(email, password)
            userContext.refreshUser();
            history.push('/main')
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                setErrorMsg(ex.response.data)
            }
        }

    }
    const checkErrors = emailError.error || passwordError.error

    return (
        <div className="register-login-container">
            <div className="register-login-forms" >
                <Link to="/"><FontAwesomeIcon className="close-icon" icon={faTimes} /></Link>
                <div className="form-title">Logowanie</div>
                <InputField name={"email"} label={"Email :"} onChange={(event) => setEmail(event.target.value)} error={emailError} value={"email"} />
                {errorMsg && <div className="errorMsg">{errorMsg}</div>}
                <InputField name={"password"} label={"Password :"} type={"password"} onChange={(event) => setPassword(event.target.value)} error={passwordError} value={"password"} />
                <Button text="Zaloguj !" btnClass="login-register-buttons" onClick={checkErrors ? null : handleLoginSubmit} validError={checkErrors} />
            </div>
        </div>
    );
}

export default LoginForm