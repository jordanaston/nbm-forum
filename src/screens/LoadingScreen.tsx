import {SafeAreaView, View} from 'react-native';
import RocketLogo from '../assets/svg/RocketLogo';
import {colors} from '../constants/Colors';

const LoadingScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <RocketLogo color={colors.forumPurple} width="120" height="179" />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;
