import {useMutation} from 'react-query';
import {postLoginDetails} from '../services/AuthServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useLoginMutation = ({navigation}: Props) => {
  return useMutation(postLoginDetails, {
    onSuccess: () => {
      navigation.navigate('FeedScreen');
    },
  });
};
