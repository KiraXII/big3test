import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk"
import appReducer from "./appReducer";

let reducers = combineReducers({
    app: appReducer
})



const store = createStore(reducers, applyMiddleware(thunk))


let state = store.getState();

window.state = state

export default store