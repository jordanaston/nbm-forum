import {useFormik} from 'formik';
import {CreatePostArgs} from '../../types/FeedTypes';
import {titleAndContentValidationSchema} from '../../validation/TitleAndContentValidationSchema';
import {tagsValidationSchema} from '../../validation/TagValidationSchema';

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
      currentValidationSchema = tagsValidationSchema;
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
    },
  });
};
