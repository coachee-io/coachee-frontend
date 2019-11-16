import {
  string, object, array,
} from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export default object().shape({
  name: string()
    .trim()
    .required('This is a required question'),
  location: string()
    .trim()
    .required('This is a required question'),
  email: string()
    .trim()
    .required('This is a required question')
    .email('Email address is invalid'),
  phone: string()
    .trim()
    .required('This is a required question')
    .matches(phoneRegExp, 'Phone number is not valid'),
  expertise: array()
    .min(1, 'This is a required question'),
  certificates: string()
    .required('This is a required question'),
  aboutYou: string()
    .required('This is a required question'),
  programmes: string()
    .required('This is a required question'),
  vat: string()
    .nullable()
    .required('This is a required question'),
  termsAndConditions: string()
    .nullable()
    .required('This is a required question'),
})
