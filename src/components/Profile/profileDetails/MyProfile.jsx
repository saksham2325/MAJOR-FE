import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link } from 'react-router-dom';

import "../profile.css";
import { loadProfile, resetProfileUpdated } from "actions/editProfile";
import { urls } from "constants/urls";


const MyProfile = (props) => {
    const { profileData, loadProfile, resetProfileUpdated, user } = props;
    const history = useHistory();
    const id = localStorage.getItem("id");

    useEffect(() => {
        id && loadProfile(id);
        resetProfileUpdated();
        if(!id) {
            history.push(urls.root);
        }
    }, []);

    useEffect(() => {
        if(!id) {
            history.push(urls.root);
        }
    }, [id])

    return (
        <div className="my-profile">
            <div className='user-details'>
                <div>
                    <div>Email:</div>
                    <input className="input" value={profileData.email} readOnly />
                </div>
                <div>
                    <div>First Name:</div>
                    <input className="input" value={profileData.firstName} readOnly />
                </div>
                <div>
                    <div>Last Name:</div>
                    <input className="input" value={profileData.lastName} readOnly />
                </div>
            </div>
            <Link to={urls.EDIT_PROFILE}>
                <button className="button">
                    Edit Profile
                </button>
            </Link>
            <Link to={urls.RESET_PASSWORD}>
                <button className="button">
                    Reset Password
                </button>
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.loadProfileReducer,
    user: state.authReducers.user,
});

const mapDispatchToProps = (dispatch) => ({
    resetProfileUpdated: () => {
        dispatch(resetProfileUpdated());
    },
    loadProfile: (id) => {
        dispatch(loadProfile(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
