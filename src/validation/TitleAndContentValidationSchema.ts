import * as yup from 'yup';

export const titleAndContentValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Title should be at least 2 characters.')
    .max(50, 'Title should not exceed 50 characters.')
    .required('Title is required.'),

  content: yup
    .string()
    .min(2, 'Content should be at least 2 characters.')
    .max(200, 'Content should not exceed 200 characters.')
    .required('Content is required.'),
});
