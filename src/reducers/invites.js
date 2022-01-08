import { INVITE_TYPES } from "constants/actionTypes";
import { GROUP_INVITATION_STATUS } from "constants/constant";

const InitialState = {
  groupInvitedUsers: [],
  recievedGroupInvites: [],
};

const invitesReducer = (state = InitialState, action) => {
  switch (action.type) {
    case INVITE_TYPES.LOAD_SENT_INVITES:
      return {
        ...state,
        groupInvitedUsers: action.payload,
      };
    case INVITE_TYPES.LOAD_RECEIVED_INVITES:
      return {
        ...state,
        recievedGroupInvites: action.payload,
      };
    case INVITE_TYPES.CANCEL_INVITE:
      const newGroupInvitedUsers = state.groupInvitedUsers.filter(
        (invitedUser) => invitedUser.id !== action.payload.id
      );
      newGroupInvitedUsers.push(action.payload.data);
      return {
        ...state,
        groupInvitedUsers: newGroupInvitedUsers,
      };
    case INVITE_TYPES.ACCEPT_INVITE:
      const newRecievedGroupInvites = state.recievedGroupInvites.filter(
        (receivedInvites) => receivedInvites.id !== action.payload
      );
      let singleInvite = state.recievedGroupInvites.find(
        (singleReceivedInvite) => singleReceivedInvite.id === action.payload
      );
      singleInvite.status = GROUP_INVITATION_STATUS.ACCEPTED;
      newRecievedGroupInvites.push(singleInvite);
      return {
        ...state,
        recievedGroupInvites: newRecievedGroupInvites,
      };
    case INVITE_TYPES.DECLINE_INVITE:
      const newRecievedGroupInvitess = state.recievedGroupInvites.filter((receivedInvites) => receivedInvites.id!==action.payload);
      let singleInvites = state.recievedGroupInvites.find(singleReceivedInvite => singleReceivedInvite.id===action.payload);
      singleInvites.status = GROUP_INVITATION_STATUS.DECLINED;
      newRecievedGroupInvitess.push(singleInvites);
      return {
        ...state,
        recievedGroupInvites: newRecievedGroupInvitess,
      };
    default:
      return state;
  }
};

export default invitesReducer;
