import {FormikErrors, FormikTouched} from 'formik';

type FormikErrorsCheck = {
  email?: string;
  password?: string;
};

type Props = {
  touched: FormikTouched<FormikErrorsCheck>;
  errors: FormikErrors<FormikErrorsCheck>;
  status: string | undefined;
};

export const renderSuccesses = ({touched, errors, status}: Props): boolean => {
  return (
    (!touched.email || !errors.email) &&
    (!touched.password || !errors.password) &&
    !status
  );
};
