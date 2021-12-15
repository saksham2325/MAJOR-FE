import { ALERT_TYPES } from 'constants/actionTypes.js';


const initialState = {
    loginAlert: '',
    singupAlert: '',
    logoutAlert: '',
    alert: ''
};

const alertReducer = (state=initialState, action) => {
    switch(action.type) {
        case ALERT_TYPES.RESET_ALERT:
            return {
                ...state,
                alert: ''
            };
        case ALERT_TYPES.SUCCESS_ALERT:
            return {
                ...state,
                alert: action.payload.msg
            };
        case ALERT_TYPES.ERROR_ALERT:
            return {
                ...state,
                alert: action.payload.msg
            };
        case ALERT_TYPES.SUCCESSFULL_SIGNUP_ALERT:
            return {
                ...state,
                singupAlert: action.payload.msg
            };
        case ALERT_TYPES.SIGNUP_FAILED_ALERT:
            return {
                ...state,
                singupAlert: action.payload.msg
            };
        case ALERT_TYPES.LOGIN_FAILED_ALERT:
            return {
                ...state,
                loginAlert: action.payload.msg,
            };
        case ALERT_TYPES.SUCCESSFULL_LOGIN_ALERT:
            return {
                ...state,
                loginAlert: action.payload.msg,
            };
        case ALERT_TYPES.SUCCESSFULL_LOGOUT_ALERT:
            return {
                ...state,
                logoutAlert: action.payload.msg,
            };
        case ALERT_TYPES.LOGOUT_FAILED_ALERT:
            return {
                ...state,
                logoutAlert: action.payload.msg,
            };
        case ALERT_TYPES.RESET_LOGIN_ALERT:
            return {
                ...state,
                loginAlert: '',
            };
        case ALERT_TYPES.RESET_SIGNUP_ALERT:
            return {
                ...state,
                singupAlert: '',
            };
        case ALERT_TYPES.RESET_LOGOUT_ALERT:
            return {
                ...state,
                logoutAlert: '',
            };
        default:
            return state;
    }
};

export default alertReducer;
