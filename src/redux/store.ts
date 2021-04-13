import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import appReducer from "./appReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    app: appReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

let state:any = store.getState();

export default store