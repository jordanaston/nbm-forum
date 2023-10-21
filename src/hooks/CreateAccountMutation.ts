import {useMutation} from 'react-query';
import {postCreateAccountDetails} from '../services/AuthServices';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList} from '../navigation/MainStackNavigator';
import {FormikProps} from 'formik';
import {CreateAccountArgs} from '../types/CreateAccountTypes';
import {goToLoginScreen} from '../utils/NavigationUtils';
import {Dispatch, SetStateAction} from 'react';

type Props = {
  navigation: NativeStackNavigationProp<MainStackParamList>;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  formik: FormikProps<CreateAccountArgs>;
};

export const useCreateAccountMutation = ({
  navigation,
  setCurrentStep,
  formik,
}: Props) => {
  return useMutation(postCreateAccountDetails, {
    onSuccess: () => {
      goToLoginScreen({navigation, accountCreationSuccess: true});
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
};
