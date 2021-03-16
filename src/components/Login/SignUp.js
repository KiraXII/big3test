import React, {useState} from 'react';
import s from "./LoginForm.module.scss"
import signUp from "../../assets/images/sign-up.png"
import {reduxForm} from "redux-form"
import {useForm} from "react-hook-form";

const SignUp = ({handleSubmit}) => {


    const [name, setName] = useState('')
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const [loginTouched, setLoginTouched] = useState(false);
    const [passwordAgainTouched, setPasswordAgainTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [nameError, setNameError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [passwordAgainError, setPasswordAgainError] = useState('');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameTouched(true)
                if (!e.target.value && e.target.name === "name") {
                    setNameError('Еhe name cannot be empty')
                }
            case "login":
                setLoginTouched(true)
                if (!e.target.value && e.target.name === "login") {
                    setLoginError('Еhe login cannot be empty')
                }
            case "password":
                setPasswordTouched(true)
                if (!e.target.value && e.target.name === "password") {
                    setPasswordError('Еhe password cannot be empty')
                }
            case "passwordAgain":
                setPasswordAgainTouched(true)
                if (!e.target.value && e.target.name === "passwordAgain") {
                    setPasswordAgainError("Passwords don't match")
                }
                break
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError('Еhe name cannot be empty')
        } else {
            setNameError('')
        }
    }

    const loginHandler = (e) => {
        setLogin(e.target.value)
        if (!e.target.value) {
            setLoginError('Еhe login cannot be empty')
        } else {
            setLoginError('')
        }

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if (!e.target.value.length)
            return setPasswordError('Еhe password cannot be empty')
        if (e.target.value.length < 3)
            return setPasswordError('The password cannot be less than 3 characters')
        else if (e.target.value.length > 16)
            return setPasswordError('The password can not be more than 16 characters')
        else {
            setPasswordError('')
        }
    }
    const passwordAgainHandler = (e) => {
        setPasswordAgain(e.target.value)
        if (e.target.value !== password)
            return setPasswordAgainError("Passwords don't match")
        else if (e.target.value === password) {
            setPasswordAgainError('')
        }

    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.formWrapper}>
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <div className={s.item}>
                            <div>
                                <lable>Name</lable>
                            </div>
                            <input
                                onChange={e => nameHandler(e)}
                                value={name}
                                onBlur={e => blurHandler(e)}
                                name="name"
                                type="text"/>
                            {(nameTouched && nameError) && <div className={s.error}>{nameError}</div>}
                        </div>
                        <div className={s.item}>
                            <div>
                                <lable>Login</lable>
                            </div>
                            <input
                                onChange={e => loginHandler(e)}
                                value={login}
                                onBlur={e => blurHandler(e)}
                                name="login"
                                type="text"/>
                            {(loginTouched && loginError) && <div className={s.error}>{loginError}</div>}
                        </div>
                        <div className={s.item}>
                            <div>
                                <lable>Password</lable>
                            </div>
                            <input
                                onChange={e => passwordHandler(e)}
                                value={password}
                                onBlur={e => blurHandler(e)}
                                name="password"
                                type="password"/>
                            {(passwordTouched && passwordError) && <div className={s.error}>{passwordError}</div>}
                        </div>
                        <div className={s.item}>
                            <div>
                                <lable>Enter your password again</lable>
                            </div>
                            <input
                                onChange={e => passwordAgainHandler(e)}
                                value={passwordAgain}
                                onBlur={e => blurHandler(e)}
                                name="passwordAgain"
                                type="password"/>
                            {(passwordAgainTouched && passwordAgainError) &&
                            <div className={s.error}>{passwordAgainError}</div>}
                        </div>
                        <div className={s.item}>
                            <button>Sign Up</button>
                        </div>
                        <div className={s.item}>
                            <div className={s.subButton}>
                                <span>Already a member? </span>
                                <a href="">Sign in</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={s.imageWrapper}>
                    <div className={s.loginImage}>
                        <img src={signUp}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const LoginReduxForm = reduxForm({form: "signIn"})(SignUp)

export default LoginReduxForm;