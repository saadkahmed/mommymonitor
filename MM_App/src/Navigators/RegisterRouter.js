import { StackNavigator } from 'react-navigation';

import Register from '../Components/register';
import PersonalInfo from '../Components/PersonalInfo';
import Questionnaire from '../Components/RegQuestionnaire';

const RegisterRouter = StackNavigator({
    Register: {
      screen: Register
  },
    PersonalInfo: {
        screen: PersonalInfo
    },
    Questionnaire: {
      screen: Questionnaire
    }

},
{
  initialRouteName: 'Register',
  headerMode: 'none',
}
);

export default RegisterRouter;
