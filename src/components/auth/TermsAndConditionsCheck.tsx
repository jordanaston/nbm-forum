import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';


const TermsAndConditionsCheck: React.FC = (): JSX.Element => {
  return (
    <View>
      <View className="flex-row items-center mr-6">
        <TouchableOpacity>
          <View className="w-[18px] h-[18px] mr-2.5 border-2 border-ForumCharcoal opacity-30"></View>
        </TouchableOpacity>
        <Text className="text-ForumCharcoal font-syne-regular text-[14px] opacity-40">
          By ticking this box, I agree to the terms and conditions of NBM.
        </Text>
      </View>
    </View>
  );
};

export default TermsAndConditionsCheck;
