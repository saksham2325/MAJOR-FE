const BASE_URL = 'http://127.0.0.1:8000';

const urls = {
    CREATE_NEW_GROUP: "/create-new-group",
    signin: '/signin',
    signup: '/signup',
    home: '/home',
    root: '/',
    VERIFY_EMAIL: '/verify',
    RESET_PASSWORD: "/reset-password",
    EDIT_PROFILE: "/edit-profile",
    OWNED_GROUPS: '/owned-groups',
    POST_VERIFICATION: '/after-verification',
    EDIT_PROFILE: '/edit-profile',
    RESET_PASSWORD: '/reset-password',
    MY_PROFILE: '/my-profile',
    SENT_GROUP_INVITES: '/sent-group-invites',
    RECEIVED_GROUP_INVITES: '/received-group-invites',
    ALL_GROUP_INVITES: '/all-group-invites',
    CREATE_GAME: '/create-game',
    OWNED_POKERBOARD: '/owned-pokerboards',
    DASHBOARD: '/pokeboard/:id',
    POKERBOARD_MEMBERS: '/pokeboard/:id/members',
    VERIFYGROUPTOKEN: '/verify-group-token',
    VERIFYSIGNUPTOKEN: '/verify-signup-token',
    VERIFYPOKERTOKEN: '/verify-poker-token',
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
    UPDATE_PASSWORD: '/accounts/update-password/',
    USER_GROUPS: '/accounts/user-groups/',
    SENT_GROUP_INVITES: '/accounts/group-invites/',
    RECEIVED_GROUP_INVITES: '/accounts/user-group-invites',
    POKER_CRUD: '/poker/pokerboard/',
    POKER_USERS: '/poker/user-pokerboard/',
    VERIFYSIGNUPTOKEN: '/accounts/verify-signup-token/',
    VERIFYGROUPTOKEN: '/accounts/verify-group-token/',
    VERIFYPOKERTOKEN: '/accounts/verify-poker-token/',
    LIST_GROUPS: '/accounts/list-groups/'
};

export { urls, BACKEND_URLS, BASE_URL };
