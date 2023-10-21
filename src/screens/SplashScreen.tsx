import {SafeAreaView, View, StatusBar} from 'react-native';
import RocketLogo from '../assets/svg/RocketLogo';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {colors} from '../constants/Colors';
import {goToWelcomeScreen} from '../utils/NavigationUtils';
import {sleep} from '../utils/SleepUtil';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const SplashScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  (async () => {
    await sleep(2000);
    goToWelcomeScreen({navigation});
  })();

  return (
    <SafeAreaView className="flex-1 bg-ForumPurple">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 justify-center items-center">
        <RocketLogo color={colors.white} width="120" height="179" />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
