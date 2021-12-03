import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import validator from 'validator';

import {attributesMsg, toastErrorMsg } from 'constants/messages.js';
import { signupUser } from 'actions/auth';
import { urls } from 'constants/urls.js';


const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const history = useHistory();
    const { alert, signupUser, user } = props;

    const { addToast } = useToasts();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            return addToast(toastErrorMsg.emailAndPassword, {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        // Email validation and verification is pending.
        if(firstName.length==0) {
            return addToast(toastErrorMsg.FIRST_NAME_CANNOT_BE_EMPTY, {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        if(password!==confirmPassword) {
            return addToast(toastErrorMsg.PASSWORD_AND_CONFIRM_PASSWORD_SHOULD_BE_SAME ,{
                appearance: 'error',
                autoDismiss: true,
            });
        }
        signupUser(email, password, firstName, lastName);
    };

    useEffect(() => {
        if (Object.keys(user).length!=0) {
            history.push(urls.home);
        } 
    }, [user]);

    return (
        <div className="signin">
            <header>
                Signup
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="first-name">
                    <div>First Name</div>
                    &nbsp;
                    <input
                        id="first-name"
                        className="signin-input"
                        type="text"
                        placeholder={attributesMsg.firstNamePlaceholder}
                        name="first-name"
                        onChange={
                            (event) => {
                                setFirstName(event.currentTarget.value);
                            }
                        }
                        required
                    />
                </label>
                <label htmlFor="last-name">
                    <div>Last Name</div>
                    &nbsp;
                    <input
                        id="last-name"
                        className="signin-input"
                        type="text"
                        placeholder={attributesMsg.lastNamePlaceholder}
                        name="last-name"
                        onChange={
                            (event) => {
                                setLastName(event.currentTarget.value);
                            }
                        }
                    />
                </label>
                <label htmlFor="email">
                    <div>Email</div>
                    &nbsp;
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
                    &nbsp;
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

                <label htmlFor="confirmPassword">
                    <div>Confirm Password</div>
                    &nbsp;
                    <input
                        id="confirm-password"
                        className="signin-input"
                        type="password"
                        placeholder={attributesMsg.CONFIRM_PASSWORD_PLACE_HOLDER}
                        name="confirmPassword"
                        onChange={
                            (event) => {
                                setConfirmPassword(event.currentTarget.value);
                            }
                        }
                    />
                </label>
                <input type="submit" value="Register" className="signin-button button" />
            </form>
            { alert.length>0 && <h3>{ alert }</h3>}
            <div className="signin-after-form-link">
                <Link to="/signin">Back To Sign In</Link>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.authReducers.user,
    alert: state.alertReducer.singupAlert,
});

const mapDispatchToProps = (dispatch) => ({
    signupUser: (email, password, firstName, lastName) => {
        dispatch(signupUser(email, password, firstName, lastName));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);