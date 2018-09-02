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
      const allQuestions = action.payload;
      const questions = [];
      do {
        const newQuestion = allQuestions.splice(
          Math.floor(Math.random() * allQuestions.length), 1)[0];
        questions[questions.length] = newQuestion;
      } while (questions.length < 3);
      return { ...INITIAL_STATE, questions };
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
