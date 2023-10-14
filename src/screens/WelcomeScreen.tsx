import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const WelcomeScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text>Welcome Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
