import { act } from "react-dom/test-utils";
import { GROUP_TYPES } from "../actions/types";


const InitialState = {
    search: [],
};

const GroupReducer = (state = InitialState, action) => {
    switch (action.type) {
        case GROUP_TYPES.SEARH_USER:
            return {
                ...state,
                search: action.payload.users,
            };
        default:
            return state;
    }
};

export default GroupReducer;