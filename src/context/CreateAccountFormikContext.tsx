import React from 'react';
import {FormikProps} from 'formik';

type FormikInitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const FormikContext =
  React.createContext<FormikProps<FormikInitialValues> | null>(null);

export const useCreateAccountFormik = (): FormikProps<FormikInitialValues> => {
  const context = React.useContext(FormikContext);
  if (!context) {
    throw new Error(
      'useCreateAccountFormik must be used within a FormikContext.Provider',
    );
  }
  return context;
};
