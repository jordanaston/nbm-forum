import {useMutation, useQueryClient} from 'react-query';
import {postLoginDetails} from '../../services/AuthServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {goToFeedScreen} from '../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useLoginMutation = ({navigation}: Props) => {
  const queryClient = useQueryClient();

  return useMutation(postLoginDetails, {
    onSuccess: () => {
      queryClient.invalidateQueries('loggedInUserId');

      goToFeedScreen({navigation});
    },
  });
};
