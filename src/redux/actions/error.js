import { ALERT_TYPES } from "./types";


export const successMessage = (msg) => ({
  type: ALERT_TYPES.SUCCESS_MSG,
  payload: { msg },
});

export const errorMessage = (msg) => ({
    type: ALERT_TYPES.ERROR_MSG,
    payload: { msg },
  });