import React, { useEffect, useState } from "react";

import { connect } from "react-redux";

import { resetAlert } from "actions/alert";
import { listGroups, sendInvitation } from "actions/group";
import { loadPokerUsers, removePokerUser } from "actions/pokerBoard";
import { INVITATION_PURPOSE, EMAIL_REGEX, USER_ROLE, USER_ROLE1, INVITE_TYPE } from "constants/constant";
import { toastErrorMsg } from "constants/messages";

const PokerboardUsers = (props) => {
    const [inviteType, setInviteType] = useState(INVITE_TYPE.USER);
    const [group, setGroup] = useState('');
    const [email, setEmail] = useState("");
    const [role, setRole] = useState(USER_ROLE.PLAYER);
    const [error, setError] = useState("");
    const [toggle, setToggle] = useState(false);
    const {
        alert,
        allGroups,
        listGroups,
        loadPokerUsers,
        match: {
            params: { id },
        },
        pokerUsers,
        removePokerUser,
        resetAlert,
        sendInvitation,
        user,
    } = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inviteType === INVITE_TYPE.USER) {
            if (!EMAIL_REGEX.test(email)) {
                setError(toastErrorMsg.VALID_EMAIL);
                return;
            } else {
                sendInvitation(id, email, INVITATION_PURPOSE.POKERBOARD, role);
            }
        } else {
            sendInvitation(id, email, INVITATION_PURPOSE.POKERBOARD, role, group);
        }
    };

    useEffect(() => {
        resetAlert();
        loadPokerUsers(id);
        listGroups();
    }, []);

    useEffect(() => {
        if (alert.length > 0) {
            setTimeout(() => {
                resetAlert();
            }, 3000);
        }
        if (error.length > 0) {
            setTimeout(() => {
                setError("");
            }, 3000);
        }
    }, [alert, error]);

    const removeHandleClick = (pokerUserId) => {
        removePokerUser(pokerUserId);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setToggle(!toggle);
    };

    const showGroupMembers =
        pokerUsers && pokerUsers.length > 0 ? (
            pokerUsers.map((pokerUser) => (
                <li className="group-list">
                    {`${pokerUser.user.email} -> ${USER_ROLE1[pokerUser.role]} -> `}
                    {
                        <button onClick={() => removeHandleClick(pokerUser.id)}>
                            Remove
                        </button>
                    }
                </li>
            ))
        ) : (
            <li>No User to Show</li>
        );

    return (
        <div className="pokerboard-users">
            <form onSubmit={handleSubmit}>
                <h2>Invite To Pokerboard</h2>
                <label>
                    Invite Type *
                    <select
                        className="input"
                        name="estimate-type"
                        value={inviteType}
                        onChange={(event) => {
                            setInviteType(event.target.value);
                        }}
                    >
                        <option value={INVITE_TYPE.USER}>User</option>
                        <option value={INVITE_TYPE.GROUP}>Group</option>
                    </select>
                </label>
                {inviteType == 0 ?
                    <label>
                        Email *
                        <input
                            placeholder="enter email to invite"
                            value={email}
                            type="text"
                            className="input"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </label> :
                    <label>
                        Select Group *
                        <select
                            className="input"
                            name="estimate-type"
                            value={group}
                            onChange={(event) => {
                                setGroup(event.target.value);
                            }}
                        >
                            <option value=''>Select</option>
                            {allGroups.map(group =>
                                <option value={group.title}>{group.title}</option>
                            )}
                        </select>
                    </label>
                }
                {error && <p className="error-msg">{error}</p>}
                <label>
                    Role *
                    <select
                        className="input"
                        name="estimate-type"
                        value={role}
                        onChange={(event) => {
                            setRole(event.target.value);
                        }}
                    >
                        <option value={USER_ROLE.PLAYER}>Player</option>
                        <option value={USER_ROLE.SPECTATOR}>Spectator</option>
                    </select>
                </label>
                <button className="button" type="submit">
                    Invite
                </button>
                <div></div>
            </form>
            <div className="owned-group-members">
                <button type="button" className="button" onClick={handleClick}>
                    {!toggle ? "View Poker Members" : "Hide Poker Members"}
                </button>
                <div>{toggle && showGroupMembers}</div>
            </div>
            {alert && <h2>{alert}</h2>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    allGroups: state.groupReducer.allGroups,
    pokerUsers: state.pokerboardReducer.pokerUsers,
    user: state.authReducers.user,
    alert: state.alertReducer.alert,
});

const mapDispatchToProps = (dispatch) => ({
    resetAlert: () => {
        dispatch(resetAlert());
    },
    removePokerUser: (pokerUserId) => {
        dispatch(removePokerUser(pokerUserId));
    },
    sendInvitation: (pokerboardId, email, purpose, role, group) => {
        dispatch(sendInvitation(pokerboardId, email, purpose, role, group));
    },
    loadPokerUsers: (id) => {
        dispatch(loadPokerUsers(id));
    },
    listGroups: () => {
        dispatch(listGroups());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokerboardUsers);
