import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import "./Groups.css";
import { deleteGroup } from "actions/group";
import InviteUsers from "components/InviteUsers/InviteUsers";
import { resetAlert } from "actions/alert";


const OwnedGroupItems = (props) => {
  const [toggle, setToggle] = useState(false);
  const { alert, deleteGroup, id, admin, resetAlert, title, description, users } = props;

  useEffect(() => {
    resetAlert();
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const showGroupMembers =
    users && users.length > 0 ? (
      users.map((user) => <li className="group-list">{user.email}</li>)
    ) : (
      <li>No members to Show</li>
    );

    const onClickHandler = (event) => {
      event.preventDefault();
      deleteGroup(id);
    };

  return (
    <div className="owned-group-item">
      <div className="owned-group-title">
        {title}
        <button type="button" className="button-style-2" onClick={onClickHandler}>Delete Group</button>
      </div>

      {
        description &&
        <div className="owned-group-desc">{description}</div>
      }

      <div className="owned-group-invite">
        <InviteUsers groupId={id} />
      </div>

      <div className="owned-group-members">
        <button type="button" className="button" onClick={handleClick}>
          {!toggle ? "View Group Members" : "Hide Group Members"}
        </button>
        <div>{toggle && showGroupMembers}</div>
      </div>
      {alert && <h3>{ alert }</h3>}
    </div>
  );
};


const mapStateToProps = (state) => ({
  alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
  deleteGroup: (id) => {
    dispatch(deleteGroup(id));
  },
  resetAlert: () => {
    dispatch(resetAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnedGroupItems);
