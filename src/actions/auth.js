import axios from 'axios';

import { AUTH_MESSAGES } from 'constants/messages';
import { AUTH_TYPES } from 'constants/actionTypes';
import { BACKEND_URLS, BASE_URL } from 'constants/urls';
import { loginErrorMessage, logoutFailedMessage, logoutSuccessMessage, singupErrorMessage, successLoginMessage, successSignupMessage } from 'actions/alert';
import { RESPONSE_STATUS } from 'constants/values';

// function camelToSnake(string) {
//     return string.replace(/[\w]([A-Z])/g, function(m) {
//         return m[0] + '_' + m[1];
//     }).toLowerCase();
// }

const loginUser = (email='', password='') => (dispatch) => {
    const url = BASE_URL.concat(BACKEND_URLS.LOGIN);
    const body = {
        email,
        password,
    };
    return axios.post(url,body).then((res) => {
        const user = res.data.user;
        const token = res.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
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

const signupUser = (email='', password='', firstName='', lastName='') => (dispatch) => {
    const url = BASE_URL.concat(BACKEND_URLS.SIGNUP);
    // const firstName = camelToSnake('firstName');
    // const lastName = camelToSnake('lastName');
    // console.log(firstName);
    // console.log(lastName);
    const body = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
    };
    return axios.post(url,body).then((res) => {
        dispatch(successSignupMessage(AUTH_MESSAGES.SIGNUP_SUCCESS_MESSAGE));
        const loginUrl = BASE_URL.concat(BACKEND_URLS.LOGIN);
        const loginBody = {
            email,
            password,
        };
        axios.post(loginUrl, loginBody).then((res) => {
            const user = res.data.user;
            const token = res.data.token;
            localStorage.setItem('token', token);
            localStorage.setItem('user', user);
            console.log(token);
            dispatch({
                type: AUTH_TYPES.LOGIN_USER,
                payload: {
                    user,
                    token,
                },
            });
            dispatch(successLoginMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
        }).catch(() => {
            dispatch(loginErrorMessage(AUTH_MESSAGES.LOGIN_FAILED_MESSAGE));
        });
    }).catch((err) => {
        const response = err.response;
        if(response.status === RESPONSE_STATUS.ERROR) {
            if(response.data.email) {
                dispatch(singupErrorMessage(response.data.email));
            }
        } else {
            dispatch(singupErrorMessage(AUTH_MESSAGES.SIGNUP_FAILED_MESSAGE));
        }
       
    });
};

const logoutUser = () => (dispatch) => {
    const url = BASE_URL.concat(BACKEND_URLS.LOGOUT);
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': `Token ${token}`,
        },
    };
    axios.post(url, {}, config).then(() => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch({
            type: AUTH_TYPES.LOGOUT_USER,
        });
        dispatch(logoutSuccessMessage(AUTH_MESSAGES.LOGIN_SUCCESS_MESSAGE));
    }).catch((err) => {
        dispatch(logoutFailedMessage(AUTH_MESSAGES.LOGOUT_FAILED_MESSAGE));
    });
};

export { loginUser, logoutUser, signupUser };
