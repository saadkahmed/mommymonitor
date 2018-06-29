import {
  MENTOR_NAME_CHANGED,
  MENTOR_EMAIL_CHANGED,
  MENTOR_PHONE_CHANGED
} from '../Actions/types';

export const mentorNameChanged = text => {
  return {
    type: MENTOR_NAME_CHANGED,
    paylod: text
  };
};

export const mentorEmailChanged = text => {
  return {
    type: MENTOR_EMAIL_CHANGED,
    payload: text
  };
};

export const mentorPhoneChanged = text => {
  return {
    type: MENTOR_PHONE_CHANGED,
    payload: text
  };
};
