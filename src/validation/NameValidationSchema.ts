import * as yup from 'yup';

export const nameValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name should be at least 2 characters.')
    .required('First name is required.'),
  lastName: yup
    .string()
    .min(2, 'Last name should be at least 2 characters.')
    .required('Last name is required.'),
});
