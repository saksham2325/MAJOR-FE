import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import "./Groups.css";
import InviteUsers from "components/InviteUsers/InviteUsers";


const OwnedGroupItems = (props) => {
  const [toggle, setToggle] = useState(false);
  const history = useHistory;
  const { id, admin, title, description, users } = props;

  const handleClick = (event) => {
    event.preventDefault();
    setToggle(!toggle);
  };

  const showGroupMembers =
    users && users.length > 0 ? (
      users.map((user) => <li>{user}</li>)
    ) : (
      <li>No members to Show</li>
    );

  return (
    <div className="owned-group-item">
      <div className="owned-group-title">
        {title}
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

    </div>
  );
};

export default OwnedGroupItems;
