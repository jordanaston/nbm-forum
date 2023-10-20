import React, {useState} from 'react';
import CreateYourAccount from './CreateYourAccount';
import LetsSecureYourAccount from './LetsSecureYourAccount';
import UploadProfilePicture from './UploadProfilePicture';
import WhereAreYouLocated from './WhereAreYouLocated';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountFormik} from '../../../utils/CreateAccountFormik';
import {FormikContext} from '../../../context/CreateAccountFormikContext';
import {postCreateAccountDetails} from '../../../services/AuthServices';
import {useMutation} from 'react-query';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
};

export const useAccountCreationSteps = ({
  navigation,
}: Props): [JSX.Element | null, () => void, number, boolean] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const mutation = useMutation(postCreateAccountDetails, {
    onSuccess: () => {
      navigation.navigate('LoginScreen', {accountCreationSuccess: true});
    },
    onError: (error: any) => {
      if (error.response && error.response.status === 409) {
        formik.setStatus('Email or phone number already exists.');
      } else {
        formik.setStatus('An unexpected error occurred.');
      }
    },
  });

  const handleSubmit = (values: any) => {
    if (currentStep === 3) {
      mutation.mutate(values);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const formik = createAccountFormik(currentStep, handleSubmit);

  const wrappedStep = (Component: React.FC) => (
    <FormikContext.Provider value={formik}>
      <Component />
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

  return [
    steps[currentStep] || null,
    goBackOneStep,
    currentStep,
    mutation.isLoading,
  ];
};
