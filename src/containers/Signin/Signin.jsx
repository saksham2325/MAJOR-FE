import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

import "./Signin.css";
import { resetAlert } from "actions/alert";
import { loginUser } from "actions/auth";
import { departFromWelcomePageAC } from "actions/navbar";
import { EMAIL_REGEX } from "constants/constant";
import { attributesMsg, toastErrorMsg } from "constants/messages";
import { urls } from "constants/urls";

const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const { navbarUpdateLogin, loginUser, user, alert, resetAlert } = props;

  useEffect(() => {
    navbarUpdateLogin();
    resetAlert();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      return addToast(toastErrorMsg.emailAndPassword, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (!EMAIL_REGEX.test(email)) {
      return addToast(toastErrorMsg.VALID_EMAIL, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    setLoading(true);
    loginUser(email, password);
    setLoading(false);
  };

  return (
    <div className="signin">
      <header>Signin</header>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          <div>Email *</div>
          <input
            id="email"
            className="input"
            type="text"
            placeholder={attributesMsg.emailPlaceholder}
            name="email"
            onChange={(event) => {
              setEmail(event.currentTarget.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <div>Password *</div>
          <input
            id="password"
            className="input"
            type="password"
            placeholder={attributesMsg.passwordPlacegolder}
            name="password"
            onChange={(event) => {
              setPassword(event.currentTarget.value);
            }}
          />
        </label>
        <input type="submit" value="Signin" className="signin-button button" />
      </form>
      {alert.length > 0 && <h3 className="error-msg">{alert}</h3>}
      {loading && <h3>Loading...</h3>}
      <div className="signin-after-form-link">
        <Link to={urls.VERIFY_EMAIL}>Create New Account</Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  atWelcome: state.navbar.atWelcome,
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  navbarUpdateLogin: () => {
    dispatch(departFromWelcomePageAC());
  },
  loginUser: (email, password) => {
    dispatch(loginUser(email, password));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
