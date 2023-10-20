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
  setIsImageUploading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useAccountCreationSteps = ({
  navigation,
  setIsImageUploading,
}: Props): [JSX.Element | null, () => void, number, boolean] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const createAccountMutation = useMutation(postCreateAccountDetails, {
    onSuccess: () => {
      navigation.navigate('LoginScreen', {accountCreationSuccess: true});
      setCurrentStep(0);
      formik.resetForm();
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
      createAccountMutation.mutate(values);
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
    wrappedStep(() => (
      <UploadProfilePicture setImageUploading={setIsImageUploading} />
    )),
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
    createAccountMutation.isLoading,
  ];
};
