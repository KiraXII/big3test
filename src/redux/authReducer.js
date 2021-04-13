import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    name: null,
    login: null,
    avatarUrl: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
            }
        }
        default:
            return state
    }
}

export const setAuthUserData = (name, avatarUrl, isAuth) => ({
    type: SET_USER_DATA,
    data: {name, avatarUrl, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {name, avatarUrl} = (response.data.data)
                dispatch(setAuthUserData(name, avatarUrl, true));
            }
        })
}

export const signUp = (userName, login, password) => async (dispatch) => {
    let response = await authAPI.signUp(userName, login, password)
    if (response.data.resultCode === 0){
        window.alert("Registration success")
    }
}
export const signIn = (login, password) => async (dispatch) => {
    let response = await authAPI.signIn( login, password)
    if (response.data.resultCode === 0){
        let {name, avatarUrl} = (response.data.data)
        setAuthUserData(name, avatarUrl, true)
    }
}

export default authReducer;