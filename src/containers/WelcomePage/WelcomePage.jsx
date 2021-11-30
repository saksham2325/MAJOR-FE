import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { arrivalAtWelcomePageAC } from '../../actions/navbar';

import './WelcomePage.css';

const WelcomePage = (props) => {
    const { navbarUpdateLogin } = props;

    useEffect(() => {
        navbarUpdateLogin();
    }, []);
    console.log(props.parentCallback);
    return (
        <div className='welcome-page'>
            <div className='text'>Wanna play a game?</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        atWelcome: state.navbar.atWelcome,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        navbarUpdateLogin: () => dispatch(arrivalAtWelcomePageAC()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomePage);
