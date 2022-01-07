import { ALERT_TYPES } from "constants/actionTypes";

export const resetAlert = () => ({
  type: ALERT_TYPES.RESET_ALERT,
});

export const successMessage = (message) => ({
  type: ALERT_TYPES.SUCCESS_ALERT,
  payload: { message },
});

export const errorMessage = (message) => ({
  type: ALERT_TYPES.ERROR_ALERT,
  payload: { message },
});
