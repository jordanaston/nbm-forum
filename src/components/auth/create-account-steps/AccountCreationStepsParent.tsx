import React, {useState} from 'react';
import CreateYourAccount from './CreateYourAccount';
import LetsSecureYourAccount from './LetsSecureYourAccount';
import UploadProfilePicture from './UploadProfilePicture';
import WhereAreYouLocated from './WhereAreYouLocated';
import {MainStackParamList} from '../../../navigation/MainStackNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createAccountFormik} from '../../../hooks/formik/CreateAccountFormik';
import {FormikContext} from '../../../context/CreateAccountFormikContext';
import {useCreateAccountMutation} from '../../../hooks/CreateAccountMutation';
import {goToWelcomeScreen} from '../../../utils/NavigationUtils';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setIsImageUploading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const useAccountCreationSteps = ({
  navigation,
  setIsImageUploading,
}: Props): [JSX.Element | null, () => void, number, boolean] => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const formik = createAccountFormik(currentStep, values => {
    if (currentStep === 3) {
      createAccountMutation.mutate(values);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  });

  const createAccountMutation = useCreateAccountMutation({
    navigation,
    setCurrentStep,
    formik,
  });

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
      goToWelcomeScreen({navigation});
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
