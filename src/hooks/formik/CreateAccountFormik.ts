import {useFormik} from 'formik';
import {createPasswordValidationSchema} from '../../validation/PasswordValidationSchema';
import {userDetailsValidationSchema} from '../../validation/UserDetailsValidationSchema';
import * as yup from 'yup';
import {CreateAccountArgs} from '../../types/CreateAccountTypes';

export const createAccountFormik = (
  currentAccountStep: number,
  onSubmit: (values: CreateAccountArgs) => void,
) => {
  let currentValidationSchema;

  switch (currentAccountStep) {
    case 0:
      currentValidationSchema = userDetailsValidationSchema;
      break;
    case 1:
      currentValidationSchema = yup.object({});
      break;
    case 2:
      currentValidationSchema = createPasswordValidationSchema;
      break;
  }

  return useFormik<CreateAccountArgs>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      address: {
        street: '',
        number: '',
        city: '',
        state: '',
        postalCode: '',
        country: '',
      },
      avatar: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: currentValidationSchema,
    onSubmit: values => {
      onSubmit(values);
    },
  });
};
