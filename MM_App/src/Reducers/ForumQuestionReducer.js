import {
  FORUM_QUESTION_LIST_FETCH_SUCCESS,
  FORUM_QUESTION_LIST_FETCH_FAIL
} from '../Actions/types'

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORUM_QUESTION_LIST_FETCH_SUCCESS: {
      const keys = Object.keys(action.payload);
      const questions = [];
      for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        const question = action.payload[key];
        question.id = key;
        questions.push(question);
      }
      console.log(questions);
      return { ...state, questions };
    }
    case FORUM_QUESTION_LIST_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    default:
    return state;
  }
};
