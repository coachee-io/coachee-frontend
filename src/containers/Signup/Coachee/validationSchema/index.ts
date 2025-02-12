import {
  string, number, object, boolean,
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
    .min(8, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters')
    .matches(/[a-zA-Z0-9]/, 'Only letters and numbers'),
  confirmPassword: string()
    .required('This is a required field')
    .test('passwords-match', "Passwords don't match", function passwordMatch(value) {
      return this.parent.password === value
    }),
  reason: string()
    .notRequired(),
  newsletter: boolean()
    .notRequired(),
  acceptTerms: boolean()
    .oneOf([true], 'You need to accept terms and conditions'),
})

export default schema
