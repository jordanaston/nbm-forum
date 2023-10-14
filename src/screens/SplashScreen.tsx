import {SafeAreaView, View, StatusBar} from 'react-native';
import RocketLogo from '../assets/svg/RocketLogo';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Colors} from '../constants/Colors';

type NavigationList = NativeStackNavigationProp<
  MainStackParamList,
  'SplashScreen'
>;

const SplashScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation<NavigationList>();

  setTimeout(() => {
    navigation.navigate('WelcomeScreen');
  }, 2000);

  return (
    <SafeAreaView className="flex-1 bg-ForumPurple">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 justify-center items-center">
        <RocketLogo color={Colors.White} width="120" height="179" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
