import React, {ComponentType} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SettingsArrowIcon from '../../assets/svg/SettingsArrowIcon';

type Props = {
  Icon: ComponentType;
  label: string;
  onPress?: () => void;
};

const SettingsLink: React.FC<Props> = ({Icon, label, onPress}: Props) => (
  <TouchableOpacity onPress={onPress} className="mb-2">
    <View className="flex-row justify-between items-center min-h-[60px] bg-ForumLightGray py-[14px] pl-[14px] pr-[10px]">
      <Icon />
      <View className="flex-1 justify-center ml-4">
        <Text className="font-syne-semibold text-ForumCharcoal text-[16px]">
          {label}
        </Text>
      </View>
      <SettingsArrowIcon />
    </View>
  </TouchableOpacity>
);

export default SettingsLink;
