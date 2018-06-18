import { StackNavigator } from 'react-navigation';
import RegisterMM from '../Components/RegisterMM';

export const RegisterRouterMM = StackNavigator({
  MainScreen: {
    screen: RegisterMM,
      navigationOptions: {
        headerTitle: 'Maternal Mentor Registration',
        header: null
      }
  },
}
);

export default RegisterRouterMM;
