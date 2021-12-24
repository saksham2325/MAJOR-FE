import React, { useEffect } from "react";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import "./Homepage.css";
import { urls } from "constants/urls";


const Homepage = (props) => {

  const history = useHistory();
  const { user } = props;

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      history.push(urls.root);
    }
  }, [user]);

  return (
    <div className="homepage">
      <div className="games">
        <div className="game-text">Power up your planning</div>
        <div className="game-buttons">
          <button className="new-game button">New Game</button>
          <button className="game-invites button">Game Invites</button>
          <button className="active-games button">Active Games</button>
        </div>
      </div>

      <div className="groups">
        <div className="group-text">Boost up your productivity in a team</div>
        <div className="group-buttons">
          <Link to={urls.CREATE_NEW_GROUP}><button className="new-group button">New Group</button></Link>
          <button className="group-invites button">Group Invites</button>
          <Link to={urls.OWNED_GROUPS}><button className="active-groups button">Active Groups</button></Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
});

export default connect(mapStateToProps)(Homepage);
