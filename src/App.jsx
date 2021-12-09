import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "reactjs-popup/dist/index.css";

import './App.css';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Homepage from './containers/Homepage/Homepage';
import { urls } from './constants/urls';


import EditProfile from "./components/EditProfile/EditProfile";
import ResetPassword from "./components/EditProfile/ResetPassword";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />  
                <Switch>
                    <Route exact path={urls.root} component={WelcomePage}/>
                    <Route exact path={urls.signin} component={Signin}/>
                    <Route exact path={urls.signup} component={Signup}/>
                    <Route exact path={urls.home} component={Homepage}/>
                    <Route exact path={urls.RESET_PASSWORD} component={ResetPassword}/>
                    <Route exact path={urls.EDIT_PROFILE} component={EditProfile}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
