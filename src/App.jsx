import "reactjs-popup/dist/index.css";
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AfterVerification from 'components/AfterVerification';
import CreateNewGroup from "components/Groups/CreateNewGroup";
import EditProfile from "components/Profile/EditProfile/EditProfile";
import Homepage from 'containers/Homepage/Homepage';
import MyProfile from 'components/Profile/profileDetails/MyProfile';
import Navbar from 'components/Navbar/Navbar';
import OwnedGroups from 'components/Groups/OwnedGroups';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import ResetPassword from "components/Profile/EditProfile/ResetPassword";
import Signin from 'containers/Signin/Signin';
import Signup from 'containers/Signup/Signup';
import { urls } from 'constants/urls';
import VerifyEmail from 'containers/Signup/Verify'
import WelcomePage from 'containers/WelcomePage/WelcomePage';


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />  
                <Switch>
                    <Route exact path={urls.VERIFYEMAIL} component={VerifyEmail}/>
                    <Route exact path={urls.CREATE_NEW_GROUP} component={CreateNewGroup}/>
                    <Route exact path={urls.OWNED_GROUPS} component={OwnedGroups}/>
                    <Route exact path={urls.AFTER_VERIFICATION} component={AfterVerification}/>
                    <Route exact path={urls.root} component={WelcomePage}/>
                    <Route exact path={urls.signin} component={Signin}/>
                    <Route exact path={urls.signup} component={Signup}/>
                    <Route exact path={urls.home} component={Homepage}/>
                    <Route exact path={urls.MY_PROFILE} component={MyProfile}/>
                    <Route exact path={urls.RESET_PASSWORD} component={ResetPassword}/>
                    <Route exact path={urls.EDIT_PROFILE} component={EditProfile}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
