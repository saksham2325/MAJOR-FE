import axios from "axios";

import { AUTH_MESSAGES, GROUP_MESSAGES } from "constants/messages";
import { BACKEND_URLS, BASE_URL, urls } from "../constants/urls";
import { GROUP_TYPES } from "constants/actionTypes";
import { errorMessage, successMessage } from "actions/alert";

const resetGroupCreated = () => ({
  type: GROUP_TYPES.RESET_GROUP_CREATED,
});

const createGroup =
  (title, description = "") =>
  (dispatch) => {
    const url = `${BASE_URL}${BACKEND_URLS.GROUP_CRUD}`;
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Token ${token}`,
      },
    };
    const body = {
      title: title,
      description: description,
      users: [id],
      admin: id,
    };
    axios
      .post(url, body, config)
      .then((res) => {
        dispatch(successMessage(GROUP_MESSAGES.GROUP_CREATED));
        dispatch({
          type: GROUP_TYPES.GROUP_CREATED,
        });
      })
      .catch((err) => {
        if (err.response && err.response.data && err.response.data.title) {
          dispatch(errorMessage(err.response.data.title));
        } else {
          dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
        }
      });
  };

const loadGroup = () => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.GROUP_CRUD}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .get(url, config)
    .then((res) => {
      dispatch({
        type: GROUP_TYPES.GROUPS_LOADED,
        payload: {
          loadedGroups: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch(errorMessage(GROUP_MESSAGES.GROUPS_LOADED_FAILED));
    });
};

const sendInvitation = (id, email, purpose) => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.ACCOUNTS}${BACKEND_URLS.SEND_INVITATION}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const body = {
    email: email,
    purpose: purpose,
    id: id,
  };
  axios
    .post(url, body, config)
    .then((res) => {
      dispatch(successMessage(res.data.message));
    })
    .catch((err) => {
      dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

const deleteGroup = (id) => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.GROUP_CRUD}${id}`;
  const token = localStorage.getItem("token");
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios
    .delete(url, config)
    .then((res) => {
      dispatch({
        type: GROUP_TYPES.DELETE_GROUP,
        payload: {
          id,
        },
      });
    })
    .catch((err) => {
      dispatch(errorMessage(GROUP_MESSAGES.SOMETHING_WENT_WRONG));
    });
};

export {
  createGroup,
  deleteGroup,
  loadGroup,
  resetGroupCreated,
  sendInvitation,
};
