import React, {useState} from 'react';
import {View, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NbmBackNavBar from '../components/auth/NbmBackNavBar';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BarSlider from '../components/auth/BarSlider';
import {Text} from 'react-native-elements';
import Button from '../components/core/Button';
import {useAccountCreationSteps} from '../components/auth/create-account-steps/AccountCreationStepsParent';
import {goToLoginScreen} from '../utils/GoToLoginScreenFunction';
import LoadingScreen from './LoadingScreen';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

const CreateAccountScreen: React.FC<Props> = ({
  navigation,
}: Props): JSX.Element => {
  const [isImageUploading, setIsImageUploading] = useState<boolean>(false);
  const [currentComponent, goBackOneStep, currentStep, isLoading] =
    useAccountCreationSteps({navigation, setIsImageUploading});

  return (
    <SafeAreaView className="flex-1">
      {isLoading || isImageUploading ? (
        <LoadingScreen />
      ) : (
        <>
          <View className="mx-6">
            <StatusBar barStyle="dark-content" />
            <NbmBackNavBar
              navigation={navigation}
              onBackPress={goBackOneStep}
            />
            <BarSlider currentStep={currentStep} />
            {currentComponent}
          </View>

          {currentStep === 0 && (
            <View className="absolute bottom-10 left-0 right-0 flex-row justify-center">
              <Text className="text-ForumPurple text-[14px]">
                Already have an account?{' '}
              </Text>
              <Button
                onPress={() => goToLoginScreen({navigation})}
                text="Log in here."
                includeArrow={false}
                backgroundColor="bg-none"
                textColor="text-ForumPurple"
                textSize="text-[14px]"
                fontStyle="font-syne-semibold"
                underline="underline"
                border=""
                height=""
                position=""
                position2=""
              />
            </View>
          )}
        </>
      )}
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
