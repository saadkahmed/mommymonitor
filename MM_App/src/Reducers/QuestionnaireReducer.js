import { QUESTIONNAIRE_FETCH_SUCCESS, QUESTIONNAIRE_FETCH_FAIL }
from '../Actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONNAIRE_FETCH_SUCCESS: {
      console.log(action.payload);
      return action.payload;
    }
    case QUESTIONNAIRE_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
