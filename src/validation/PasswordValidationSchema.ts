import * as yup from 'yup';

export const createPasswordValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      'Password must include at least one uppercase character, one lowercase character, one number, and one special character.',
    )
    .required('Password is required.'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match.')
    .required('Confirm Password is required.'),
});
