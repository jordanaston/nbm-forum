import {useFormik} from 'formik';
import {loginValidationSchema} from '../validation/LoginValidationSchema';
import {LoginArgs} from '../types/LoginTypes';

interface Props {
  onSubmit: (values: LoginArgs) => Promise<void>;
}

export const useLoginFormik = ({onSubmit}: Props) => {
  return useFormik<LoginArgs>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    validateOnMount: true,
    onSubmit: values => onSubmit(values),
  });
};
