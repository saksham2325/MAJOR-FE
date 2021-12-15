import axios from "axios";
import { errorMessage, successMessage } from "./alert";
import { GROUP_TYPES } from "./types";

const createGroup = (data) => (dispatch) => {
  const url = "http://localhost:8000/accounts/users/";
  axios
    .post(url, data)
    .then((res) => {
      console.log(res.data);
      dispatch(successMessage("Group created Successfully"));
    })
    .catch((err) => {
      dispatch(errorMessage(err.message));
    });
};

const searchUser = (value) => (dispatch) => {
  const url = "http://localhost:8000/accounts/users/1"
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
