import axios from "axios";

import { errorMessage, successMessage } from "actions/alert";
import { POKERBOARD_TYPES } from "constants/actionTypes";
import { GAME_VALUES } from "constants/constant";
import { AUTH_MESSAGES, POKER_MESSAGE } from "constants/messages";
import { BACKEND_URLS } from "constants/urls";

const createGame = (body) => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_CRUD}`;
  if (!body.duration || body.duration.length === 0) {
    body.duration = GAME_VALUES.DEFAULT_DURATION;
  }
  const deck = body.deck.split(",").map(Number);
  const data = {
    name: body.name,
    duration: body.duration,
    deck: deck,
    estimate_type: body.estimateType,
  };
  axios
    .post(url, data)
    .then((res) => {
      dispatch(successMessage(POKER_MESSAGE.GAME_CREATED));
    })
    .catch((err) => {
      let message = "";
      if (err.response && err.response.data && err.response.data.name) {
        message = err.response.data.name[0];
      } else {
        message = AUTH_MESSAGES.SOMETHING_WENT_WRONG;
      }
      dispatch(errorMessage(message));
    });
};

const loadPokerboard = () => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_CRUD}`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: POKERBOARD_TYPES.LOAD_POKERBOARD,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const loadPoker = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_CRUD}${id}/`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: POKERBOARD_TYPES.LOAD_POKER,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const updatePoker = (body, id) => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_CRUD}${id}/`;
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: POKERBOARD_TYPES.LOAD_POKER,
        payload: res.data,
      });
      dispatch(successMessage(POKER_MESSAGE.GAME_EDITED));
    })
    .catch((err) => {
      let message = '';
      if(err.response && err.response.data && err.response.data.name) {
        message = err.response.data.name[0];
      } else {
        message = AUTH_MESSAGES.SOMETHING_WENT_WRONG;
      }
      dispatch(errorMessage(message));
    });
};

const loadPokerUsers = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_USERS}?pokerboard_id=${id}`;
  axios.get(url).then((res) => {
    dispatch({
      type: POKERBOARD_TYPES.LOAD_POKER_USERS,
      payload: res.data,
    });
  }).catch((err) => {
    dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
  });
}

const removePokerUser = (pokerUserId) => (dispatch) => {
  const url = `${BACKEND_URLS.POKER_USERS}${pokerUserId}/`;
  axios.delete(url).then((res) => {
    dispatch({
      type: POKERBOARD_TYPES.REMOVE_POKER_USER,
      payload: pokerUserId,
    });
  }).catch((err) => {
    dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
  });
}

export { createGame, loadPoker, loadPokerboard, loadPokerUsers, removePokerUser, updatePoker };
