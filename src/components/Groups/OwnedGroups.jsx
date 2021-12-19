import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { loadGroup } from "actions/group";
import OwnedGroupItems from "./OwnedGroupsItems";
import { resetAlert } from "actions/alert";
import { urls } from "constants/urls";


const OwnedGroups = (props) => {
  const { alert, loadGroup, ownedGroups, resetAlert } = props;
  const history = useHistory();

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (!id) {
      history.push(urls.signin);
    }
    resetAlert();
    loadGroup();
  }, []);

  return (
    <div>
      <h3>Owned Groups</h3>
      {(ownedGroups === undefined || ownedGroups.length === 0) && (
        <p>No Group Owned</p>
      )}
      {ownedGroups && ownedGroups.map((elem) => <OwnedGroupItems {...elem} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  alert: state.alertReducer.alert,
  ownedGroups: state.groupReducer.ownedGroups,
});

const mapDispatchToProps = (dispatch) => ({
  loadGroup: () => {
    dispatch(loadGroup());
  },
  resetAlert: () => {
    dispatch(resetAlert());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(OwnedGroups);
