import { createDrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import SettingsPage from '../Components/Settings';
import DailyQuestionnaire from '../Components/DailyQuestionnaire';
import ConversationView from '../Components/Chat/ConversationView';
import ConversationListView from '../Components/Chat/ConversationListView';
import QuestionListView from '../Components/Forum/QuestionListView';

const LoggedInNavigator = createDrawerNavigator(
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
    },
    Forum: {
      screen: QuestionListView,
      navigationOptions: {
        title: 'Forum',
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
