import React from 'react';
import "reactjs-popup/dist/index.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import CreateNewGroup from "components/Groups/CreateNewGroup";
import OwnedGroups from 'components/Groups/OwnedGroups';
import AllGroupInvites from "components/Invites/AllGroupInvites";
import ReceiveGroupInvites from "components/Invites/RecieveGroupInvites";
import SentGroupInvites from "components/Invites/SentGroupInvites";
import Navbar from 'components/Navbar/Navbar';
import PageNotFound from 'components/PageNotFound/PageNotFound';
import CreateGame from "components/Pokerboards/CreateGame";
import Dashboard from "components/Pokerboards/Dashboard";
import OwnedPokerboards from "components/Pokerboards/OwnedPokerboards";
import PokerboardUsers from "components/Pokerboards/PokerboardUsers";
import PostVerification from 'components/PostVerification';
import EditProfile from "components/Profile/EditProfile/EditProfile";
import ResetPassword from "components/Profile/EditProfile/ResetPassword";
import MyProfile from 'components/Profile/profileDetails/MyProfile';
import PrivateRoute from "components/Routes/PrivateRoute";
import PublicRoute from "components/Routes/PublicRoute";
import Homepage from 'containers/Homepage/Homepage';
import Signin from 'containers/Signin/Signin';
import VerifyEmail from 'containers/Signup/Verify'
import VerifyGroupToken from 'containers/Signup/VerifyGroupToken';
import VerifyPokerToken from "containers/Signup/VerifyPokerToken";
import VerifySignupToken from 'containers/Signup/VerifySignupToken';
import WelcomePage from 'containers/WelcomePage/WelcomePage';
import { urls } from 'constants/urls';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <PublicRoute exact path={urls.VERIFYSIGNUPTOKEN} component={VerifySignupToken} />
                    <PublicRoute exact path={urls.VERIFYGROUPTOKEN} component={VerifyGroupToken} />
                    <PublicRoute exact path={urls.VERIFYPOKERTOKEN} component={VerifyPokerToken} />
                    <PublicRoute exact path={urls.VERIFY_EMAIL} component={VerifyEmail} />
                    <PrivateRoute exact path={urls.CREATE_NEW_GROUP} component={CreateNewGroup} />
                    <PrivateRoute exact path={urls.OWNED_GROUPS} component={OwnedGroups} />
                    <PublicRoute exact path={urls.POST_VERIFICATION} component={PostVerification} />
                    <PublicRoute exact path={urls.root} component={WelcomePage} />
                    <PublicRoute exact path={urls.signin} component={Signin} />
                    <PrivateRoute exact path={urls.home} component={Homepage} />
                    <PrivateRoute exact path={urls.MY_PROFILE} component={MyProfile} />
                    <PrivateRoute exact path={urls.RESET_PASSWORD} component={ResetPassword} />
                    <PrivateRoute exact path={urls.EDIT_PROFILE} component={EditProfile} />
                    <PrivateRoute exact path={urls.SENT_GROUP_INVITES} component={SentGroupInvites} />
                    <PrivateRoute exact path={urls.ALL_GROUP_INVITES} component={AllGroupInvites} />
                    <PrivateRoute exact path={urls.RECEIVED_GROUP_INVITES} component={ReceiveGroupInvites} />
                    <PrivateRoute exact path={urls.CREATE_GAME} component={CreateGame} />
                    <PrivateRoute exact path={urls.OWNED_POKERBOARD} component={OwnedPokerboards} />
                    <PrivateRoute exact path={urls.DASHBOARD} component={Dashboard} />
                    <PrivateRoute exact path={urls.POKERBOARD_MEMBERS} component={PokerboardUsers} />
                    <Route component={PageNotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
