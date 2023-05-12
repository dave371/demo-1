import * as yup from 'yup';

// Contact Form Validation Schema
export const contactFormSchema = yup.object().shape({
  name: yup
    .string()
    .max(100, 'Name should be less than 100 characters.')
    .required('Required'),
  email: yup
    .string()
    .email('Please enter a valid email address.')
    .required('Required'),
  message: yup.string().required('Required'),
});
