import { RootNavigator } from '../Navigators/LoginRouter';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Main'));

export default (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  return nextState || state;
};
