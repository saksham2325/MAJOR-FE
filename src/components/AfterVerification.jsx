import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { resetAlert } from 'actions/alert';


const AfterVerification = (props) => {

    const { alert, resetAlert } = props;

    return (
        <div>
            { alert && <h2>{ alert }</h2>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    alert: state.alertReducer.alert
  })
  
  const mapDispatchToProps = (dispatch) => ({
    resetAlert: () => {
      dispatch(resetAlert());
    },
  });

export default connect(mapStateToProps, mapDispatchToProps)(AfterVerification);
