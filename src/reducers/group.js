import { GROUP_TYPES } from "constants/actionTypes";

const InitialState = {
  search: [],
  ownedGroups: [],
  groupCreated: false,
};

const groupReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GROUP_TYPES.GROUPS_LOADED:
      return {
        ...state,
        ownedGroups: action.payload.loadedGroups,
      };
    case GROUP_TYPES.DELETE_GROUP:
      const newOwnedGroups = state.ownedGroups.filter(
        (elem) => elem.id !== action.payload.id
      );
      return {
        ...state,
        ownedGroups: newOwnedGroups,
      };
    case GROUP_TYPES.GROUP_CREATED:
      return {
        ...state,
        groupCreated: !state.groupCreated,
      };
    case GROUP_TYPES.RESET_GROUP_CREATED:
      return {
        ...state,
        groupCreated: false,
      };
    default:
      return state;
  }
};

export default groupReducer;
