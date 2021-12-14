import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { connect } from "react-redux";
import { useHistory } from "react-router";

import { loadProfile } from "actions/editProfile";
import { urls } from "constants/urls";


const MyProfile = (props) => {
  const { profileData, loadProfile, user } = props;
  const history = useHistory();
  const [details, setDetails] = useState({
    id: profileData.id,
    firstName: profileData.firstName,
    lastName: profileData.lastName,
    email: profileData.email,
  });

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      loadProfile(id);
    } else{
      history.push(urls.signin);
    }
  }, []);

  useEffect(() => {
    setDetails(() => ({ ...profileData }));
  }, [profileData]);

  return (
    <div className="signin">
      <label>
        Email:
        <p>{details.email}</p>
      </label>
      <label>
        First Name:
        <p>{details.firstName}</p>
      </label>
      <label>
        Last Name:
        <p>{details.lastName}</p>
      </label>
      <Button variant="contained" href={urls.EDIT_PROFILE}>
        Edit Profile
      </Button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profileData: state.loadProfileReducer,
  user: state.authReducers.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadProfile: (id) => {
    dispatch(loadProfile(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
