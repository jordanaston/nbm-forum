import React, {useState} from 'react';
import CreateYourAccount from '../components/auth/CreateYourAccount';
import LetsSecureYourAccount from '../components/auth/LetsSecureYourAccount';
import UploadProfilePicture from '../components/auth/UploadProfilePicture';
import WhereAreYouLocated from '../components/auth/WhereAreYouLocated';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountFormik} from '../functions/CreateAccountFormik';
import {FormikContext} from '../context/CreateAccountFormikContext';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useAccountCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, number] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const formik = createAccountFormik(currentStep, values => {
    // Handle final submission here.
  });

  const wrappedStep = (Component: React.FC<{onNext: () => void}>) => {
    return (
      <FormikContext.Provider value={formik}>
        <Component onNext={() => setCurrentStep(prev => prev + 1)} />
      </FormikContext.Provider>
    );
  };

  const steps = [
    wrappedStep(CreateYourAccount),
    wrappedStep(WhereAreYouLocated),
    wrappedStep(LetsSecureYourAccount),
    wrappedStep(UploadProfilePicture),
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
