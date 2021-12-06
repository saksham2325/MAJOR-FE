import { AUTH_TYPES } from 'constants/actionTypes';


const initialState = {
    user: {},
    token: '',
};

const authReducers = (state=initialState, action) => {
    switch(action.type) {
        case AUTH_TYPES.LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
            };
        case AUTH_TYPES.LOGOUT_USER:
            return {
                ...state,
                user: {},
                token: '',
            };
        default:
            return state;
    }
};

export default authReducers;
