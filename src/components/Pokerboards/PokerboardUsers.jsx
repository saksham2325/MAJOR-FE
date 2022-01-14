import React, { useEffect, useState } from "react";

import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { connect } from "react-redux";

import { INVITATION_PURPOSE, EMAIL_REGEX, USER_ROLE, USER_ROLE1 } from "constants/constant";
import { loadPokerUsers, removePokerUser } from "actions/pokerBoard";
import { resetAlert } from "actions/alert";
import { sendInvitation } from "actions/group";
import { toastErrorMsg } from "constants/messages";

const PokerboardUsers = (props) => {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(USER_ROLE.PLAYER);
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);
  const {
    alert,
    loadPokerUsers,
    match: {
      params: { id },
    },
    pokerUsers,
    removePokerUser,
    resetAlert,
    sendInvitation,
    user,
  } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      setError(toastErrorMsg.VALID_EMAIL);
      return;
    }
    sendInvitation(id, email, INVITATION_PURPOSE.POKERBOARD, role);
  };

  useEffect(() => {
    resetAlert();
    loadPokerUsers(id);
  }, []);

  useEffect(() => {
    if (alert.length > 0) {
      setTimeout(() => {
        resetAlert();
      }, 3000);
    }
    if (error.length > 0) {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [alert, error]);

  const removeHandleClick = (pokerUserId) => {
    removePokerUser(pokerUserId);
  };

  const handleClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const showGroupMembers =
    pokerUsers && pokerUsers.length > 0 ? (
      pokerUsers.map((pokerUser) => (
        <li className="group-list">
          {`${pokerUser.user.email} -> ${USER_ROLE1[pokerUser.role]} -> `}
          {
            <button onClick={() => removeHandleClick(pokerUser.id)}>
              Remove
            </button>
          }
        </li>
      ))
    ) : (
      <li>No User to Show</li>
    );

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Invite Users</h2>
        <label>
          Email *
          <input
            placeholder="enter email to invite"
            value={email}
            type="text"
            className="input"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        {error && <p className="error-msg">{error}</p>}
        <label>
          Role
          <FormControl style={{ minWidth: 250 }}>
            <Select
              name="role"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label="Role"
              onChange={(ev) => setRole(ev.target.value)}
            >
              <MenuItem value={USER_ROLE.PLAYER}>Player</MenuItem>
              <MenuItem value={USER_ROLE.SPECTATOR}>Spectator</MenuItem>
            </Select>
          </FormControl>
        </label>
        <Button type="submit" variant="contained">
          Invite
        </Button>
        <div></div>
      </form>
      <div className="owned-group-members">
        <button type="button" className="button" onClick={handleClick}>
          {!toggle ? "View Group Members" : "Hide Group Members"}
        </button>
        <div>{toggle && showGroupMembers}</div>
      </div>
      {alert && <h2>{alert}</h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokerUsers: state.pokerboardReducer.pokerUsers,
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  resetAlert: () => {
    dispatch(resetAlert());
  },
  removePokerUser: (pokerUserId) => {
    dispatch(removePokerUser(pokerUserId));
  },
  sendInvitation: (pokerboardId, email, purpose, role) => {
    dispatch(sendInvitation(pokerboardId, email, purpose, role));
  },
  loadPokerUsers: (id) => {
    dispatch(loadPokerUsers(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokerboardUsers);
