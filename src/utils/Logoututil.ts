import {useQueryClient} from 'react-query';
import {logout} from '../services/AuthServices';
import {goToWelcomeScreen} from './NavigationUtils';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setIsLoading: (state: boolean) => void;
};

export const useLogout = ({setIsLoading, navigation}: Props) => {
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    setIsLoading(true);
    await logout(queryClient);
    setTimeout(() => {
      setIsLoading(false);

      goToWelcomeScreen({navigation});
    }, 1000);
  };

  return handleLogout;
};
