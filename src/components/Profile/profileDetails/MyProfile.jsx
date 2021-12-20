import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import "../profile.css";
import { loadProfile } from "actions/editProfile";
import { urls } from "constants/urls";


const MyProfile = (props) => {
    const { profileData, loadProfile } = props;

    useEffect(() => {
        const id = localStorage.getItem("id");
        id && loadProfile(id);
    }, []);

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
                        profileData.groups &&
                        profileData.groups.map((group) =>
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
        </div>
    );
};

const mapStateToProps = (state) => ({
    profileData: state.loadProfileReducer,
});

const mapDispatchToProps = (dispatch) => ({
    loadProfile: (id) => {
        dispatch(loadProfile(id));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
