import { StackNavigator } from 'react-navigation';

import Register from '../Components/Register';
import PersonalInfo from '../Components/PersonalInfo';
import Questionnaire from '../Components/RegQuestionnaire';
import PickPackage from '../Components/PickPackage';

const RegisterRouter = StackNavigator({
    Register: {
      screen: Register,
      navigationOptions: {
        title: 'Registration',
        //gesturesEnabled: false
    }
  },
    PersonalInfo: {
        screen: PersonalInfo,
        navigationOptions: {
            headerTitle: 'About you',
            //gesturesEnabled: false
        }
    },
    Questionnaire: {
        screen: Questionnaire
  },
    PickPackage: {
        screen: PickPackage,
        navigationOptions: {
            title: 'Packages',
            //gesturesEnabled: false
      }
  }

},
{
  initialRouteName: 'Register',
  headerMode: 'none',
}
);

export default RegisterRouter;
