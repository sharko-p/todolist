import * as yup from "yup";

const passwordValidation = yup
  .string()
  .min(8, "Password must be at least 8 characters")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    "Password must meet the criteria"
  )
  .required("Password is required");

const validationSchema = yup.object().shape({
  userName: yup.string().required("Name field is empty"),
  email: yup
    .string()
    .required("Email field is empty")
    .email("Not a valid email address"),
  password: passwordValidation,
  gender: yup.string().oneOf(["male", "female"]).required("Specify gender"),
  age: yup
    .number()
    .min(18, "You must be at least 18 years old")
    .max(99, "You cannot be older than 99 years old")
    .required("Age is required"),
});

export { validationSchema };
