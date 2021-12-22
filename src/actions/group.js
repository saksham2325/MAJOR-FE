import axios from "axios";

import { BACKEND_URLS, BASE_URL, urls } from "../constants/urls";
import { errorMessage, successMessage } from "./alert";
import { AUTH_MESSAGES, GROUP_MESSAGES } from "constants/messages";
import { GROUP_TYPES } from "../constants/actionTypes";


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
      })
      .catch((err) => {
        console.log(err.response.data);
        if(err.response.data.title) {
          dispatch(errorMessage(err.response.data.title));
        } else {
          dispatch(errorMessage(AUTH_MESSAGES.SOMETHING_WENT_WRONG));
        }
      });
  };

const loadGroup = () => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.GROUP_CRUD}`;
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  axios.get(url,config).then((res) => {
    dispatch(successMessage(GROUP_MESSAGES.GROUPS_LOADED));
    dispatch({
      type: GROUP_TYPES.GROUPS_LOADED,
      payload: {
        loadedGroups: res.data,
      },
    });
  }).catch((err) => {
    dispatch(errorMessage(GROUP_MESSAGES.GROUPS_LOADED_FAILED));
  }); 
};

const sendInvitation = (id, email, purpose) => (dispatch) => {
  const url = `${BASE_URL}${BACKEND_URLS.ACCOUNTS}${BACKEND_URLS.SEND_INVITATION}`;
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Token ${token}`,
    },
  };
  const body = {
    email: email,
    purpose: purpose,
    id: id
  }
  axios.post(url, body, config).then((res) => {
    dispatch(successMessage(res.data.message));
  }).catch((err) => {
    dispatch(errorMessage(err.data));
  });
};

export { createGroup, loadGroup, sendInvitation };
