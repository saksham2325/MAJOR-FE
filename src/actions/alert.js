import { ALERT_TYPES } from 'constants/actionTypes';


export const resetAlert = () => ({
    type: ALERT_TYPES.RESET_ALERT
});

export const successMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESS_ALERT,
    payload: {msg},
});

export const errorMessage = (msg) => ({
    type: ALERT_TYPES.ERROR_ALERT,
    payload: {msg},
});

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
    type: ALERT_TYPES.SUCCESSFULL_LOGOUT_ALERT,
    payload: {msg},
});

export const logoutFailedMessage = (msg) => ({
    type: ALERT_TYPES.LOGOUT_FAILED_ALERT,
    payload: {msg},
});

export const loadProfileSuccessMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFULL_LOAD_USER,
    payload: {msg},
});

export const loadProfileFailedMessage = (msg) => ({
    type: ALERT_TYPES.FAILED_LOAD_USER,
    payload: {msg},
});

export const loadUserGroupsSuccessMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFULL_LOAD_USER_GROUPS,
    payload: {msg},
});

export const loadUserGroupsFailedMessage = (msg) => ({
    type: ALERT_TYPES.FAILED_LOAD_USER_GROUPS,
    payload: {msg},
});

export const updateProfileSuccessfullMessage = (msg) => ({
    type: ALERT_TYPES.SUCCESSFUL_UPDATE_USER,
    payload: {msg},
});

export const updateProfileFailedMessage = (msg) => ({
    type: ALERT_TYPES.FAILED_UPDATE_USER,
    payload: {msg},
});
