import { AUTH_TYPES } from 'constants/actionTypes';


const initialState = {
    user: {},
    token: '',
    isAuthenticate: false,
    verifyState: {},
};

const authReducers = (state=initialState, action) => {
    switch(action.type) {
        case AUTH_TYPES.LOGIN_USER:
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isAuthenticate: true,
            };
        case AUTH_TYPES.LOGOUT_USER:
            return {
                ...state,
                user: {},
                token: '',
                isAuthenticate: false,
            };
        case AUTH_TYPES.VERIFY_USER:
            console.log(action.payload);
            return {
                ...state,
                verifyState: {...state.verifyState, email: action.payload.email, name: action.payload.name},
            }
        default:
            return state;
    }
};

export default authReducers;
