import {useFormik} from 'formik';
import * as yup from 'yup';
import {CreatePostArgs} from '../../types/FeedTypes';

export const createPostFormik = (
  currentPostStep: number,
  onSubmit: (values: CreatePostArgs) => void,
) => {
  return useFormik<CreatePostArgs>({
    initialValues: {
      title: '',
      content: '',
      tags: [],
    },

    onSubmit: values => {
      onSubmit(values);
      console.log(
        'SUBMITTED POST FORM VALUES: ',
        JSON.stringify(values, null, 3),
      );
    },
  });
};
