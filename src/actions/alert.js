import { ALERT_TYPES } from 'constants/actionTypes';


export const resetLogoutAlert = () => ({
    type: ALERT_TYPES.RESET_LOGOUT_ALERT,
});

export const resetSignupAlert = () => ({
    type: ALERT_TYPES.RESET_SIGNUP_ALERT,
});

export const resetLoginAlert = () => ({
    type: ALERT_TYPES.RESET_LOGIN_ALERT,
});

export const successSignupMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFULL_SIGNUP_ALERT,
    payload: {msg},
});

export const loginErrorMessage = (msg) => ({
    type: ALERT_TYPES.LOGIN_FAILED_ALERT,
    payload: {msg},
});

export const singupErrorMessage = (msg) => ({
    type: ALERT_TYPES.SIGNUP_FAILED_ALERT,
    payload: {msg},
});

export const successLoginMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFULL_LOGIN_ALERT,
    payload: {msg},
});

export const logoutSuccessMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFULL_LOGIN_ALERT,
    payload: {msg},
});

export const logoutFailedMessage = (msg) => ({
    type: ALERT_TYPES.LOGOUT_FAILED_ALERT,
    payload: {msg},
});
