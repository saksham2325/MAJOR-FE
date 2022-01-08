import { ALERT_TYPES } from "constants/actionTypes";

const resetAlert = () => ({
  type: ALERT_TYPES.RESET_ALERT,
});

const successMessage = (message) => ({
  type: ALERT_TYPES.SUCCESS_ALERT,
  payload: { message },
});

const errorMessage = (message) => ({
  type: ALERT_TYPES.ERROR_ALERT,
  payload: { message },
});

export {resetAlert, successMessage, errorMessage };
