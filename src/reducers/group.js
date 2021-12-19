import { GROUP_TYPES } from "../constants/actionTypes";


const InitialState = {
    search: [],
    ownedGroups: [],
};

const groupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GROUP_TYPES.GROUPS_LOADED:
            return {
                ...state,
                ownedGroups: action.payload.loadedGroups,
            };
        case GROUP_TYPES.SEARH_USER:
            return {
                ...state,
                search: action.payload.users,
            };
        default:
            return state;
    }
};

export default groupReducer;