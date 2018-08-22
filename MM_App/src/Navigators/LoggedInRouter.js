import { DrawerNavigator } from 'react-navigation';

import ProfileAnalytics from '../Components/ProfileAnalytics';
import SettingsPage from '../Components/Settings';
import Questionnaire from '../Components/DailyQuestionnaire';
import ConversationView from '../Components/Chat/ConversationView';
import ConversationListView from '../Components/Chat/ConversationListView';
import QuestionListView from '../Components/Forum/QuestionListView';
import QuestionView from '../Components/Forum/QuestionView';

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
    Questionnaire: {
      screen: Questionnaire,
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
    QuestionListView: {
      screen: QuestionListView,
      navigationOptions: {
        title: 'Question List View',
        gesturesEnabled: true
      }
    },
    QuestionView: {
      screen: QuestionView,
      navigationOptions: {
        title: 'Question View',
        gesturesEnabled: true
      }
    }
  },
  {
    initialRouteName: 'QuestionListView',
    drawerPosition: 'left'
  }
);

export default LoggedInNavigator;
