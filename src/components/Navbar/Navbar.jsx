import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "actions/auth";
import "./Navbar.css";

const Navbar = (props) => {
  let { atWelcome, isSignedIn, logoutUser } = props;
  atWelcome = false;
  isSignedIn = true;

  const handleClick = (event) => {
    event.preventDefault();
    logoutUser();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="title">Poker Planner</div>
      </Link>
      {atWelcome && (
        <Link to="/signin">
          <div className="signin-button button">Signin</div>
        </Link>
      )}
      {isSignedIn && (
        <Link to="/profile">
          <img src="" alt="" />
        </Link>
      )}
      {isSignedIn && (
        <button
          onClick={handleClick}
          className="signin-button button signout-button"
        >
          Signout
        </button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    atWelcome: state.navbar.atWelcome,
    isSignedIn: state.navbar.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
