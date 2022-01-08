import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import { createGroup } from "actions/group";
import { resetAlert } from "actions/alert";
import { toastErrorMsg } from "constants/messages";
import { urls } from "constants/urls";

const CreateNewGroup = (props) => {
  const { alert, createGroup, groupCreated, resetAlert, user } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addToast } = useToasts();
  const history = useHistory();

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (title.length == 0) {
      return addToast(toastErrorMsg.GROUP_TITLE_REQUIRED, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    createGroup(title, description);
  };

  useEffect(() => {
    if (groupCreated) {
      history.push(urls.OWNED_GROUPS);
    }
  }, [groupCreated]);

  useEffect(() => {
    resetAlert();
  }, []);

  return (
    <div className="owned-groups">
      <h2>Create New Group</h2>
      <form>
        <label>
          Title *
          <input
            type="text"
            placeholder="Enter Group Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            placeholder="Enter Group Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button className="button" onClick={onFormSubmit}>
          Create
        </button>
      </form>
      {alert && <h3>{alert}</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
  groupCreated: state.groupReducer.groupCreated,
});

const mapDispatchToProps = (dispatch) => ({
  createGroup: (title, description = "") => {
    dispatch(createGroup(title, description));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewGroup);
