const index = {
  toastTimeout: 2000,
};

const RESPONSE_STATUS = {
  ERROR: 400,
};

const INVITATION_PURPOSE = {
  SIGNUP: 0,
  GROUP: 1,
  POKERBOARD: 2,
};

const GROUP_INVITE_STATUS = {
  0: "PENDING",
  1: "ACCEPTED",
  2: "DECLINED",
  3: "CANCELLED",
};

const GROUP_INVITATION_STATUS = {
  PENDING: 0,
  ACCEPTED: 1,
  DECLINED: 2,
  CANCELLED: 3,
};

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export {
  index,
  RESPONSE_STATUS,
  INVITATION_PURPOSE,
  GROUP_INVITATION_STATUS,
  GROUP_INVITE_STATUS,
  EMAIL_REGEX,
};
