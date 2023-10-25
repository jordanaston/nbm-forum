import React, {Dispatch, SetStateAction, useState} from 'react';
import CreateYourAccount from './CreateYourAccount';
import LetsSecureYourAccount from './LetsSecureYourAccount';
import UploadProfilePicture from './UploadProfilePicture';
import WhereAreYouLocated from './WhereAreYouLocated';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountFormik} from '../../../hooks/formik/CreateAccountFormik';
import {FormikContext} from '../../../context/CreateAccountFormikContext';
import {useCreateAccountMutation} from '../../../hooks/mutations/CreateAccountMutation';
import {goToWelcomeScreen} from '../../../utils/NavigationUtils';
import {CreateAccountSteps} from '../../../types/CreateAccountTypes';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setIsImageUploading: Dispatch<SetStateAction<boolean>>;
};

export const useAccountCreationSteps = ({
  navigation,
  setIsImageUploading,
}: Props): [JSX.Element | null, () => void, CreateAccountSteps, boolean] => {
  const [currentAccountStep, setCurrentAccountStep] =
    useState<CreateAccountSteps>('CreateYourAccount');

  const formik = createAccountFormik(currentAccountStep, values => {
    if (currentAccountStep === 'UploadProfilePicture') {
      createAccountMutation.mutate(values);
    } else {
      advanceToNextStep(currentAccountStep);
    }
  });

  const createAccountMutation = useCreateAccountMutation({
    navigation,
    setCurrentAccountStep,
    formik,
  });

  const wrappedAccountStep = (CreateAccountComponent: React.FC) => (
    <FormikContext.Provider value={formik}>
      <CreateAccountComponent />
    </FormikContext.Provider>
  );

  const steps: {[key in CreateAccountSteps]: JSX.Element} = {
    CreateYourAccount: wrappedAccountStep(CreateYourAccount),
    WhereAreYouLocated: wrappedAccountStep(WhereAreYouLocated),
    LetsSecureYourAccount: wrappedAccountStep(LetsSecureYourAccount),
    UploadProfilePicture: wrappedAccountStep(() => (
      <UploadProfilePicture setImageUploading={setIsImageUploading} />
    )),
  };

  const advanceToNextStep = (current: CreateAccountSteps) => {
    switch (current) {
      case 'CreateYourAccount':
        setCurrentAccountStep('WhereAreYouLocated');
        break;
      case 'WhereAreYouLocated':
        setCurrentAccountStep('LetsSecureYourAccount');
        break;
      case 'LetsSecureYourAccount':
        setCurrentAccountStep('UploadProfilePicture');
        break;
      case 'UploadProfilePicture':
        break;
    }
  };

  const goBackOneStep = () => {
    switch (currentAccountStep) {
      case 'CreateYourAccount':
        goToWelcomeScreen({navigation});
        break;
      case 'WhereAreYouLocated':
        setCurrentAccountStep('CreateYourAccount');
        break;
      case 'LetsSecureYourAccount':
        setCurrentAccountStep('WhereAreYouLocated');
        break;
      case 'UploadProfilePicture':
        setCurrentAccountStep('LetsSecureYourAccount');
        break;
    }
    formik.setStatus(null);
  };

  return [
    steps[currentAccountStep] || null,
    goBackOneStep,
    currentAccountStep,
    createAccountMutation.isLoading,
  ];
};
