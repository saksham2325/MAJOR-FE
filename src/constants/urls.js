const BASE_URL = 'http://127.0.0.1:8000';

const urls = {
    signin: '/signin',
    signup: '/signup',
    home: '/home',
    root: '/',
    VERIFYEMAIL: '/verify',
};

const BACKEND_URLS = {
    LOGIN: '/accounts/login/',
    SIGNUP: '/accounts/users/',
    LOGOUT: '/accounts/logout/',
    SENDTOKEN: '/accounts/send-token/',
    VERIFYTOKEN: '/accounts/verify-token/',
    SEARCH_USER: '/accounts/userFilters/',
};

export { urls, BACKEND_URLS, BASE_URL };
