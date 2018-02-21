import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../Navigators/LoginRouter';


const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Main'));

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
    case 'Login':
    nextState = RootNavigator.router.getStateForAction(
      NavigationActions.navigate({ routeName: 'LoggedIn' }),
      state
      );
      break;
    case 'Logout':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Main' }),
        state
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

// Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
