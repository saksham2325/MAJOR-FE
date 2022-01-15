import axios from "axios";

import { errorMessage, successMessage } from "actions/alert";
import { AUTH_TYPES } from "constants/actionTypes";
import { objectKeysToSnake } from "utils/caseConverter";
import { INVITATION_PURPOSE, RESPONSE_STATUS } from "constants/constant";
import { AUTH_MESSAGES, STATUS } from "constants/messages";
import { BACKEND_URLS, urls } from "constants/urls";

const loginUser = (email, password) => (dispatch) => {
  const url = `${BACKEND_URLS.LOGIN}`;
  const body = {
    email,
    password,
  };
  return axios
    .post(url, body)
    .then((res) => {
      const user = res.data.user;
      const token = res.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      localStorage.setItem("id", user.id);
      dispatch({
        type: AUTH_TYPES.LOGIN_USER,
        payload: {
          user,
          token,
        },
      });
      dispatch(successMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
    })
    .catch((err) => {
      let message = "";
      if (
        err.response &&
        err.response.data &&
        err.response.data.non_field_errors &&
        err.response.data.non_field_errors[0]
      ) {
        message = err.response.data.non_field_errors[0];
      } else {
        message = AUTH_MESSAGES.LOGIN_FAILED_MESSAGE;
      }
      dispatch(errorMessage(message));
    });
};

const signupUser =
  (email, password, firstName, lastName = "", token) =>
  (dispatch) => {
    const url = `${BACKEND_URLS.SIGNUP}`;
    const body = objectKeysToSnake({
      email,
      password,
      firstName: firstName,
      lastName: lastName,
      token,
    });
    return axios
      .post(url, body)
      .then((res) => {
        dispatch(successMessage(AUTH_MESSAGES.SIGNUP_SUCCESS_MESSAGE));
        dispatch(loginUser(email, password));
      })
      .catch((err) => {
        const response = err.response;
        if (response.status === RESPONSE_STATUS.ERROR) {
          if (response.data.email) {
            dispatch(errorMessage(response.data.email));
          }
        } else {
          dispatch(errorMessage(AUTH_MESSAGES.SIGNUP_FAILED_MESSAGE));
        }
      });
  };

const logoutUser = () => (dispatch) => {
  const url = `${BACKEND_URLS.LOGOUT}`;
  axios
    .post(url)
    .then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("id");
      dispatch({
        type: AUTH_TYPES.LOGOUT_USER,
      });
      dispatch(successMessage(AUTH_MESSAGES.LOGOUT_SUCCESS_MESSAGE));
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.LOGOUT_FAILED_MESSAGE));
    });
};

const verifyUser = (formData) => (dispatch) => {
  const url = `${BACKEND_URLS.SENDTOKEN}`;
  const body = {
    email: formData.email,
    name: formData.name,
    purpose: INVITATION_PURPOSE.SIGNUP,
  };
  axios
    .post(url, body)
    .then((res) => {
      dispatch(successMessage(AUTH_MESSAGES.MAIL_SENT));
    })
    .catch((err) => {
      const response = err.response;
      if (response && response.data.email) {
        dispatch(errorMessage(response.data.email));
      } else {
        dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
      }
    });
};

const verifySignupToken = (token, history) => (dispatch) => {
  const url = `${BACKEND_URLS.VERIFYSIGNUPTOKEN}`;
  const body = {
    token,
  };
  axios
    .post(url, body)
    .then((res) => {
      dispatch(successMessage(res.data.message));
      dispatch({
        type: AUTH_TYPES.VERIFY_USER,
        payload: res.data,
      });
    })
    .catch((err) => {
      let message = "";
      if (
        err.response &&
        err.response.data &&
        err.response.data.non_field_errors &&
        err.response.data.non_field_errors[0]
      ) {
        message = err.response.data.non_field_errors[0];
      } else {
        message = AUTH_MESSAGES.LOGIN_FAILED_MESSAGE;
      }
      history.push(urls.POST_VERIFICATION);
      dispatch(errorMessage(message));
    });
};

const verifyGroupToken = (token, history, purpose) => (dispatch) => {
  let url = ''
  if (purpose===INVITATION_PURPOSE.GROUP) {
    url = `${BACKEND_URLS.VERIFYGROUPTOKEN}`;
  } else {
    url = `${BACKEND_URLS.VERIFYPOKERTOKEN}`;
  }
  const body = {
    token,
  };
  axios
    .post(url, body)
    .then((res) => {
      let message = res.data.message;
      if (res.data.status && res.data.status === STATUS.HTTP_201_CREATED) {
        history.push(urls.POST_VERIFICATION);
        dispatch(successMessage(message));
      } else {
        dispatch(successMessage(res.data.message));
        dispatch({
          type: AUTH_TYPES.VERIFY_USER,
          payload: res.data,
        });
      }
    })
    .catch((err) => {
      let message = "";
      if (
        err.response &&
        err.response.data &&
        err.response.data.non_field_errors &&
        err.response.data.non_field_errors[0]
      ) {
        message = err.response.data.non_field_errors[0];
      } else {
        message = AUTH_MESSAGES.LOGIN_FAILED_MESSAGE;
      }
      history.push(urls.POST_VERIFICATION);
      dispatch(errorMessage(message));
    });
};

export {
  loginUser,
  logoutUser,
  signupUser,
  verifyUser,
  verifySignupToken,
  verifyGroupToken,
};
