import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import RocketLogo from '../../assets/svg/RocketLogo';
import {colors} from '../../constants/Colors';
import ArrowIcon from '../../assets/svg/ArrowIcon';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {goToWelcomeScreen} from '../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  backToWelcome?: boolean;
  onBackPress?: () => void;
};

const NbmBackNavBar: React.FC<Props> = ({
  navigation,
  onBackPress,
  backToWelcome,
}: Props): JSX.Element => {
  const takeUserBack = () => {
    if (backToWelcome) {
      goToWelcomeScreen({navigation});
    } else if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View className="flex flex-row items-center justify-between mt-6">
      <TouchableOpacity onPress={takeUserBack}>
        <View className="rotate-[180deg]">
          <ArrowIcon color={colors.forumCharcoal} width="24" height="24" />
        </View>
      </TouchableOpacity>
      <View className="flex-row items-center">
        <Text className="font-syne-bold text-ForumPurple text-[20px]">NBM</Text>
        <View className="rotate-[90deg] ml-[12px]">
          <RocketLogo color={colors.forumPurple} height="35.48" width="23.77" />
        </View>
      </View>
      <View className="h-[24] w-[24]"></View>
    </View>
  );
};

export default NbmBackNavBar;
