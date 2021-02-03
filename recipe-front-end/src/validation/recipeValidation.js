import * as yup from "yup";

export default yup.object().shape({
    title: yup
    .string()
    .required("title is required"),
    source: yup
    .string()
    .required("source is required"),
    ingredients: yup
    .string()
    .required("ingredients is required"),
    instructions: yup
    .string()
    .required("instructions is required"),
    category: yup
    .string()
    .oneOf(['category1', 'category2', 'category3'], 'category is required'),
    photo: yup.mixed()
    .test(
      "fileSize",
      "File is too large",
      value => !value || (value && value.size <= 2000000)
    ),
    
   })