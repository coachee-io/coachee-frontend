import {
  string, object, array, number,
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
  certificates: string()
    .required('This is a required field'),
  description: string()
    .required('This is a required field'),
  programmes: string()
    .required('This is a required field'),
  availability: number()
    .required('This is a required field')
    .nullable(),
  vat: string(),
  termsAndConditions: string()
    .nullable()
    .required('This is a required field'),
})
