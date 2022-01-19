import axios from "axios";

import { errorMessage, successMessage } from "actions/alert";
import { GROUP_TYPES } from "constants/actionTypes";
import { INVITATION_PURPOSE } from "constants/constant";
import { AUTH_MESSAGES, GROUP_MESSAGES } from "constants/messages";
import { BACKEND_URLS } from "constants/urls";

const resetGroupCreated = () => ({
  type: GROUP_TYPES.RESET_GROUP_CREATED,
});

const createGroup =
  (title, description = "") =>
  (dispatch) => {
    const url = `${BACKEND_URLS.GROUP_CRUD}`;
    const id = localStorage.getItem("id");
    const body = {
      title: title,
      description: description,
      users: [id],
      admin: id,
    };
    axios
      .post(url, body)
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
  const url = `${BACKEND_URLS.GROUP_CRUD}`;
  axios
    .get(url)
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

const listGroups = () => (dispatch) => {
  const url = `${BACKEND_URLS.LIST_GROUPS}`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GROUP_TYPES.LIST_GROUPS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch(errorMessage(GROUP_MESSAGES.LIST_GROUPS_FAILED));
    });
};

const sendInvitation =
  (id, email, purpose, role = "", group = "") =>
  (dispatch) => {
    let url;
    let body = {
      email: email,
      purpose: purpose,
      id: id,
    };
    if (purpose == INVITATION_PURPOSE.POKERBOARD) {
      if (group.length === 0)
        url = `${BACKEND_URLS.ACCOUNTS}${BACKEND_URLS.SEND_INVITATION}?role=${role}`;
      else {
        url = `${BACKEND_URLS.ACCOUNTS}${BACKEND_URLS.SEND_INVITATION}?role=${role}&group_title=${group}`;
        body = {
          id: id,
        }
      }
    } else {
      url = `${BACKEND_URLS.ACCOUNTS}${BACKEND_URLS.SEND_INVITATION}`;
    }
    axios
      .post(url, body)
      .then((res) => {
        dispatch(successMessage(GROUP_MESSAGES.INVITED_SUCCESSFULLY));
      })
      .catch((err) => {
        let message = "";
        if (
          err.response &&
          err.response.data &&
          err.response.data.non_field_errors &&
          err.response.data.non_field_errors[0]
        ) {
          message = err.response.data.non_field_errors[0];
        } else {
          message = AUTH_MESSAGES.LOGIN_FAILED_MESSAGE;
        }
        dispatch(errorMessage(message));
      });
  };

const deleteGroup = (id) => (dispatch) => {
  const url = `${BACKEND_URLS.GROUP_CRUD}${id}`;
  axios
    .delete(url)
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

const removeUser = (id, user) => (dispatch) => {
  const url = `${BACKEND_URLS.GROUP_CRUD}${id}/?user=${user}`;
  axios
    .delete(url)
    .then((res) => {
      let message = "";
      if (res.data.message) {
        message = res.data.message;
      } else {
        message = "success";
      }
      dispatch({
        type: GROUP_TYPES.REMOVE_USER,
        payload: {
          id,
          user,
        },
      });
      dispatch(successMessage(message));
    })
    .catch((err) => {
      const message = AUTH_MESSAGES.SOMETHING_WENT_WRONG;
      dispatch(errorMessage(message));
    });
};

export {
  createGroup,
  deleteGroup,
  listGroups,
  loadGroup,
  removeUser,
  resetGroupCreated,
  sendInvitation,
};
