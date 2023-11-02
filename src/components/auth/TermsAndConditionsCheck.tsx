import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const TermsAndConditionsCheck: React.FC = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <View>
      <View className="flex-row items-center mr-6">
        <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
          <View className="w-[18px] h-[18px] mr-2.5 border-2 border-ForumCharcoal opacity-40">
            {isChecked && (
              <Text className="text-center jutify-center font-syne-bold">
                ✓
              </Text>
            )}
          </View>
        </TouchableOpacity>
        <Text className="text-ForumCharcoal font-syne-regular text-[14px] opacity-50">
          By ticking this box, I agree to the terms and conditions of NBM.
        </Text>
      </View>
    </View>
  );
};

export default TermsAndConditionsCheck;
