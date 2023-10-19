import React, {useState} from 'react';
import CreateYourAccount from './create-account-steps/CreateYourAccount';
import LetsSecureYourAccount from './create-account-steps/LetsSecureYourAccount';
import UploadProfilePicture from './create-account-steps/UploadProfilePicture';
import WhereAreYouLocated from './create-account-steps/WhereAreYouLocated';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountFormik} from '../../utils/CreateAccountFormik';
import {FormikContext} from '../../context/CreateAccountFormikContext';
import {postCreateAccountDetails} from '../../services/AuthServices';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useAccountCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, number] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleSubmit = async (values: any) => {
    if (currentStep === 3) {
      try {
        await postCreateAccountDetails(values);
        navigation.navigate('LoadingScreen');

        setTimeout(() => {
          navigation.navigate('LoginScreen', { accountCreationSuccess: true });
        }, 2000);
      } catch (error: any) {
        console.error('Error creating account:', error);

        if (error.response && error.response.status === 409) {
          formik.setStatus('Email or phone number already exists.');
        } else {
          formik.setStatus('An unexpected error occurred.');
        }
      }
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const formik = createAccountFormik(currentStep, handleSubmit);

  const wrappedStep = (Component: React.FC<{nextStep: () => void}>) => (
    <FormikContext.Provider value={formik}>
      <Component nextStep={() => handleSubmit(formik.values)} />
    </FormikContext.Provider>
  );

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
    formik.setStatus(null);
  };

  return [steps[currentStep] || null, goBackOneStep, currentStep];
};
