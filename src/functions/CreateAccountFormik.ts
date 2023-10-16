import {useFormik} from 'formik';
import {createPasswordValidationSchema} from '../validation/PasswordValidationSchema';
import {nameValidationSchema} from '../validation/NameValidationSchema';
import {emailValidationSchema} from '../validation/EmailValidationSchema';
import * as yup from 'yup';

const firstStepValidationSchema = yup.object().shape({
  ...nameValidationSchema.fields,
  ...emailValidationSchema.fields,
});

const combinedValidationSchema = firstStepValidationSchema.concat(
  createPasswordValidationSchema,
);

export const createAccountFormik = (
  currentStep: number,
  onSubmit: (values: any) => void,
) => {
  let currentValidationSchema;

  switch (currentStep) {
    case 0:
      currentValidationSchema = firstStepValidationSchema;
      break;
    case 1:
      currentValidationSchema = yup.object({});
      break;
    case 2:
      currentValidationSchema = createPasswordValidationSchema;
      break;
    default:
      currentValidationSchema = combinedValidationSchema;
  }

  return useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
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
