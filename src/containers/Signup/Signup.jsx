import React, { FormEvent, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link } from 'react-router-dom';

import { toastErrorMsg, attributesMsg } from '../../constants/messages.js';


const Signup = (props) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { addToast } = useToasts();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!email || !password) {
            return addToast(toastErrorMsg.emailAndPassword, {
                appearance: 'error',
                autoDismiss: true,
            });
        }

        // register user
    };

    console.log('here', props);
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
                <input type="submit" value="Register" className="signin-button button" />
            </form>

            <div className="signin-after-form-link">
                <Link to="/signin">Back To Sign In</Link>
            </div>
        </div>
    );
};

export default Signup;
