import React from "react";

import { Link } from "react-router-dom";

const OwnedPokerboardsItems = (props) => {
  const { id, name } = props;

  return (
    <div className="owned-group-item">
      <div className="owned-group-title">
        <Link
          to={{
            pathname: `/pokeboard/${id}`,
            pokerDetails: { ...props },
          }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default OwnedPokerboardsItems;
