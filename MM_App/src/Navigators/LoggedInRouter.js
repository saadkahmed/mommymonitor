import { DrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import SettingsPage from '../Components/Settings';
import DailyQuestionnaire from '../Components/DailyQuestionnaire';
import ConversationView from '../Components/Chat/ConversationView';
import ConversationListView from '../Components/Chat/ConversationListView';

const LoggedInNavigator = DrawerNavigator(
  {
    Profile: {
      screen: ProfileAnalytics
    },
    Settings: {
      screen: SettingsPage,
      navigationOptions: {
        title: 'Settings',
        gesturesEnabled: true
      }
    },
    DailyQuestionnaire: {
      screen: DailyQuestionnaire,
      navigationOptions: {
        title: 'Questionnaire',
        gesturesEnabled: true
      }
    },
    Chat: {
      screen: ConversationView,
      navigationOptions: {
        title: 'Messages',
        gesturesEnabled: true
      }
    },
    MentorChatList: {
      screen: ConversationListView,
      navigationOptions: {
        title: 'Mentor Chat List',
        gesturesEnabled: true
      }
    }
  },
  {
    initialRouteName: 'Profile',
    drawerPosition: 'left'
  }
);

export default LoggedInNavigator;
