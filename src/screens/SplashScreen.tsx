import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 justify-center items-center">
        <Text>Splash Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
