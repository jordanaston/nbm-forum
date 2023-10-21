import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {goToCreateAccountScreen} from '../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const DontHaveAccountCreateOneHere: React.FC<Props> = ({navigation}: Props) => {
  return (
    <>
      <Text className="text-ForumPurple font-syne-regular text-[14px]">
        Don't have an account?
      </Text>
      <TouchableOpacity onPress={() => goToCreateAccountScreen({navigation})}>
        <Text className="text-ForumPurple font-syne-medium underline ml-[2px] text-[14px]">
          Create one here.
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default DontHaveAccountCreateOneHere;
