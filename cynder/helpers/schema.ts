import * as yup from "yup";
export const clientRegisterSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "Firstname must contain at least 3 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Lastname must contain at least 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must contain at least 5 characters"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), " "], "Passwords must match") // Ensure it matches the 'password' field
    .required("Confirm Password is required"),
  agreeToTerms: yup
    .bool()
    .oneOf([true], "You must agree to the terms and conditions"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must contain at least 5 characters"),
});
