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
};

const BACKEND_URLS = {
    ACCOUNTS: '/accounts/',
    LOGIN: '/accounts/login/',
    SIGNUP: '/accounts/users/',
    LOGOUT: '/accounts/logout/',
    SENDTOKEN: '/accounts/send-token/',
    VERIFYTOKEN: '/accounts/verify-token/',
    SEARCH_USER: '/accounts/userFilters/',
    GROUP_CRUD: '/accounts/groups/',
    SEND_INVITATION: 'send-invitation/',
};

export { urls, BACKEND_URLS, BASE_URL };
