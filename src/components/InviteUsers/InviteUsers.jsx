import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import { useToasts } from "react-toast-notifications";

import './InviteUsers.css';
import { INVITATION_PURPOSE } from "constants/values";
import { resetAlert } from "actions/alert";
import { sendInvitation } from "actions/group";
import { toastErrorMsg } from "constants/messages";


const InviteUsers = (props) => {
  const { groupId, alert, resetAlert, sendInvitation } = props;
  const [email, setEmail] = useState("");
  const { addToast } = useToasts();

  const handleClick = (event) => {
    event.preventDefault();
    if (!email) {
      return addToast(toastErrorMsg.email, {
        appearance: "error",
        autoDismiss: true,
      });
    }
    sendInvitation(groupId, email, INVITATION_PURPOSE.GROUP);
  };

  useEffect(() => {
    resetAlert();
  }, []);

  return (
    <div className="invite-users">
      {/* <h4>Invite Users</h4> */}
      <input
        placeholder="enter email to invite"
        value={email}
        type="text"
        className="input"
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <button className="button" onClick={handleClick}>Invite</button>
      {/* { alert && <h3>{ alert }</h3>}   */}
      {/* commented by ankur; as 'Groups loaded successfully' msg should not be there */}
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
  sendInvitation: (groupId, email, purpose) => {
    dispatch(sendInvitation(groupId, email, purpose));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteUsers);
