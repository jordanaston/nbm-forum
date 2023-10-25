import * as yup from 'yup';

const firstNameValidation = yup
  .string()
  .min(2, 'First name should be at least 2 characters.')
  .required('First name is required.');

const lastNameValidation = yup
  .string()
  .min(2, 'Last name should be at least 2 characters.')
  .required('Last name is required.');

const emailValidation = yup
  .string()
  .email('Enter a valid email address.')
  .required('Email is required.');

const telephoneValidation = yup
  .string()
  .matches(/^(?:\+61|0)4\d{8}$/, 'Invalid Australian phone number format.')
  .required('Telephone is required.');

export const userDetailsValidationSchema = yup.object().shape({
  firstName: firstNameValidation,
  lastName: lastNameValidation,
  email: emailValidation,
  telephone: telephoneValidation,
});
