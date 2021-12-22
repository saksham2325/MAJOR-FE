import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { connect } from "react-redux";

import { editProfile, loadProfile } from "actions/editProfile";


const EditProfile = (props) => {
  const { alert, editProfile, profileData, loadProfile } = props;
  const [userDetails, setUserDetails] = useState({
    id: profileData.id,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
  });

  const onChangeHandler = (event) => {
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editProfile(userDetails);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const id = localStorage.getItem("id");
      loadProfile(id);
    }
  }, []);

  useEffect(() => {
    setUserDetails(() => ({ ...profileData }));
  }, [profileData]);

  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="Enter first name"
            className="input"
            onChange={onChangeHandler}
          />
        </label>
        <label>
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Enter last name"
            className="input"
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit" className="button">
          Update
        </button>
      </form>
      {alert && <h2 className='alert'>{ alert }</h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
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
