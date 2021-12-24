import { combineReducers } from "redux";

import alertReducer from "reducers/alert";
import authReducers from "reducers/auth";
import groupReducer from "./group";
import loadProfileReducer from "reducers/editprofile";
import navbar from "./navbar";

export default combineReducers({
  /*
        combines the multiple reducers into one
    */
  navbar,
  authReducers,
  alertReducer,
  groupReducer,
  loadProfileReducer,
});
