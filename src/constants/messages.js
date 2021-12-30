const credentialsErrorMsg = {
  emailAndPasswordIncorrect: "Email or password incorrect!",
  userNotFound: "User not found!!",
};

export const toastErrorMsg = {
    emailAndPassword: 'Please enter both email & password',
    email: 'Please enter email',
    FIRST_NAME_CANNOT_BE_EMPTY:'First name cannot be empty',
    PASSWORD_AND_CONFIRM_PASSWORD_SHOULD_BE_SAME: 'password and confirm password should be same',
    VALID_EMAIL: 'Enter valid email',
    EMAIL_REQUIRED: 'Email is Required.',
    GROUP_TITLE_REQUIRED: 'Group title cannot be empty',
    GAME_NAME: 'Length of name should be in between 1 and 50',
    DECK_DUPLICATE: 'all values in the deck should be unique.',
    DECK_SIZE: 'Deck cannot be empty',
    VALID_NUMBER_LIST: 'Invalid input, enter comma seperated numbers like 1,2,3',
};

const attributesMsg = {
  emailPlaceholder: "Enter email",
  passwordPlacegolder: "Enter password",
  firstNamePlaceholder: "Enter your first name",
  lastNamePlaceholder: "Enter your last name",
  CONFIRM_PASSWORD_PLACE_HOLDER: "Re-enter password",
};

const directionalMsg = {
  searchUser: "search a github user!",
  loading: "loading...",
};

const AUTH_MESSAGES = {
  LOGIN_SUCCESS_MESSAGE: "Login successfully",
  LOGIN_FAILED_MESSAGE: "Something went wrong",
  SIGNUP_SUCCESS_MESSAGE: "Signup successfully",
  SIGNUP_FAILED_MESSAGE: "Something went wrong",
  LOGOUT_SUCCESS_MESSAGE: "Logout successfully",
  LOGOUT_FAILED_MESSAGE: "Logout failed",
  ALREADY_SIGNEUP: "Already Registered with this email, pls login.",
  SOMETHING_WENT_WRONG: "Something went wrong",
  REQUEST_TOKEN: "Something went wrong. Please request for another token",
};

const GROUP_MESSAGES = {
  GROUP_CREATED: "Group created successfully",
  GROUPS_LOADED: "Groups loaded successfully",
  GROUPS_LOADED_FAILED: "Failed to load groups",
};

const STATUS = {
  HTTP_302_FOUND: 302,
  HTTP_204_NO_CONTENT: 204,
};

const PROFILE_MESSAGES = {
  LOAD_PROFILE_SUCCESS_MESSAGE: "Profile loaded successfully",
  LOAD_PROFILE_FAILED_MESSAGE: "Failed to load profile",
  UPDATE_USER_SUCCESS_MESSAGE: "Details updated",
  UPDATE_USER_FAILED_MESSAGE: "Failed to update details",
  LOAD_USER_GROUPS_SUCCESS_MESSAGE: "User groups loaded successfully",
  LOAD_USER_GROUPS_FAILED_MESSAGE: "User groups load failed",
  EDIT_DETAILS: "Please edit the details",
};

const INVITATION_MESSAGE = {
  INVITATION_ACCEPTED: "Invitation Accepted successfully!",
  INVITATION_DECLINED: "Invitation Declined successfully!",
};


const POKER_MESSAGE = {
  GAME_CREATED: 'Pokerboard created successfully!',
  GAME_EDITED: 'Game edited successfully,'
}

export {
  credentialsErrorMsg,
  toastErrorMsg,
  attributesMsg,
  directionalMsg,
  AUTH_MESSAGES,
  GROUP_MESSAGES,
  STATUS,
  PROFILE_MESSAGES,
  INVITATION_MESSAGE,
  POKER_MESSAGE
};
