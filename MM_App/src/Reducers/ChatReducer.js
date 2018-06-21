import {
  CONVERSATION_FETCH_SUCCESS,
  CONVERSATION_FETCH_FAIL
} from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONVERSATION_FETCH_SUCCESS: {
      console.log('CONVERSATION_FETCH_SUCCESS');
      console.log(action.payload);
      return { conversationId: action.payload.conversation_id };
    }
    case CONVERSATION_FETCH_FAIL: {
      console.log('CONVERSATION_FETCH_FAIL');
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
