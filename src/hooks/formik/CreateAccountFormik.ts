import {useFormik} from 'formik';
import {createPasswordValidationSchema} from '../../validation/PasswordValidationSchema';
import {userDetailsValidationSchema} from '../../validation/UserDetailsValidationSchema';
import * as yup from 'yup';
import {CreateAccountArgs} from '../../types/CreateAccountTypes';

export const createAccountFormik = (
  currentStep: number,
  onSubmit: (values: CreateAccountArgs) => void,
) => {
  let currentValidationSchema;

  switch (currentStep) {
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

  return useFormik({
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
      console.log('SUBMITTED FORM VALUES: ', JSON.stringify(values, null, 3));
      onSubmit(values);
    },
  });
};
