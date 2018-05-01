import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../Navigators/LoginRouter';
import { LOGIN,
        LOGOUT,
    } from '../Actions/types';

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams('Main'));

export default (state = initialState, action) => {
  let nextState;
  switch (action.type) {
      case LOGIN: { //after login go to main screen
          nextState = RootNavigator.router.getStateForAction(
              NavigationActions.navigate({ routeName: 'LoggedIn' }),
              state
          );
          break;
      }
      case LOGOUT: { //after logout return to login screen
        nextState = RootNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Main' }),
            state
        );
        break;
    }
    default: {
        nextState = RootNavigator.router.getStateForAction(action, state);
        break;
    }
    }

// Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};
