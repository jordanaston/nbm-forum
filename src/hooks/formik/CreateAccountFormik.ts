import {useFormik} from 'formik';
import {createPasswordValidationSchema} from '../../validation/PasswordValidationSchema';
import {userDetailsValidationSchema} from '../../validation/UserDetailsValidationSchema';
import {
  CreateAccountArgs,
  CreateAccountSteps,
} from '../../types/CreateAccountTypes';
import {addressValidationSchema} from '../../validation/AddressValidationSchema';

export const createAccountFormik = (
  currentAccountStep: CreateAccountSteps,
  onSubmit: (values: CreateAccountArgs) => void,
) => {
  let currentValidationSchema;

  switch (currentAccountStep) {
    case 'CreateYourAccount':
      currentValidationSchema = userDetailsValidationSchema;
      break;
    case 'WhereAreYouLocated':
      currentValidationSchema = addressValidationSchema;
      break;
    case 'LetsSecureYourAccount':
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
        fullAddress: '',
        streetName: '',
        streetNumber: '',
        googlePlaceId: '',
        lng: 0,
        lat: 0,
        suburb: '',
        postcode: '',
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
