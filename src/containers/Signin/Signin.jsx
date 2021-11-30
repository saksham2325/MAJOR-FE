import React, { FormEvent, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

import { toastErrorMsg, attributesMsg } from '../../constants/messages.js';
import './Signin.css';
import { connect } from 'react-redux';
import { departFromWelcomePageAC } from '../../actions/navbar.js';


const Signin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { addToast } = useToasts();

    const { navbarUpdateLogin } = props;

    useEffect(() => {
        navbarUpdateLogin();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            return addToast(toastErrorMsg.emailAndPassword, {
                appearance: 'error',
                autoDismiss: true,
            });
        }

        // signin user
    };

    return (
        <div className="signin">
            <header>
                Signin
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    <div>Email</div>
                    <input
                        id="email"
                        className="signin-input"
                        type="text"
                        placeholder={attributesMsg.emailPlaceholder}
                        name="email"
                        onChange={
                            (event) => {
                                setEmail(event.currentTarget.value);
                            }
                        }
                    />
                </label>

                <label htmlFor="password">
                    <div>Password</div>
                    <input
                        id="password"
                        className="signin-input"
                        type="password"
                        placeholder={attributesMsg.passwordPlacegolder}
                        name="password"
                        onChange={
                            (event) => {
                                setPassword(event.currentTarget.value);
                            }
                        }
                    />
                </label>
                <input type="submit" value="Signin" className="signin-button button" />
            </form>

            <div className="signin-after-form-link">
                <Link to="/signup">Create New Account</Link>
            </div>
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
        navbarUpdateLogin: () => dispatch(departFromWelcomePageAC()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
