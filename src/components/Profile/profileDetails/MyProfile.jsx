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
    const id = localStorage.getItem("id");

    useEffect(() => {
        id && loadProfile(id);
        id && loadUserGroups(id);
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
                    Email:
                    {profileData.email}
                </div>
                <div>
                    First Name:
                    {profileData.firstName}
                </div>
                <div>
                    Last Name:
                    {profileData.lastName}
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
