export const index = {
  toastTimeout: 2000,
};

export const RESPONSE_STATUS = {
  ERROR: 400,
};

export const INVITATION_PURPOSE = {
  SIGNUP: 0,
  GROUP: 1,
  POKERBOARD: 2,
};

export const GROUP_INVITE_STATUS = {
  0: "PENDING",
  1: "ACCEPTED",
  2: "DECLINED",
  3: "CANCELLED",
};

export const GROUP_INVITATION_STATUS = {
  PENDING: 0,
  ACCEPTED: 1,
  DECLINED: 2,
  CANCELLED: 3,
};

export const REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
