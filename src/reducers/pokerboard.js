const { POKERBOARD_TYPES } = require("constants/actionTypes");

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
      return {
        ...state,
        poker: {
          ...state.poker,
          name: action.payload.name,
          estimateType: action.payload.estimate_type,
          deck: action.payload.deck,
          manager: action.payload.manager,
          duration: action.payload.duration,
        },
      };
    case POKERBOARD_TYPES.LOAD_POKER_USERS:
      return {
        ...state,
        pokerUsers: action.payload,
      }
    default:
      return state;
  }
};

export default pokerboardReducer;
