import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./components/Login/Login";
import AppContent from "./components/AppContent/AppContent";
import {initializeApp} from "./redux/appReducer";
import {connect} from "react-redux";

const App = () => {
    useEffect(() => {
        initializeApp()
    })
    return (
        <BrowserRouter>
            <div className="app-container">
                <Switch>
                    <Route path="/" component={AppContent}/>
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        </BrowserRouter>);
}

const mapStateToProps = (state: any) => ({
    // initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
