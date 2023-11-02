import {StatusBar, View} from 'react-native';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RocketLogo from '../assets/svg/RocketLogo';
import Button from '../components/core/Button';
import {colors} from '../constants/Colors';
import AuthTitleDescription from '../components/auth/AuthTitleDescription';
import {
  goToCreateAccountScreen,
  goToLoginScreen,
} from '../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const WelcomeScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" />
      <View className="">
        <View className="bg-ForumPurple h-[470px] justify-center items-center">
          <View className="rotate-[33.68deg] w-[169px]">
            <RocketLogo color={colors.white} width={'169'} height={'256'} />
          </View>
        </View>
        <View className="mx-6 mt-12">
          <AuthTitleDescription
            title={`Welcome to\nthe NBM Forum`}
            description="Time to get all the answers you need in a forum made for designers
            and developers!"
          />
          <View className="mt-4">
            <Button
              onPress={() => goToCreateAccountScreen({navigation})}
              text="Create an Account"
            />
            <View className="mt-2">
              <Button
                onPress={() => goToLoginScreen({navigation})}
                text="Sign In"
                arrowColor={colors.forumPurple}
                textColor="text-ForumPurple"
                backgroundColor="bg-none"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
