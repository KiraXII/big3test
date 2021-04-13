import SignIn from "./SignIn";
import {connect} from "react-redux";
import {signIn, signUp} from "../../redux/authReducer";
import React from "react"
import {Redirect} from "react-router-dom";
import SignUp from "./SignUp";


const Login = ({signUp, signIn, isAuth}) => {
    // const registration = ({name, login, password}) => {
    //     signUp(name, login, password)
    // }
    const login = ({login, password}) => {
        signIn(login, password)
    }

    if(isAuth){
        return <Redirect to={"/teams"}/>
    }

    return (
        <div>
            <SignIn />
            {/*<SignUp />*/}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.isAuth
})

export default connect(mapStateToProps, {signUp, signIn})(Login);