import React from "react";

import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { urls } from "constants/urls";

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  const { isAuthenticate } = auth;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticate ? <Component {...props} /> : <Redirect to={urls.root} />
      }
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducers,
});

export default connect(mapStateToProps)(PrivateRoute);
