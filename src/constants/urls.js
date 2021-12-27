const BASE_URL = 'http://127.0.0.1:8000';

const urls = {
    CREATE_NEW_GROUP: "/create-new-group",
    signin: '/signin',
    signup: '/signup',
    home: '/home',
    root: '/',
    VERIFYEMAIL: '/verify',
    RESET_PASSWORD: "/reset-password",
    EDIT_PROFILE: "/edit-profile",
    OWNED_GROUPS: '/owned-groups',
    AFTER_VERIFICATION: '/after-verification',
    EDIT_PROFILE: '/edit-profile',
    RESET_PASSWORD: '/reset-password',
    MY_PROFILE: '/my-profile',
    SENT_GROUP_INVITES: '/sent-group-invites',
    RECEIVED_GROUP_INVITES: '/received-group-invites',
    ALL_GROUP_INVITES: '/all-group-invites',
};

const BACKEND_URLS = {
    ACCOUNTS: '/accounts/',
    LOGIN: '/accounts/login/',
    SIGNUP: '/accounts/users/',
    USER_CRUD: '/accounts/users/',
    LOGOUT: '/accounts/logout/',
    SENDTOKEN: '/accounts/send-token/',
    VERIFYTOKEN: '/accounts/verify-token/',
    SEARCH_USER: '/accounts/userFilters/',
    GROUP_CRUD: '/accounts/groups/',
    SEND_INVITATION: 'send-invitation/',
    UPDATE_PASSWORD: '/accounts/updatePassword/',
    USER_GROUPS: '/accounts/userGroups/',
    SENT_GROUP_INVITES: '/accounts/group-invites/',
    RECEIVED_GROUP_INVITES: '/accounts/user-group-invites'
};

export { urls, BACKEND_URLS, BASE_URL };
