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

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setIsImageUploading: Dispatch<SetStateAction<boolean>>;
};

export const useAccountCreationSteps = ({
  navigation,
  setIsImageUploading,
}: Props): [JSX.Element | null, () => void, number, boolean] => {
  const [currentAccountStep, setCurrentAccountStep] = useState<number>(0);

  const formik = createAccountFormik(currentAccountStep, values => {
    if (currentAccountStep === 3) {
      createAccountMutation.mutate(values);
    } else {
      setCurrentAccountStep(prev => prev + 1);
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

  const steps = [
    wrappedAccountStep(CreateYourAccount),
    wrappedAccountStep(WhereAreYouLocated),
    wrappedAccountStep(LetsSecureYourAccount),
    wrappedAccountStep(() => (
      <UploadProfilePicture setImageUploading={setIsImageUploading} />
    )),
  ];

  const goBackOneStep = () => {
    if (currentAccountStep === 0) {
      goToWelcomeScreen({navigation});
    } else if (currentAccountStep > 0) {
      setCurrentAccountStep(prev => prev - 1);
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
