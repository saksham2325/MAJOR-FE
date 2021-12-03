import axios from 'axios';

import { AUTH_MESSAGE } from 'constants/messages';
import { AUTH_TYPES } from 'constants/actionTypes';
import { BACKEND_URLS, BASE_URL } from 'constants/urls';
import { loginErrorMessage, singupErrorMessage, successLoginMessage, successSignupMessage } from 'actions/alert';
import { RESPONSE_STATUS } from 'constants/values';

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
        dispatch({
            type: AUTH_TYPES.LOGIN_USER,
            payload: {
                user,
                token
            },
        });
        dispatch(successLoginMessage(AUTH_MESSAGE.LOGIN_SUCCESS_MESSAGE));
    }).catch(() => {
        dispatch(loginErrorMessage(AUTH_MESSAGE.LOGIN_FAILED_MESSAGE));
    });
};

const signupUser = (email='', password='', firstName='', lastName='') => (dispatch) => {
    const url = BASE_URL.concat(BACKEND_URLS.SIGNUP);
    const body = {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
    };
    return axios.post(url,body).then((res) => {
        dispatch(successSignupMessage(AUTH_MESSAGE.SIGNUP_SUCCESS_MESSAGE));
        const loginUrl = BASE_URL.concat(BACKEND_URLS.LOGIN);
        const loginBody = {
            email,
            password,
        };
        axios.post(loginUrl, loginBody).then((res) => {
            const user = res.data.user;
            const token = res.data.token;
            localStorage.setItem('token', token);
            console.log(token);
            dispatch({
                type: AUTH_TYPES.LOGIN_USER,
                payload: {
                    user,
                    token,
                },
            });
            dispatch(successLoginMessage(AUTH_MESSAGE.LOGIN_SUCCESS_MESSAGE));
        }).catch(() => {
            dispatch(loginErrorMessage(AUTH_MESSAGE.LOGIN_FAILED_MESSAGE));
        });
    }).catch((err) => {
        const response = err.response;
        if(response.status === RESPONSE_STATUS.ERROR) {
            if(response.data.email) {
                dispatch(singupErrorMessage(response.data.email));
            }
        } else {
            dispatch(singupErrorMessage(AUTH_MESSAGE.SIGNUP_FAILED_MESSAGE));
        }
       
    });
};

export { loginUser ,signupUser };
