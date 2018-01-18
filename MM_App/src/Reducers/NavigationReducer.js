import { RootNavigator } from '../Components/LoginRouter';

const INITIAL_STATE = RootNavigator.router.getStateforAction(RootNavigator.router.getActionForPathAndParams('Main'));

const NavigationReducer = (state = INITIAL_STATE, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  return newState || state;
};
