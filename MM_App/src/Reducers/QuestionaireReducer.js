import { MAININFORMATIONUPDATE,
} from '../Actions/types';

const INITIAL_STATE = { loading: false
                      };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MAININFORMATIONUPDATE: { //logining in the user
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};
// add inital states for the information retrieved from the payload: Obj
// store the important info into the state 
