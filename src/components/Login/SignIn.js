import React from 'react';
import s from "./LoginForm.module.scss"
import rightImg from "../../assets/images/SignInWall.svg"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../common/Input";

const SignIn = () => {

    const schema = yup.object().shape({
        login: yup.string().required(),
        password: yup.string().required().min(4).max(15),
    })

    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema),mode: "onChange"});

    const onSubmit = (data) => {
        console.log(data)
    }
    const onErrors = (errors) => {
        console.log(errors)
    }

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <div className={s.formWrapper}>
                    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
                        <h1>Sign In</h1>
                        <Input
                            register={register}
                            errors={errors}
                            label="Login"
                            required={true}
                            inputName="login"
                            type="text"
                        />
                        <p className={s.error}>{errors.login?.message}</p>
                        <Input
                            register={register}
                            errors={errors}
                            label="Password"
                            required={true}
                            inputName="password"
                            type="password"
                        />
                        <p className={s.error}>{errors.password?.message}</p>
                        <button type="submit">Sign In</button>
                            <div className={s.subButton}>
                                <span>Not a member yet? </span>
                                <a href="">Sign up</a>
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


export default SignIn;