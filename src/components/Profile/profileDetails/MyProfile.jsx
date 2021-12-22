import React, { useEffect } from "react";

import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Link, Redirect } from 'react-router-dom';

import "../profile.css";
import { loadProfile, loadUserGroups } from "actions/editProfile";
import { urls } from "constants/urls";


const MyProfile = (props) => {
    const { profileData, loadProfile, user, loadUserGroups, userGroups } = props;
    const history = useHistory();

    useEffect(() => {
        const id = localStorage.getItem("id");
        id && loadProfile(id);
        id && loadUserGroups(id);
    }, []);

    useEffect(() => {
        if (Object.keys(user).length == 0) {
            history.push(urls.root);
        }
    }, [user])

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

            <div class='associated-groups' style={{ fontWeight: 'bold' }}>
                Associated groups
                <ul>
                    {
                        userGroups.groups &&
                        userGroups.groups.map((group) =>
                            group &&
                            <li>
                                {group.id} - {group.title}
                                {
                                    group.admin.email == profileData.email &&
                                    <span>&nbsp;(admin)</span>
                                }
                            </li>
                        )
                    }
                </ul>
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
    userGroups: state.loadProfileReducer,
});

const mapDispatchToProps = (dispatch) => ({
    loadProfile: (id) => {
        dispatch(loadProfile(id));
    },
    loadUserGroups: (id) => {
        dispatch(loadUserGroups(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
