import {
  CONVERSATION_FETCH_SUCCESS,
  CONVERSATION_FETCH_FAIL,
  MESSAGE_FETCH_SUCCESS,
  MESSAGE_FETCH_FAIL
} from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  console.log(`ChatReducer: ${action.type}`);
  switch (action.type) {
    case CONVERSATION_FETCH_SUCCESS: {
      return { conversationId: action.payload.conversation_id };
    }
    case CONVERSATION_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    case MESSAGE_FETCH_SUCCESS: {
      return { ...state, messages: action.payload };
    }
    case MESSAGE_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
