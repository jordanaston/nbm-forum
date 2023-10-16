import React from 'react';
import {Text, View} from 'react-native';
import PaswordFirstIcon from '../../assets/svg/PasswordFirstIcon';
import PasswordSecondIcon from '../../assets/svg/PasswordSecondIcon';
import PasswordThirdIcon from '../../assets/svg/PasswordThirdIcon';

const rules = [
  {
    icon: <PaswordFirstIcon />,
    text: 'Include at least one number (eg. 1)',
  },
  {
    icon: <PasswordSecondIcon />,
    text: 'Include at least one symbol (eg. #)',
  },
  {
    icon: <PasswordThirdIcon />,
    text: 'Include at least one upper and lowercase character',
  },
];

const PasswordRules: React.FC = () => (
  <View className="rounded-lg p-[14px] bg-ForumLightGray mt-1">
    <Text className="text-ForumCharcoal font-syne-regular text-[14px]">
      Your password must...
    </Text>
    {rules.map((rule, index) => (
      <View key={index} className="flex-row items-center mt-[10px]">
        {rule.icon}
        <Text className="text-ForumCharcoal font-syne-regular text-[14px] ml-2 flex-1">
          {rule.text}
        </Text>
      </View>
    ))}
  </View>
);

export default PasswordRules;
