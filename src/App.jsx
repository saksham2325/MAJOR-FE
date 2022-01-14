import "reactjs-popup/dist/index.css";
import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import AllGroupInvites from "components/Invites/AllGroupInvites";
import CreateGame from "components/Pokerboards/CreateGame";
import CreateNewGroup from "components/Groups/CreateNewGroup";
import Dashboard from "components/Pokerboards/Dashboard";
import EditProfile from "components/Profile/EditProfile/EditProfile";
import Homepage from 'containers/Homepage/Homepage';
import MyProfile from 'components/Profile/profileDetails/MyProfile';
import Navbar from 'components/Navbar/Navbar';
import OwnedGroups from 'components/Groups/OwnedGroups';
import OwnedPokerboards from "components/Pokerboards/OwnedPokerboards";
import PageNotFound from 'components/PageNotFound/PageNotFound';
import PokerboardUsers from "components/Pokerboards/PokerboardUsers";
import PostVerification from 'components/PostVerification';
import PrivateRoute from "components/Routes/PrivateRoute";
import PublicRoute from "components/Routes/PublicRoute";
import ReceiveGroupInvites from "components/Invites/RecieveGroupInvites";
import ResetPassword from "components/Profile/EditProfile/ResetPassword";
import Signin from 'containers/Signin/Signin';
import SentGroupInvites from "components/Invites/SentGroupInvites";
import { urls } from 'constants/urls';
import VerifyEmail from 'containers/Signup/Verify'
import VerifyGroupToken from 'containers/Signup/VerifyGroupToken';
import VerifySignupToken from 'containers/Signup/VerifySignupToken';
import WelcomePage from 'containers/WelcomePage/WelcomePage';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />  
                <Switch>
                    <PublicRoute exact path={urls.VERIFYSIGNUPTOKEN} component={VerifySignupToken}/>
                    <PublicRoute exact path={urls.VERIFYGROUPTOKEN} component={VerifyGroupToken}/>
                    <PublicRoute exact path={urls.VERIFY_EMAIL} component={VerifyEmail}/>
                    <PrivateRoute exact path={urls.CREATE_NEW_GROUP} component={CreateNewGroup}/>
                    <PrivateRoute exact path={urls.OWNED_GROUPS} component={OwnedGroups}/>
                    <PublicRoute exact path={urls.POST_VERIFICATION} component={PostVerification}/>
                    <PublicRoute exact path={urls.root} component={WelcomePage}/>
                    <PublicRoute exact path={urls.signin} component={Signin}/>
                    <PrivateRoute exact path={urls.home} component={Homepage}/>
                    <PrivateRoute exact path={urls.MY_PROFILE} component={MyProfile}/>
                    <PrivateRoute exact path={urls.RESET_PASSWORD} component={ResetPassword}/>
                    <PrivateRoute exact path={urls.EDIT_PROFILE} component={EditProfile}/>
                    <PrivateRoute exact path={urls.SENT_GROUP_INVITES} component={SentGroupInvites}/>
                    <PrivateRoute exact path={urls.ALL_GROUP_INVITES} component={AllGroupInvites}/>
                    <PrivateRoute exact path={urls.RECEIVED_GROUP_INVITES} component={ReceiveGroupInvites}/>
                    <PrivateRoute exact path={urls.CREATE_GAME} component={CreateGame}/>
                    <PrivateRoute exact path={urls.OWNED_POKERBOARD} component={OwnedPokerboards}/>
                    <PrivateRoute exact path={urls.DASHBOARD} component={Dashboard}/>
                    <PrivateRoute exact path={urls.POKERBOARD_MEMBERS} component={PokerboardUsers}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
