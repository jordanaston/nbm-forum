import {useFormik} from 'formik';
import * as yup from 'yup';
import {CreatePostArgs} from '../../types/FeedTypes';
import {titleAndContentValidationSchema} from '../../validation/TitleAndContentValidationSchema';

export const createPostFormik = (
  currentPostStep: number,
  onSubmit: (values: CreatePostArgs) => void,
) => {
  let currentValidationSchema;

  switch (currentPostStep) {
    case 0:
      currentValidationSchema = titleAndContentValidationSchema;
      break;
    case 1:
      currentValidationSchema = yup.object({});
      break;
  }

  return useFormik<CreatePostArgs>({
    initialValues: {
      title: '',
      content: '',
      tags: [],
    },
    validationSchema: currentValidationSchema,
    onSubmit: values => {
      onSubmit(values);
      console.log(
        'SUBMITTED POST FORM VALUES: ',
        JSON.stringify(values, null, 3),
      );
    },
  });
};
