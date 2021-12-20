import "reactjs-popup/dist/index.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import Homepage from './containers/Homepage/Homepage';
import MyProfile from 'components/Profile/profileDetails/MyProfile';
import Navbar from './components/Navbar/Navbar';
import ResetPassword from "./components/Profile/EditProfile/ResetPassword";
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import { urls } from './constants/urls';


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
                    <Route exact path={urls.MY_PROFILE} component={MyProfile}/>
                    <Route exact path={urls.RESET_PASSWORD} component={ResetPassword}/>
                    <Route exact path={urls.EDIT_PROFILE} component={EditProfile}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
