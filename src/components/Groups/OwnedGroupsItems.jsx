import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import InviteUsers from "components/Groups/InviteUsers";


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
    <div>
      <div>
        <p>
          <h4>Title: {title} </h4>
        </p>
        {description && <p>Description: {description}</p>}
      </div>
      <div>
        <button type="button" onClick={handleClick}>
          {!toggle ? "View Group Members" : "Hide Group Members"}
        </button>
        <div>{toggle && showGroupMembers}</div>
      </div>
      <div>
          <InviteUsers groupId={id}/>
      </div>
    </div>
  );
};

export default OwnedGroupItems;
