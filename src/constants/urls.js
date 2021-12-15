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
};

const BACKEND_URLS = {
    LOGIN: '/accounts/login/',
    SIGNUP: '/accounts/users/',
    LOGOUT: '/accounts/logout/',
    SENDTOKEN: '/accounts/send-token/',
    VERIFYTOKEN: '/accounts/verify-token/',
    SEARCH_USER: '/accounts/userFilters/',
    SEARCH_USER: "/accounts/users/",
    GROUP_CRUD: '/accounts/groups/',
};

export { urls, BACKEND_URLS, BASE_URL };
