import { MAININFORMATIONUPDATE, LOADING_DATA } from '../Actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAININFORMATIONUPDATE: {
      return { ...state, loading: true };
    }
    case LOADING_DATA: {
      return { data: action.payload };
    }
    default:
      return state;
  }
};
// add inital states for the information retrieved from the payload: Obj
// store the important info into the state
