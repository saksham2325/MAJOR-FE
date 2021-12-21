import { PROFILE_TYPES } from 'constants/actionTypes';


const initialState = {
    id: 0,
    email: '',
    firstName: '',
    lastName: '',
};

const loadProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case PROFILE_TYPES.LOAD_PROFILE:
            return {
                ...state,
                id: action.payload.id,
                email: action.payload.email,
                firstName: action.payload.first_name,
                lastName: action.payload.last_name,
            };
        case PROFILE_TYPES.LOAD_USER_GROUPS:
            return {
                ...state,
                userGroups: action.payload,
            }
        default:
            return state;
    }
};

export default loadProfileReducer;
