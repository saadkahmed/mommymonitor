import { QUESTION_FETCH_SUCCESS, ALL_QUESTIONS_FETCH_SUCCESS } from '../Actions/types';

const INITIAL_STATE = { question: {}, forumQuestions: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_FETCH_SUCCESS: {
      return { ...state, question: action.payload };
    }
    case ALL_QUESTIONS_FETCH_SUCCESS: {
      return { ...state, forumQuestions: action.payload };
    }

    default:
      return state;
  }
};
