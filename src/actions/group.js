import axios from "axios";

import { BACKEND_URLS, BASE_URL, urls } from "../constants/urls";
import { errorMessage, successMessage } from "./alert";
import { GROUP_MESSAGES } from "constants/messages";
import { GROUP_TYPES } from "./types";

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
        console.log(res.data);
        dispatch(successMessage(GROUP_MESSAGES.GROUP_CREATED));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errorMessage(err.message));
      });
  };

const searchUser = (value) => (dispatch) => {
  const url = "http://localhost:8000/accounts/users/1";
  const token = "b2b8c50642fd45d7e2b59dfda2067232ca88b7dc";
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GROUP_TYPES.SEARH_USER,
        payload: {
          users: res.data,
        },
      });
    })
    .catch((err) => {
      dispatch(errorMessage(err.message));
    });
};

export { searchUser, createGroup };
