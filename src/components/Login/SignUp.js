import React from 'react';
import s from "./LoginForm.module.scss"
import rightImg from "../../assets/images/sign-up.png"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import Input from "../../common/Input";

const SignUp = () => {

    const schema = yup.object().shape({
        userName: yup.string().required(),
        login: yup.string().required(),
        password: yup.string().required().min(4).max(15),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null])
    })

    const {register, handleSubmit, errors} = useForm({resolver: yupResolver(schema), mode: "onChange"});

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
                    <form
                        onSubmit={handleSubmit(onSubmit, onErrors)}
                    >
                        <h1>Sign Up</h1>
                        <Input
                            register={register}
                            errors={errors}
                            label="Name"
                            required={true}
                            inputName="userName"
                            type="text"
                        />
                        <p className={s.error}>{errors.userName?.message}</p>
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
                        <Input
                            register={register}
                            errors={errors}
                            label="Enter your password again"
                            required={true}
                            inputName="confirmPassword"
                            type="password"
                        />
                        <p className={s.error}>{errors.confirmPassword && "Password should match!"}</p>
                        <button type="submit">Sign Up</button>
                        <div className={s.subButton}>
                            <span>Already a member? </span>
                            <a href="">Sign in</a>
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

export default SignUp;