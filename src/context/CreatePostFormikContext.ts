import {createContext, useContext} from 'react';
import {FormikProps} from 'formik';
import {CreatePostArgs} from '../types/FeedTypes';

export const FormikContext = createContext<FormikProps<CreatePostArgs> | null>(
  null,
);

export const useCreatePostFormik = (): FormikProps<CreatePostArgs> => {
  const context = useContext(FormikContext);
  if (!context) {
    throw new Error(
      'useCreatePostFormik must be used within a FormikContext.Provider',
    );
  }
  return context;
};
