import {
  FETCH_QUESTION_ANSWERS_SUCCESS,
  ALL_QUESTIONS_FETCH_SUCCESS,
  CREATE_QUESTION_SUCCESS,
  CREATE_ANSWER_SUCCESS,
  SELECT_QUESTION_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  LIKE_QUESTION,
  UNLIKE_QUESTION
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
    case DELETE_QUESTION_SUCCESS: {
      const { question_id } = action.payload;
      const questions = { ...state.forumQuestions };
      delete questions[[question_id]];
      return { ...state, forumQuestions: { ...questions } };
    }
    case LIKE_QUESTION: {
      const { question_id, uid } = action.payload;
      // console.log(state.forumQuestions[[question_id]]);
      return {
        ...state,
        forumQuestions: {
          ...state.forumQuestions,
          [question_id]: {
            ...state.forumQuestions[[question_id]],
            likes: { ...state.forumQuestions[[question_id]].likes, [uid]: true }
          }
        }
      };
    }
    case UNLIKE_QUESTION: {
      const { question_id, newLikes } = action.payload;
      // console.log(state.forumQuestions[[question_id]]);
      return {
        ...state,
        forumQuestions: {
          ...state.forumQuestions,
          [question_id]: {
            ...state.forumQuestions[[question_id]],
            likes: newLikes
          }
        }
      };
    }

    default:
      return state;
  }
};
