import { combineReducers } from "redux";

import alertReducer from "reducers/alert";
import authReducers from "reducers/auth";
import loadProfileReducer from "reducers/editprofile";
import groupReducer from "reducers/group";
import invitesReducer from "reducers/invites";
import navbar from "reducers/navbar";
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
