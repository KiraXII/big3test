import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
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
          <Login />
          {/*<AppContent/>*/}
      </div>
    </BrowserRouter>  );
}

const mapStateToProps = (state) => ({
    // initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
