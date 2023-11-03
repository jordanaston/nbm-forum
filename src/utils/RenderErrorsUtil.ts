import {FormikErrors, FormikTouched} from 'formik';

type FormikValuesWithErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  telephone?: string;
  title?: string;
  content?: string;
};

type Props = {
  touched: FormikTouched<FormikValuesWithErrors>;
  errors: FormikErrors<FormikValuesWithErrors>;
  status: string | undefined;
};

export const renderErrors = ({
  touched,
  errors,
  status,
}: Props): string | undefined => {
  switch (true) {
    case touched.firstName && !!errors.firstName:
      return errors.firstName;
    case touched.lastName && !!errors.lastName:
      return errors.lastName;
    case touched.email && !!errors.email:
      return errors.email;
    case touched.password && !!errors.password:
      return errors.password;
    case touched.telephone && !!errors.telephone:
      return errors.telephone;
    case touched.title && !!errors.title:
      return errors.title;
    case touched.content && !!errors.content:
      return errors.content;
    case !!status:
      return status;
    default:
      return undefined;
  }
};
