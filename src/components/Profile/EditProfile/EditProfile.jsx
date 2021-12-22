import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { connect } from "react-redux";

import { editProfile, loadProfile } from "actions/editProfile";
import { urls } from "constants/urls";
import { useHistory } from "react-router-dom";


const EditProfile = (props) => {
  const { alert, editProfile, profileData, loadProfile, user } = props;
  const history = useHistory();
  const [userDetails, setUserDetails] = useState({
    id: profileData.id,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
  });
  const id = localStorage.getItem('id');

  const onChangeHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProfile(userDetails);
  };

  useEffect(() => {
    loadProfile(id);
    if(!id) {
      history.push(urls.root);
    }
  }, []);

  useEffect(() => {
    if(!id) {
      history.push(urls.root);
    }
  }, [id]);

  useEffect(() => {
    setUserDetails(() => ({ ...profileData }));
  }, [profileData]);

  return (
    <div className="signin">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            value={userDetails.firstName}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            value={userDetails.lastName}
            onChange={onChangeHandler}
          />
        </label>
        <Button type="submit" variant="contained">
          Update
        </Button>
      </form>
      {alert && <h2 className="alert">{alert}</h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
  profileData: state.loadProfileReducer,
  alert: state.alertReducer.userUpdate,
});

const mapDispatchToProps = (dispatch) => ({
  editProfile: (state) => {
    dispatch(editProfile(state));
  },
  loadProfile: (id) => {
    dispatch(loadProfile(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
