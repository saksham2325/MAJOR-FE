import {
  arrivalAtWelcomePage,
  departFromWelcomePage,
} from "constants/actionTypes";

const departFromWelcomePageAC = () => {
  return {
    type: departFromWelcomePage,
  };
};

const arrivalAtWelcomePageAC = () => {
  return {
    type: arrivalAtWelcomePage,
  };
};

export { departFromWelcomePageAC, arrivalAtWelcomePageAC };
