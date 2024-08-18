import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Z]/, 'Name must start with an uppercase letter.')
    .required('Name is required.'),
  age: Yup.number()
    .positive('Age must be a positive number.')
    .integer('Age must be an integer.')
    .required('Age is required.'),
  email: Yup.string()
    .email('Invalid email format.')
    .required('Email is required.'),
  password: Yup.string()
    .matches(/(?=.*[0-9])/, 'Password must contain at least one number.')
    .matches(
      /(?=.*[A-Z])/,
      'Password must contain at least one uppercase letter.',
    )
    .matches(
      /(?=.*[a-z])/,
      'Password must contain at least one lowercase letter.',
    )
    .matches(
      /(?=.*[!@#$%^&*])/,
      'Password must contain at least one special character.',
    )
    .required('Password is required.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match.')
    .required('Confirm Password is required.'),
  gender: Yup.string().required('Gender is required.'),
  accept: Yup.boolean().oneOf(
    [true],
    'You must accept the terms and conditions.',
  ),
  picture: Yup.mixed<FileList>()
    .required('Picture is required.')
    .test('fileSize', 'File is too large. Maximum size is 2MB.', (value) => {
      return (
        !value ||
        (value && value instanceof File
          ? value.size <= 2097152
          : value[0].size <= 2097152)
      );
    })
    .test(
      'fileFormat',
      'Unsupported format. Only PNG and JPEG are allowed.',
      (value) =>
        !value ||
        (value && value instanceof File
          ? ['image/png', 'image/jpeg'].includes(value.type)
          : ['image/png', 'image/jpeg'].includes(value[0].type)),
    ),
  country: Yup.string().required('Country is required.'),
});
