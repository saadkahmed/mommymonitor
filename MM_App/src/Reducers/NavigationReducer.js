import { LoginRouter } from '../Components/common';

const INITIAL_STATE = LoginRouter.router.getStateForAction(LoginRouter.router.getActionForPathAndParams('Main'));

export default (state = INITIAL_STATE, action) => {
  const newState = LoginRouter.router.getStateForAction(action, state);

// return newState or previous state if newState is null
  return newState || state;
};
