import {useFormik} from 'formik';
import {createPasswordValidationSchema} from '../../validation/PasswordValidationSchema';
import {userDetailsValidationSchema} from '../../validation/UserDetailsValidationSchema';
import {CreateAccountArgs} from '../../types/CreateAccountTypes';
import {addressValidationSchema} from '../../validation/AddressValidationSchema';

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
      currentValidationSchema = addressValidationSchema;
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
      console.log(
        'CREATE ACCOUNT FORM DETAILS: ',
        JSON.stringify(values, null, 3),
      );
      onSubmit(values);
    },
  });
};
