import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import WelcomePage from './containers/WelcomePage/WelcomePage';
import Signin from './containers/Signin/Signin';
import Signup from './containers/Signup/Signup';
import Homepage from './containers/Homepage/Homepage';
import { urls } from './constants/urls';
import VerifyEmail from './containers/Signup/Verify'
import CreateNewGroup from "./components/Groups/CreateNewGroup";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />  
                <Switch>
                    <Route exact path={urls.VERIFYEMAIL} component={VerifyEmail}></Route>
                    <Route exact path={urls.CREATE_NEW_GROUP} component={CreateNewGroup}></Route>
                    <Route path={urls.signin} component={Signin}></Route>
                    <Route path={urls.signup} component={Signup}></Route>
                    <Route path={urls.home} component={Homepage}></Route>
                    <Route path={urls.root} component={WelcomePage}></Route>
                    
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
