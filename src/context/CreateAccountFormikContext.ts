import React from 'react';
import {FormikProps} from 'formik';
import {CreateAccountArgs} from '../types/CreateAccountTypes';

export const FormikContext =
  React.createContext<FormikProps<CreateAccountArgs> | null>(null);

export const useCreateAccountFormik = (): FormikProps<CreateAccountArgs> => {
  const context = React.useContext(FormikContext);
  if (!context) {
    throw new Error(
      'useCreateAccountFormik must be used within a FormikContext.Provider',
    );
  }
  return context;
};
