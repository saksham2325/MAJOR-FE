import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { resetAlert } from "actions/alert";
import { loadPokerboard } from "actions/pokerBoard";
import OwnedPokerboardsItems from "components/Pokerboards/OwnedPokerboardsItems";

const OwnedPokerboards = (props) => {
  const { alert, loadPokerboard, ownedPokerboards, resetAlert, user } = props;

  useEffect(() => {
    resetAlert();
    loadPokerboard();
  }, []);

  let flag = true;

  return (
    <div className="owned-groups">
      <h2>Owned Pokerboards</h2>
      <div>
        {(ownedPokerboards === undefined ||
          ownedPokerboards.length === 0) && (
            <p className="error-msg">No Pokerboard Owned</p>
          )}
      </div>
      <div>
        {ownedPokerboards && ownedPokerboards.length !== 0 && (
          <h3>{`Total Pokerboard - ${ownedPokerboards.length}`}</h3>
        )}
        {ownedPokerboards &&
          ownedPokerboards.map((elem) => (
            <OwnedPokerboardsItems {...elem} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.authReducers.user,
  alert: state.alertReducer.alert,
  ownedPokerboards: state.pokerboardReducer.ownedPokerboards,
});

const mapDispatchToProps = (dispatch) => ({
  resetAlert: () => {
    dispatch(resetAlert());
  },
  loadPokerboard: () => {
    dispatch(loadPokerboard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnedPokerboards);
