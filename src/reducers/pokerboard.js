import { POKERBOARD_TYPES } from "constants/actionTypes";
import durationConverter from "utils/durationConverter";

const initialState = {
  ownedPokerboards: [],
  pokerUsers: [],
  poker: {},
};

const pokerboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case POKERBOARD_TYPES.LOAD_POKERBOARD:
      return {
        ...state,
        ownedPokerboards: action.payload,
      };
    case POKERBOARD_TYPES.LOAD_POKER:
      const duration = durationConverter(action.payload.duration);
      return {
        ...state,
        poker: {
          ...state.poker,
          name: action.payload.name,
          estimateType: action.payload.estimate_type,
          deck: action.payload.deck,
          manager: action.payload.manager,
          duration: duration,
        },
      };
    case POKERBOARD_TYPES.LOAD_POKER_USERS:
      return {
        ...state,
        pokerUsers: action.payload,
      };
    case POKERBOARD_TYPES.REMOVE_POKER_USER:
      const newPokerUsers = state.pokerUsers.filter(
        (pokerUser) => pokerUser.id !== action.payload
      );
      return {
        ...state,
        pokerUsers: newPokerUsers,
      };
    default:
      return state;
  }
};

export default pokerboardReducer;
