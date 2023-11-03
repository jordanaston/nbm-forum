import {useMutation} from 'react-query';
import {postCreateAccountDetails} from '../../services/AuthServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/MainStackNavigator';
import {FormikProps} from 'formik';
import {
  CreateAccountArgs,
  CreateAccountSteps,
} from '../../types/CreateAccountTypes';
import {goToLoginScreen} from '../../utils/NavigationUtils';
import {Dispatch, SetStateAction} from 'react';
import {AxiosError} from 'axios';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setCurrentAccountStep: Dispatch<SetStateAction<CreateAccountSteps>>;
  formik: FormikProps<CreateAccountArgs>;
};

export const useCreateAccountMutation = ({
  navigation,
  setCurrentAccountStep,
  formik,
}: Props) => {
  return useMutation(postCreateAccountDetails, {
    onSuccess: () => {
      goToLoginScreen({navigation, accountCreationSuccess: true});
      setCurrentAccountStep('CreateYourAccount');
      formik.resetForm();
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.status === 409) {
        formik.setStatus('Email or phone number already exists.');
      } else {
        formik.setStatus('An unexpected error occurred.');
      }
    },
  });
};
