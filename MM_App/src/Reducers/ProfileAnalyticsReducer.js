import { FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_FAIL } from '../Actions/types';
import _ from 'lodash';

const INITIAL_STATE = {
  dates: [],
  stress: [],
  sleep: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS_SUCCESS: {
      const stress = _.map(action.payload.data, data => data.one);
      const sleep = _.map(action.payload.data, data => data.three);
      return { ...state, stress, sleep, dates: action.payload.keys };
    }
    case FETCH_QUESTIONS_FAIL: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
