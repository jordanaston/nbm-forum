import React, {useState} from 'react';
import CreateYourAccount from '../components/auth/CreateYourAccount';
import LetsSecureYourAccount from '../components/auth/LetsSecureYourAccount';
import UploadProfilePicture from '../components/auth/UploadProfilePicture';
import WhereAreYouLocated from '../components/auth/WhereAreYouLocated';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useAccountCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, number] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = [
    <CreateYourAccount onNext={() => setCurrentStep(prev => prev + 1)} />,
    <WhereAreYouLocated onNext={() => setCurrentStep(prev => prev + 1)} />,
    <LetsSecureYourAccount onNext={() => setCurrentStep(prev => prev + 1)} />,
    <UploadProfilePicture onNext={() => setCurrentStep(prev => prev + 1)} />,
  ];

  const goBackOneStep = () => {
    if (currentStep === 0) {
      navigation.navigate('WelcomeScreen');
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return [steps[currentStep] || null, goBackOneStep, currentStep];
};
