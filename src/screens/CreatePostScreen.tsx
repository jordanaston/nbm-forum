import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {usePostCreationSteps} from '../components/feed/create-post-steps/CreatePostStepsParent';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const CreatePostScreen: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
  const [currentPostComponent] = usePostCreationSteps({navigation});

  return (
    <SafeAreaView className="flex-1">
      <View className="mx-6">
        <StatusBar barStyle="dark-content" />
        {currentPostComponent}
      </View>
    </SafeAreaView>
  );
};

export default CreatePostScreen;
