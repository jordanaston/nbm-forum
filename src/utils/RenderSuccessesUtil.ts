import {FormikErrors, FormikTouched} from 'formik';

type FormikValuesWithSuccesses = {
  email?: string;
  password?: string;
};

type RenderSuccessesArgs = {
  touched: FormikTouched<FormikValuesWithSuccesses>;
  errors: FormikErrors<FormikValuesWithSuccesses>;
  status: string | undefined;
};

export const renderSuccesses = ({
  touched,
  errors,
  status,
}: RenderSuccessesArgs): boolean => {
  return (
    (!touched.email || !errors.email) &&
    (!touched.password || !errors.password) &&
    !status
  );
};
