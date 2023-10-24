import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {usePostCreationSteps} from '../components/feed/create-post-steps/CreatePostStepsParent';
import NbmBackNavBar from '../components/auth/NbmBackNavBar';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const CreatePostScreen: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
  const [currentPostComponent, goBackOneStep, currentPostStep, isLoading] =
    usePostCreationSteps({navigation});

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
