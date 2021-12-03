import { ALERT_TYPES } from 'constants/actionTypes.js';


const initialState = {
    loginAlert: '',
    singupAlert: '',
};

const alertReducer = (state=initialState, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
};

export default alertReducer;
