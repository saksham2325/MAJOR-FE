import { GROUP_TYPES } from "constants/actionTypes";

const InitialState = {
  search: [],
  ownedGroups: [],
  groupCreated: false,
  allGroups: [],
};

const groupReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GROUP_TYPES.GROUPS_LOADED:
      return {
        ...state,
        ownedGroups: action.payload.loadedGroups,
      };
    case GROUP_TYPES.LIST_GROUPS:
      return {
        ...state,
        allGroups: action.payload,
      }
    case GROUP_TYPES.DELETE_GROUP:
      const newOwnedGroups = state.ownedGroups.filter(
        (group) => group.id !== action.payload.id
      );
      return {
        ...state,
        ownedGroups: newOwnedGroups,
      };
    case GROUP_TYPES.REMOVE_USER:
      const newOwnedGroupss = state.ownedGroups.filter(
        (group) => group.id !== action.payload.id
      );
      let newGroup = state.ownedGroups.find(
        (group) => group.id === action.payload.id
      );
      const newUsers = newGroup.users.filter(
        (user) => user.id !== action.payload.user
      );
      newGroup.users = newUsers;
      newOwnedGroupss.push(newGroup);
      return {
        ...state,
        ownedGroups: newOwnedGroupss,
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
