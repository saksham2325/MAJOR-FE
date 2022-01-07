import axios from "axios";

import { BACKEND_URLS } from "constants/urls";
import { errorMessage, successMessage } from "actions/alert";
import { AUTH_MESSAGES, PROFILE_MESSAGES } from "constants/messages";
import { PROFILE_TYPES } from "constants/actionTypes";
import { objectKeysToSnake } from "constants/caseConverter";

const resetProfileUpdated = () => ({
  type: PROFILE_TYPES.RESET_PROFILE_UPDATED,
});

const loadProfile = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.USER_CRUD}${id}/`;
  return axios
    .get(url)
    .then((res) => {
      dispatch({
        type: PROFILE_TYPES.LOAD_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(PROFILE_MESSAGES.LOAD_PROFILE_FAILED_MESSAGE));
    });
};

const editProfile = (data) => (dispatch) => {
  const url = `${BACKEND_URLS.USER_CRUD}${data.id}/`;
  const body = objectKeysToSnake({
    firstName: data.firstName,
    lastName: data.lastName,
  });
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: PROFILE_TYPES.PROFILE_UPDATED,
      });
      dispatch(successMessage(PROFILE_MESSAGES.UPDATE_USER_SUCCESS_MESSAGE));
      dispatch({
        type: PROFILE_TYPES.LOAD_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(PROFILE_MESSAGES.UPDATE_USER_FAILED_MESSAGE));
    });
};

const updatePassword = (data) => (dispatch) => {
  const url = `${BACKEND_URLS.UPDATE_PASSWORD}${data.id}/`;
  const body = objectKeysToSnake({
    oldPassword: data.currentPassword,
    newPassword: data.password,
  });
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: PROFILE_TYPES.PROFILE_UPDATED,
      });
      dispatch(successMessage(res.data.message));
    })
    .catch((err) => {
      if (err.response.data && err.response.data.message) {
        dispatch(errorMessage(err.response.data.message));
      } else {
        dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
      }
    });
};

export { editProfile, loadProfile, resetProfileUpdated, updatePassword };
