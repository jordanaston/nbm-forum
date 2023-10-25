import * as yup from 'yup';

export const addressValidationSchema = yup.object().shape({
  address: yup.object().shape({
    street: yup
      .string()
      .min(2, 'Street should be at least 2 characters.')
      .required('Street is required.'),
    number: yup
      .string()
      .min(1, 'Number is required.')
      .required('Number is required.'),
    city: yup
      .string()
      .min(2, 'City should be at least 2 characters.')
      .required('City is required.'),
    state: yup
      .string()
      .min(2, 'State should be at least 2 characters.')
      .required('State is required.'),
    postalCode: yup.string().required('Postal code is required.'),
    country: yup
      .string()
      .min(2, 'Country should be at least 2 characters.')
      .required('Country is required.'),
  }),
});
