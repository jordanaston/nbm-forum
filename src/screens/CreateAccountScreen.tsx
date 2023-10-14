import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const CreateAccountScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text>Create Account Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
