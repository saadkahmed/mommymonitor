import { REGISTER_USER, REGISTER_COMPLETE } from '../Actions/types';

const INITIAL_STATE = {
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTER_USER: {
      //register user request
      return { ...state, loading: true };
    }

    case REGISTER_COMPLETE: {
      //register user complete
      return INITIAL_STATE; // why wipe the state now
    }

    default:
      return state;
  }
};
