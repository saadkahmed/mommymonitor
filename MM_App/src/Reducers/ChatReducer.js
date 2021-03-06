import {
  CONVERSATION_FETCH_SUCCESS,
  CONVERSATION_FETCH_FAIL,
  MESSAGE_FETCH_SUCCESS,
  MESSAGE_FETCH_FAIL,
  MESSAGE_TEXT_CHANGED,
  MESSAGE_SEND_SUCCESS,
  USER_FETCH_SUCCESS,
  CONVERSATION_LIST_FETCH_SUCCESS,
  CONVERSATION_LIST_FETCH_FAIL
} from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONVERSATION_FETCH_SUCCESS: {
      const keys = Object.keys(action.payload);
      const conversationId = keys[0];
      return { ...state, conversationId };
    }
    case CONVERSATION_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    case CONVERSATION_LIST_FETCH_SUCCESS: {
      return { ...state, conversationIds: action.payload };
    }
    case CONVERSATION_LIST_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    case MESSAGE_FETCH_SUCCESS: {
      return { ...state, messages: action.payload };
    }
    case MESSAGE_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    case MESSAGE_TEXT_CHANGED: {
      const newMessage = action.payload.text;
      return { ...state, newMessage };
    }
    case MESSAGE_SEND_SUCCESS: {
      const newMessage = '';
      return { ...state, newMessage };
    }
    case USER_FETCH_SUCCESS: {
      const currentUserId = action.payload.userId;
      return { ...state, currentUserId };
    }
    default:
      return state;
  }
};
