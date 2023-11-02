import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {Post} from '../types/FeedTypes';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  accountCreationSuccess?: boolean;
};

export const goToLoginScreen = ({
  navigation,
  accountCreationSuccess,
}: Props) => {
  navigation.navigate({
    name: 'LoginScreen',
    params: {
      accountCreationSuccess: accountCreationSuccess,
    },
  });
};

export const goToWelcomeScreen = ({navigation}: Props) => {
  navigation.navigate('WelcomeScreen');
};

export const goToCreateAccountScreen = ({navigation}: Props) => {
  navigation.navigate('CreateAccountScreen');
};

export const goToCreatePostScreen = ({navigation}: Props) => {
  navigation.navigate('CreatePostScreen');
};

export const goToSettingsScreen = ({navigation}: Props) => {
  navigation.navigate('SettingsScreen');
};

export const goToFeedScreen = ({navigation}: Props) => {
  navigation.navigate('FeedScreen');
};

export const goToPostScreen = ({navigation, post}: Props & {post: Post}) => {
  if (!post) {
    return;
  }
  navigation.navigate('PostScreen', {post});
};
