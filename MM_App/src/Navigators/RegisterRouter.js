import { TabNavigator } from 'react-navigation';

import Register from '../Components/Register';
import PersonalInfo from '../Components/PersonalInfo';

const RegisterRouter = TabNavigator({
    Register: {
      screen: Register
  },
    PersonalInfo: {
        screen: PersonalInfo
    }

});

export default RegisterRouter;
