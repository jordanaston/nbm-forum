import * as yup from 'yup';

export const tagsValidationSchema = yup.object().shape({
  tags: yup
    .array()
    .of(yup.string())
    .min(1, 'At least one tag is required.')
    .max(3, 'You can select up to 3 tags only.')
    .required('Tags are required.'),
});
