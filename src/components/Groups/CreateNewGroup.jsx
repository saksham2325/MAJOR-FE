import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';

import { toastErrorMsg } from '../../constants/messages'
import { urls } from "../../constants/urls";
import {createGroup, searchUser } from '../../actions/group'
import { resetAlert } from "actions/alert";


const CreateNewGroup = (props) => {
  const { alert, createGroup, resetAlert, user } = props;
  const [Title, setTitle] = useState('');
  const [Description, setDescription] = useState('');
  const { addToast } = useToasts();
  const history = useHistory();
  const id = localStorage.getItem('id');


  const onFormSubmit = (event) => {
    event.preventDefault();
    if(Title.length==0) {
      return addToast(toastErrorMsg.GROUP_TITLE_REQUIRED, {
        appearance: 'error',
        autoDismiss: true,
    });
    }
    createGroup(Title,Description);
  }

  useEffect(() => {
    resetAlert();
    if(!id) {
      history.push(urls.root);
    }
  }, []);

  useEffect(() => {
    if(!id) {
      history.push(urls.root);
    }
  }, [id]);


  return (
    <div>
      <h4>Create New Group</h4>
      <form >
        <label>
          Title
          <input
            type="text"
            placeholder="Enter Group Title"
            value={Title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </label>
        <label>
          Description
          <input
            type="text"
            placeholder="Enter Group Description"
            value={Description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </label>
        <button onClick={onFormSubmit}>Create</button>
      </form>
      {alert && <h3>{ alert }</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  createGroup: (Title, Description = '') => {
    dispatch(createGroup(Title, Description));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewGroup);
