import { PROFILE_TYPES } from "constants/actionTypes";
import { objectKeysToCamel } from "utils/caseConverter";

const initialState = {
  id: 0,
  email: "",
  firstName: "",
  lastName: "",
  profileUpdated: false,
};

const loadProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_TYPES.LOAD_PROFILE:
      const data = objectKeysToCamel(action.payload);
      return {
        ...state,
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
      };
    case PROFILE_TYPES.PROFILE_UPDATED:
      return {
        ...state,
        profileUpdated: !state.profileUpdated,
      };
    case PROFILE_TYPES.RESET_PROFILE_UPDATED:
      return {
        ...state,
        profileUpdated: false,
      };
    default:
      return state;
  }
};

export default loadProfileReducer;
