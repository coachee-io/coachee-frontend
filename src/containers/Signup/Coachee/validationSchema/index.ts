import {
  string, object, boolean, array,
} from 'yup'

const schema = object().shape({
  firstName: string()
    .required('This is a required field')
    .matches(/[a-zA-Z]/, 'Only letters'),
  lastName: string()
    .required('This is a required field')
    .matches(/[a-zA-Z]/, 'Only letters'),
  email: string()
    .trim()
    .required('This is a required field')
    .email(),
  password: string()
    .trim()
    .required('This is a required field')
    .min(1, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
  confirmPassword: string()
    .required('This is a required field')
    .test('passwords-match', "Passwords don't match", function (value) {
      return this.parent.password === value
    }),
  hearAboutUs: string()
    .notRequired(),
  promotional: boolean()
    .notRequired(),
  terms: boolean()
    .oneOf([true], 'You need to accept terms and conditions'),
})

export default schema
