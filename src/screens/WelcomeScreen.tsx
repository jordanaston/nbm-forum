import {StatusBar, View, Text} from 'react-native';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RocketLogo from '../assets/svg/RocketLogo';
import Button from '../components/core/Button';
import {colors} from '../constants/Colors';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList, 'WelcomeScreen'>;
};

const WelcomeScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const goToSignInScreen = () => {
    navigation.navigate('LoginScreen');
  };
  const goToCreateAccountScreen = () => {
    navigation.navigate('CreateAccountScreen');
  };

  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View>
        <View className="bg-ForumPurple h-[470px] justify-center items-center">
          <View className="rotate-[33.68deg] w-[169px]">
            <RocketLogo color={colors.white} width={'169'} height={'256'} />
          </View>
        </View>
        <View className="mx-[24px] h-[50pt] w-[354pt] mt-[45px]">
          <Text className="font-syne-bold text-ForumCharcoal text-[24px] pt-2">
            Welcome to{'\n'}the NBM Forum
          </Text>
          <Text className="font-syne-regular text-ForumCharcoal text-[16px] mt-[16px]">
            Time to get all the answers you need in a forum made for designers
            and developers!
          </Text>
          <View>
            <Button
              onPress={goToCreateAccountScreen}
              text={'Create an Account'}
            />
            <Button
              onPress={goToSignInScreen}
              text={'Sign In'}
              bgColor={'white'}
              textColor={'ForumPurple'}
              arrowColor={colors.forumPurple}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
