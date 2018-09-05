import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  ALL_QUESTIONS_FETCH_SUCCESS,
  CREATE_QUESTION_SUCCESS,
  CREATE_ANSWER_SUCCESS,
  SELECT_QUESTION_SUCCESS
} from '../Actions/types';

const INITIAL_STATE = { question: {}, forumQuestions: {}, questionAnswers: {} };

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
      return { ...state, forumQuestions: { ...state.forumQuestions, [key]: question } };
    }
    case SELECT_QUESTION_SUCCESS: {
      return { ...state, question: action.payload };
    }
    case CREATE_ANSWER_SUCCESS: {
      const { key, answer } = action.payload;
      return { ...state, questionAnswers: { ...state.questionAnswers, [key]: answer } };
    }

    default:
      return state;
  }
};
