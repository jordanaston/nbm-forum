import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import ArrowIcon from '../assets/svg/ArrowIcon';
import {colors} from '../constants/Colors';
import SettingsPersonalIcon from '../assets/svg/SettingsPersonalIcon';
import SettingsLocationIcon from '../assets/svg/SettingsLocationIcon';
import SettingsPasswordIcon from '../assets/svg/SettingsPasswordIcon';
import SettingsDeleteIcon from '../assets/svg/SettingsDeleteIcon';
import SettingsTermsIcon from '../assets/svg/SettingsTermsIcon';
import SettingsPrivacyIcon from '../assets/svg/SettingsPrivacyIcon';
import {goToFeedScreen} from '../utils/NavigationUtils';
import SettingsLink from '../components/settings/SettingsLink';
import LogoutIcon from '../assets/svg/LogoutIcon';
import {useState} from 'react';
import LoadingScreen from './LoadingScreen';
import {useLogout} from '../utils/Logoututil';
import TermsAndConditions from '../components/settings/TermsAndConditions';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const SettingsScreen: React.FC<Props> = ({navigation}: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleLogout = useLogout({
    setIsLoading,
    navigation,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      {isLoading ? (
        <LoadingScreen />
      ) : showTerms ? (
        <TermsAndConditions setShowTerms={setShowTerms} />
      ) : (
        <View className="mx-6">
          <StatusBar barStyle="dark-content" />
          <View className="flex-row justify-between">
            <TouchableOpacity
              onPress={() => goToFeedScreen({navigation})}
              className="mt-[17px]">
              <View className="rotate-[180deg] mt-[1.5px]">
                <ArrowIcon
                  color={colors.forumCharcoal}
                  width="24"
                  height="24"
                />
              </View>
            </TouchableOpacity>
            <View>
              <Text className="font-syne-semibold text-ForumCharcoal text-[25px] mt-[15px]">
                Profile
              </Text>
            </View>
            <View className="mt-1 mr-6"></View>
          </View>
          <View className=" mt-[30px] mb-4">
            <Text className="text-[18px] text-ForumCharcoal font-syne-bold">
              Settings
            </Text>
          </View>
          <SettingsLink
            Icon={SettingsPersonalIcon}
            label="Personal Information"
          />
          <SettingsLink Icon={SettingsLocationIcon} label="Location" />
          <SettingsLink Icon={SettingsPasswordIcon} label="Update Password" />
          <SettingsLink Icon={SettingsDeleteIcon} label="Delete Account" />
          <View className="mt-[20px] mb-4">
            <Text className="text-[18px] text-ForumCharcoal font-syne-bold">
              Legal
            </Text>
          </View>
          <SettingsLink
            Icon={SettingsTermsIcon}
            label="Terms Of Service"
            onPress={() => setShowTerms(true)}
          />
          <SettingsLink Icon={SettingsPrivacyIcon} label="Privacy Policy" />
          <View className="mt-[20px] mb-4">
            <Text className="text-[18px] text-ForumCharcoal font-syne-bold">
              Log Out
            </Text>
          </View>
          <SettingsLink
            Icon={LogoutIcon}
            label="Log Out"
            onPress={handleLogout}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SettingsScreen;
