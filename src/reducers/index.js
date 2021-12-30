import { combineReducers } from "redux";

import alertReducer from "reducers/alert";
import authReducers from "reducers/auth";
import groupReducer from "reducers/group";
import invitesReducer from "reducers/invites";
import loadProfileReducer from "reducers/editprofile";
import navbar from "./navbar";
import pokerboardReducer from "reducers/pokerboard";

export default combineReducers({
  /*
        combines the multiple reducers into one
    */
  navbar,
  authReducers,
  alertReducer,
  groupReducer,
  invitesReducer,
  loadProfileReducer,
  pokerboardReducer,
});
