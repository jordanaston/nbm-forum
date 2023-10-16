import * as yup from 'yup';

export const emailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Enter a valid email address.')
    .required('Email is required.'),
});
