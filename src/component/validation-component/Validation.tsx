import * as yup from "yup";

const validationSchema = yup.object().shape({
  userName: yup.string().required(""),
  email: yup.string().required("").email("forms.validation.email"),
  password: yup
    .string()
    .min(5, "Password must be at least 5 characters")
    .required("Password is required"),

  gender: yup.string().oneOf(["male", "female"]).required(),
  age: yup
    .number()
    .min(18, "You must be at least 18 years old")
    .max(99, "You cannot be older than 99 years old")
    .required("Age is required"),
});

export { validationSchema };

