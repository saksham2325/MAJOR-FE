const BASE_URL = 'http://127.0.0.1:8000';

const urls = {
    signin: '/signin',
    signup: '/signup',
    home: '/home',
    root: '/',
    EDIT_PROFILE: '/edit-profile',
    RESET_PASSWORD: '/reset-password',

};

const BACKEND_URLS = {
    LOGIN: '/accounts/login/',
    SIGNUP: '/accounts/users/',
    USER_CRUD: '/accounts/users/',
    LOGOUT: '/accounts/logout/',
    UPDATE_PASSWORD: '/accounts/updatePassword/'
};

export { urls, BACKEND_URLS, BASE_URL };
