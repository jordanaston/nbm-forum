import {useFormik} from 'formik';
import {CreatePostArgs, CreatePostSteps} from '../../types/FeedTypes';
import {titleAndContentValidationSchema} from '../../validation/TitleAndContentValidationSchema';
import {tagsValidationSchema} from '../../validation/TagValidationSchema';

export const createPostFormik = (
  currentPostStep: CreatePostSteps,
  onSubmit: (values: CreatePostArgs) => void,
) => {
  let currentValidationSchema;

  switch (currentPostStep) {
    case 'EnterPostDetails':
      currentValidationSchema = titleAndContentValidationSchema;
      break;
    case 'SelectACatagory':
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
