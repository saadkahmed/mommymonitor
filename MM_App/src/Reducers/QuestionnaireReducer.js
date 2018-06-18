import {
  QUESTIONNAIRE_FETCH_SUCCESS,
  QUESTIONNAIRE_FETCH_FAIL,
  ANSWER_TEXT_CHANGED 
} from '../Actions/types';

const INITIAL_STATE = {
  answers: {},
  questions: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONNAIRE_FETCH_SUCCESS: {
      return { ...INITIAL_STATE, questions: action.payload };
    }
    case QUESTIONNAIRE_FETCH_FAIL: {
      return INITIAL_STATE;
    }
    case ANSWER_TEXT_CHANGED: {
      const id = action.payload.id;
      const answer = action.payload.answer;
      const answers = { ...state.answers, [id]: answer };
      return { ...state, answers };
    }
    default:
      return state;
  }
};
