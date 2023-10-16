import React from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NbmBackNavBar from '../components/auth/NbmBackNavBar';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAccountCreationSteps} from '../utils/AccountCreationSteps';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const CreateAccountScreen: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
  const [currentComponent, goBackOneStep] = useAccountCreationSteps({
    navigation,
  });

  return (
    <SafeAreaView>
      <View className="mx-6">
        <StatusBar barStyle="dark-content" />

        <NbmBackNavBar navigation={navigation} onBackPress={goBackOneStep} />

        {currentComponent}
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
