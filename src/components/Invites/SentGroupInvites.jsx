import React, { useEffect } from "react";

import { connect } from "react-redux";

import { resetAlert } from "actions/alert";
import { loadSentGroupInvites } from "actions/invites";
import SentGroupInvitesItems from "components/Invites/SentGroupInvitesItems";

const SentGroupInvites = (props) => {
  const { alert, sentGroupInvites, loadSentGroupInvites } = props;

  useEffect(() => {
    resetAlert();
    loadSentGroupInvites();
  }, []);

  return (
    <div className="owned-groups">
      <h2>Invited Users</h2>
      <div>
        {sentGroupInvites.length === 0 && (
          <p className="error-msg">No Invites Sent</p>
        )}
      </div>
      <div>
        {sentGroupInvites && sentGroupInvites.length !== 0 && (
          <h3>{`Total Sent Invites: - ${sentGroupInvites.length}`}</h3>
        )}
        {sentGroupInvites &&
          sentGroupInvites.map((invite) => (
            <SentGroupInvitesItems {...invite} />
          ))}
      </div>
      {alert && <h3>{alert}</h3>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alertReducer.alert,
  user: state.authReducers.user,
  sentGroupInvites: state.invitesReducer.groupInvitedUsers,
});

const mapDispatchToProps = (dispatch) => ({
  resetAlert: () => {
    dispatch(resetAlert());
  },
  loadSentGroupInvites: () => {
    dispatch(loadSentGroupInvites());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SentGroupInvites);
