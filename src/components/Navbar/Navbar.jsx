import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutUser } from "actions/auth";
import { urls } from "constants/urls";
import "./Navbar.css";

const Navbar = (props) => {
  let { logoutUser } = props;
  const id = localStorage.getItem('id');

  const handleClick = (event) => {
    event.preventDefault();
    logoutUser();
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="title">Poker Planner</div>
      </Link>
      {!id && (
        <Link to="/signin">
          <div className="signin-button button">Signin</div>
        </Link>
      )}
      {id && (
        <Link to={urls.MY_PROFILE}>
          <img src alt="" />
        </Link>
      )}
      {id && (
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

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => {
    dispatch(logoutUser());
  },
});

export default connect(null, mapDispatchToProps)(Navbar);
