import axios from "axios";

import { errorMessage, successMessage } from "actions/alert";
import { INVITE_TYPES } from "constants/actionTypes";
import { GROUP_INVITATION_STATUS } from "constants/constant";
import { AUTH_MESSAGES, INVITATION_MESSAGE } from "constants/messages";
import { BACKEND_URLS } from "constants/urls";

const loadSentGroupInvites = () => (dispatch) => {
  const url = `${BACKEND_URLS.SENT_GROUP_INVITES}`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: INVITE_TYPES.LOAD_SENT_INVITES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const cancelInvite = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.SENT_GROUP_INVITES}${id}/`;
  const body = {
    status: GROUP_INVITATION_STATUS.CANCELLED,
  };
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: INVITE_TYPES.CANCEL_INVITE,
        payload: {
          id: id,
          data: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const loadRecieveGroipInvites = (email) => (dispatch) => {
  const url = `${BACKEND_URLS.RECEIVED_GROUP_INVITES}?email=${email}`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: INVITE_TYPES.LOAD_RECEIVED_INVITES,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const acceptInvite = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.RECEIVED_GROUP_INVITES}/${id}/`;
  const body = {
    status: GROUP_INVITATION_STATUS.ACCEPTED,
  };
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: INVITE_TYPES.ACCEPT_INVITE,
        payload: id,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const declineInvite = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.RECEIVED_GROUP_INVITES}/${id}/`;
  const body = {
    status: GROUP_INVITATION_STATUS.DECLINED,
  };
  axios
    .patch(url, body)
    .then((res) => {
      dispatch({
        type: INVITE_TYPES.DECLINE_INVITE,
        payload: id,
      });
      dispatch(successMessage(INVITATION_MESSAGE.INVITATION_DECLINED));
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

export {
  acceptInvite,
  cancelInvite,
  declineInvite,
  loadRecieveGroipInvites,
  loadSentGroupInvites,
};
