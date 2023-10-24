import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SubmitPost: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View>
        <Text>Submit Post</Text>
      </View>
    </SafeAreaView>
  );
};

export default SubmitPost;
