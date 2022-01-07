import React from "react";

import { connect } from "react-redux";

const PostVerification = (props) => {
  const { alert } = props;

  return <div>{alert && <h2>{alert}</h2>}</div>;
};

const mapStateToProps = (state) => ({
  alert: state.alertReducer.alert,
});

export default connect(mapStateToProps)(PostVerification);
