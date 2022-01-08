import React from "react";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { urls } from "constants/urls";

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticate } = auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate ? <Redirect to={urls.home} /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducers,
});

export default connect(mapStateToProps)(PublicRoute);
