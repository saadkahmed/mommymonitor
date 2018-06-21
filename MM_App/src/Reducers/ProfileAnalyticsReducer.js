import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL } from '../Actions/types';

const INITIAL_STATE = {
  dates: [],
  data: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS: {
      return { ...state, data: action.payload.data, dates: action.payload.keys };
    }
    case FETCH_QUESTIONS_FAIL: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
