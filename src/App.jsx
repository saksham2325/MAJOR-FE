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

import { APP_URLS } from "./constants/urls";
import CreateNewGroup from "./component/CreateNewGroup";

function App() {
<<<<<<< HEAD
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />  
                <Switch>
                    <Route exact path={urls.VERIFYEMAIL} component={VerifyEmail}></Route>
                    <Route path={urls.signin} component={Signin}></Route>
                    <Route path={urls.signup} component={Signup}></Route>
                    <Route path={urls.home} component={Homepage}></Route>
                    <Route path={urls.root} component={WelcomePage}></Route>
                    <Route path={APP_URLS.RESET_PASSWORD} ><ResetPassword/></Route>
                    <Route path={APP_URLS.EDIT_PROFILE}><EditProfile/></Route>
                    <Route path={APP_URLS.CREATE_NEW_GROUP}><CreateNewGroup/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
=======
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={APP_URLS.CREATE_NEW_GROUP} component={CreateNewGroup}/>
        {/* <Route path={APP_URLS.CREATE_NEW_GROUP}><CreateNewGroup/></Route> */}
      </Switch>
    </BrowserRouter>
  );
>>>>>>> temp branch
}

export default App;
