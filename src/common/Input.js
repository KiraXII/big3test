import s from "./Input.module.scss";
import React from "react";

const Input = ({register, label, inputName, required, type}) => {
    return (
            <div className={s.Input}>
                <label>{label}</label>
                <input
                    name={inputName}
                    type={type}
                    ref={(register)({required: required})}
                />
            </div>
    )
}

export default Input