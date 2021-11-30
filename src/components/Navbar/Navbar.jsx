import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.css';


const Navbar = (props) => {
    const { atWelcome } = props;

    return (
        <div className='navbar'>
            <Link to='/'>
                <div className='title'>
                    Poker Planner
                </div>
            </Link>
            {
                atWelcome &&
                <Link to='/signin'>
                    <div className='signin-button button'>
                        Signin
                    </div>
                </Link>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        atWelcome: state.navbar.atWelcome,
    };
};

export default connect(mapStateToProps)(Navbar);
