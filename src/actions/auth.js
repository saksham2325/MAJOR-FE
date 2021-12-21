import axios from "axios";

import { AUTH_MESSAGES, STATUS } from "constants/messages";
import { AUTH_TYPES } from "constants/actionTypes";
import { BACKEND_URLS, BASE_URL, urls } from "constants/urls";
import {
  errorMessage,
  loginErrorMessage,
  logoutFailedMessage,
  logoutSuccessMessage,
  singupErrorMessage,
  successLoginMessage,
  successMessage,
  successSignupMessage,
} from "actions/alert";
import { RESPONSE_STATUS } from "constants/values";


const loginUser = (email, password) => (dispatch) => {
    const url = `${BASE_URL}${BACKEND_URLS.LOGIN}`;
    const body = {
        email,
        password,
    };
    return axios.post(url,body).then((res) => {
        const user = res.data.user;
        const token = res.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        localStorage.setItem('id', user.id)
        dispatch({
            type: AUTH_TYPES.LOGIN_USER,
            payload: {
                user,
                token
            },
        });
        dispatch(successLoginMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
    }).catch(() => {
        dispatch(loginErrorMessage(AUTH_MESSAGES.LOGIN_FAILED_MESSAGE));
    });
};

const signupUser =
  (email, password, firstName, lastName = "", token) =>
  (dispatch) => {
    const url = `${BASE_URL}${BACKEND_URLS.SIGNUP}`;
    const body = {
      email,
      password,
      first_name: firstName,
      last_name: lastName,
      token
    };
    return axios
      .post(url, body)
      .then((res) => {
        dispatch(successSignupMessage(AUTH_MESSAGES.SIGNUP_SUCCESS_MESSAGE));
        const loginUrl = BASE_URL.concat(BACKEND_URLS.LOGIN);
        const loginBody = {
          email,
          password,
        };
        axios
          .post(loginUrl, loginBody)
          .then((res) => {
            const user = res.data.user;
            const token = res.data.token;
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            localStorage.setItem('id',user.id);
            dispatch({
              type: AUTH_TYPES.LOGIN_USER,
              payload: {
                user,
                token,
              },
            });
            dispatch(successLoginMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
          })
          .catch(() => {
            dispatch(loginErrorMessage(AUTH_MESSAGES.LOGIN_FAILED_MESSAGE));
          });
      })
      .catch((err) => {
        const response = err.response;
        if (response.status === RESPONSE_STATUS.ERROR) {
          if (response.data.email) {
            dispatch(singupErrorMessage(response.data.email));
          }
        } else {
          dispatch(singupErrorMessage(AUTH_MESSAGES.SIGNUP_FAILED_MESSAGE));
        }
      });
  };

const logoutUser = () => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.LOGOUT}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .post(url, {}, config)
    .then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem('id');
      localStorage.removeItem('userToken');
      dispatch({
        type: AUTH_TYPES.LOGOUT_USER,
      });
      dispatch(logoutSuccessMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
    })
    .catch((err) => {
      dispatch(logoutFailedMessage(AUTH_MESSAGES.LOGOUT_FAILED_MESSAGE));
    });
};

const verifyUser = (formData) => (dispatch) => {
  //  first check if the user with email already exist or not, if yes then simply return with the message else continue the process.
  const url = `${BASE_URL}${BACKEND_URLS.SEARCH_USER}?search=${formData.email}`;
  console.log(url);
  axios
    .get(url)
    .then((res) => {
      if (res.data.length == 0) {
        const url = `${BASE_URL}${BACKEND_URLS.SENDTOKEN}`;
        const body = {
            email: formData.email,
            name: formData.name,
            purpose: 0,
        }
        axios.post(url, body).then((res) => {
            dispatch(successMessage(res.data.message));
        }).catch((err) => {
            dispatch(errorMessage(err.response));
        });
      } else {
        dispatch(successMessage('user already exist with this mail'));
      }
    })
    .catch((err) => {
      dispatch(errorMessage('something went wrong'));
    });
};

const verifyToken = (token, history) => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.VERIFYTOKEN}`;
  const body = {
    token,
  };
  console.log(url);
  console.log(body);
  axios
    .post(url, body)
    .then((res) => {
        if(res.status == STATUS.HTTP_204_NO_CONTENT) {
          console.log(res.status);
          history.push(urls.AFTER_VERIFICATION);
          dispatch(successMessage(res.data.message));
          return
        } 
        dispatch(successMessage(res.data.message));
    })
    .catch((err) => {
      history.push(urls.AFTER_VERIFICATION);
      dispatch(errorMessage(err.response.data.message));
    });
};

export { loginUser, logoutUser, signupUser, verifyUser, verifyToken };
