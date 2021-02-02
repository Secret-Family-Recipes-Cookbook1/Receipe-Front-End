import * as yup from "yup";

export default yup.object().shape({
    firstname: yup
    .string()
    .required("username is required"),
    lastname: yup
    .string()
    .required("username is required"),
    email: yup
    .string()
    .email('invalid email')
    .required('valid email address required'),
    password: yup
    .string()
    .required('password required')
    .min(5, "password must be 5 chars long"),
    terms: yup
    .boolean().
    oneOf([true], 'Must check Terms of Service'),
   })