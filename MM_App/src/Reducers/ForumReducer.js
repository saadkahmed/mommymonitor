import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  ALL_QUESTIONS_FETCH_SUCCESS,
  FETCH_QUESTION_ANSWERS_FAIL,
  ALL_QUESTIONS_FETCH_FAIL,
  CREATE_QUESTION_SUCCESS,
  CREATE_QUESTION_FAIL
} from '../Actions/types';

const INITIAL_STATE = { question: {}, forumQuestions: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTION_ANSWERS_SUCCESS: {
      return { ...state, questionAnswers: action.payload };
    }
    case ALL_QUESTIONS_FETCH_SUCCESS: {
      return { ...state, forumQuestions: action.payload };
    }
    case CREATE_QUESTION_SUCCESS: {
      const { key, question } = action.payload;
      return { ...state, forumQuestions: { ...state.forumQuestions, key: question } };
    }
    case FETCH_QUESTION_ANSWERS_FAIL: {
      return state;
    }
    case ALL_QUESTIONS_FETCH_FAIL: {
      return state;
    }
    case CREATE_QUESTION_FAIL: {
      return state;
    }

    default:
      return state;
  }
};
