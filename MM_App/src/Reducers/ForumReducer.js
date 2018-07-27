import { QUESTION_FETCH_SUCCESS } from '../Actions/types';

const INITIAL_STATE = { question: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_FETCH_SUCCESS: {
      return { ...state, question: action.payload };
    }

    default:
      return state;
  }
};
