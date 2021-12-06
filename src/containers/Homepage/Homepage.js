import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { logoutUser } from 'actions/auth';
import { urls } from 'constants/urls';


const Homepage = (props) => {

    const { logoutUser } = props;
    const handleClick = (event) => {
        event.preventDefault();
        console.log('button clicked');
        logoutUser();
    };

    const history = useHistory();
    
    useEffect(()=>{
        const user = localStorage.getItem('user');
        if(!user) {
            history.push(urls.signin);
        }
    },[]);

    return (
        <div className='homepage'>
            <button onClick={handleClick}>Logout</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.authReducers.user,
});

const mapDispatchToProps = (dispatch) => ({
    logoutUser: () => {
        dispatch(logoutUser());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
