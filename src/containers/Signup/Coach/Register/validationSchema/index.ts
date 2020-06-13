import {
  string, object, boolean, array, number,
} from 'yup'


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export default object().shape({
  firstName: string()
    .trim()
    .required('This is a required field'),
  lastName: string()
    .trim()
    .required('This is a required field'),
  country: string()
    .trim()
    .required('This is a required field'),
  city: string()
    .trim()
    .required('This is a required field'),
  email: string()
    .trim()
    .required('This is a required field')
    .email('Email address is invalid'),
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
  phone: string()
    .trim()
    .required('This is a required field')
    .matches(phoneRegExp, 'Phone number is not valid'),
  tags: array()
    .of(
      string()
        .required('Please select one area'),
    )
    .min(1, 'Please select one area')
    .required('Please select one area'),
  textCertifications: string()
    .required('This is a required field'),
  description: string()
    .required('This is a required field'),
  textPrograms: string()
    .required('This is a required field'),
  introCall: number()
    .required('This is a required field')
    .nullable(),
  vat: string(),
  acceptTerms: boolean()
  .oneOf([true], 'You need to accept terms and conditions'),
})
