import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "actions/auth";
import { urls } from "constants/urls";
import "./Navbar.css";

const Navbar = (props) => {
    let { logoutUser, isAuthenticate, atWelcome } = props;
    const id = localStorage.getItem('id');

    const handleLogout = (event) => {
        event.preventDefault();
        logoutUser();
    };

    return (
        <div className="navbar">
            {
                id ? (
                    <Link to={urls.home}>
                        <div className="title">Poker Planner</div>
                    </Link>
                ) : (
                    <Link to={urls.root}>
                        <div className="title">Poker Planner</div>
                    </Link>
                )
            }

            {!id && atWelcome && (
                <Link to="/signin">
                    <div className="signin-button button">Signin</div>
                </Link>
            )}

            {id && (
                <Link to={urls.MY_PROFILE}>
                    {/* <img src alt="" /> */}
                    <button className="button my-profile-button">My Profile</button>
                </Link>
            )}

            {id && (
                <button
                    onClick={handleLogout}
                    className="signin-button button signout-button"
                >
                    Signout
                </button>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    isAuthenticate: state.authReducers.isAuthenticate,
    atWelcome: state.navbar.atWelcome,
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
