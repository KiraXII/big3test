import React, {useState} from 'react';
import s from "./LoginForm.module.scss"
import rightImg from "../../assets/images/SignInWall.svg"

const SignIn = ({handleSubmit}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginTouched, setLoginTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "login":
                setLoginTouched(true)
            case "password":
                setPasswordTouched(true)
                break
        }
    }

    const loginHandler = (e) => {
        setLogin(e.target.value)
        if (!e.target.value){
            setLoginError('Еhe login cannot be empty')
        } else {
            setLoginError('')
        }

    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)

        if(!e.target.value.length)
            return setPasswordError('Еhe password cannot be empty')
        if(e.target.value.length < 3)
            return setPasswordError('The password cannot be less than 3 characters')
        else if(e.target.value.length > 16)
            return setPasswordError('The password can not be more than 16 characters')
        else {
            setPasswordError('')
        }
    }
    console.log(handleSubmit)
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.formWrapper}>
                    <form onSubmit={handleSubmit}>
                        <h1>Sign In</h1>
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
                                <button>Sign In</button>
                        </div>
                        <div className={s.item}>
                            <div className={s.subButton}>
                                <span>Not a member yet? </span>
                                <a href="">Sign up</a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className={s.imageWrapper}>
                    <div className={s.loginImage}>
                        <img src={rightImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

// const LoginReduxForm = reduxForm ({form: "signIn"})(SignIn)
//
// export default LoginReduxForm;