import { MENTOR_REQUEST_SUCCESS } from '../Actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MENTOR_REQUEST_SUCCESS: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};
