import React from "react";

import CreateGame from "components/Pokerboards/CreateGame";

const Dashboard = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  return (
    <CreateGame gameId={id}/>
  )
};

export default Dashboard;
