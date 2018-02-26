import { StackNavigator } from 'react-navigation';

import Register from '../Components/Register';
import PersonalInfo from '../Components/PersonalInfo';

const RegisterRouter = StackNavigator({
    Register: {
      screen: Register
  },
    PersonalInfo: {
        screen: PersonalInfo
    },

},
{
  initialRouteName: 'Register',
  headerMode: 'none',
}
);

export default RegisterRouter;
