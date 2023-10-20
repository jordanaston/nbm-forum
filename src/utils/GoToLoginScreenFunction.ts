import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const goToLoginScreen = ({navigation}: Props) => {
  navigation.navigate({
    name: 'LoginScreen',
    params: {
      accountCreationSuccess: undefined,
    },
  });
};
