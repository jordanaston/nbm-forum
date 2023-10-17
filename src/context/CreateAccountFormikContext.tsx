import React from 'react';
import {FormikProps} from 'formik';

export type FormikInitialValues = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  address: Address;
  password: string;
  confirmPassword: string;
};

type Address = {
  street: string;
  number: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
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
