import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

import { resetAlert } from "actions/alert";
import { verifyUser } from "actions/auth";
import { EMAIL_REGEX } from "constants/constant";
import { attributesMsg, toastErrorMsg } from "constants/messages.js";

const VerifyEmail = (props) => {
  const [formData, setFormData] = useState({ email: "", name: "" });
  const { alert, resetAlert, verifyUser } = props;
  const { addToast } = useToasts();

  useEffect(() => {
    resetAlert();
  }, []);

  const onChangeHandler = (event) => {
    let { value } = event.target;
    value = event.target.name === "email" ? value.toLowerCase() : value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email) {
      return addToast(toastErrorMsg.EMAIL_REQUIRED, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (!EMAIL_REGEX.test(formData.email)) {
      return addToast(toastErrorMsg.VALID_EMAIL, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (formData.name.length == 0) {
      return addToast(toastErrorMsg.FIRST_NAME_CANNOT_BE_EMPTY, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    verifyUser(formData);
  };

  return (
    <div className="signin verify-signup">
      <header>Signup</header>
      <form onSubmit={handleSubmit}>
        <label>
          <div>Email *</div>
          <input
            className="input"
            value={formData.email}
            name="email"
            type="text"
            placeholder={attributesMsg.emailPlaceholder}
            onChange={onChangeHandler}
          />
        </label>
        <label>
          <div>First Name *</div>
          <input
            className="input"
            value={formData.name}
            name="name"
            type="text"
            placeholder={attributesMsg.firstNamePlaceholder}
            onChange={onChangeHandler}
          />
        </label>
        <button type="submit" className="button">
          Verify Email
        </button>
      </form>
      {alert && <h3>{alert}</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  resetAlert: () => {
    dispatch(resetAlert());
  },
  verifyUser: (formData) => {
    dispatch(verifyUser(formData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
