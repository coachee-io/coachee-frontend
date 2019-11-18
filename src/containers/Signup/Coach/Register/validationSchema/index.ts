import {
  string, object, array,
} from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export default object().shape({
  name: string()
    .trim()
    .required('This is a required field'),
  location: string()
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
  expertise: array()
    .of(
      string().trim().required('Please select one area'),
    )
    .min(1, 'Please select one area')
    .required('Please select one area'),
  certificates: string()
    .required('This is a required field'),
  aboutYou: string()
    .required('This is a required field'),
  programmes: string()
    .required('This is a required field'),
  availability: string()
    .required('This is a required field'),
  termsAndConditions: string()
    .nullable()
    .required('This is a required field'),
})
