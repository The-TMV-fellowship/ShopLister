import * as Yup from "yup";
import { RegisterFormData } from "../interfaces/types";

export const validationSchema: Yup.ObjectSchema<RegisterFormData> = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const validateForm = async (values: RegisterFormData) => {
  try {
    await validationSchema.validate(values, { abortEarly: false });
    return {};
  } catch (error) {
    const validationErrors: { [key: string]: string } = {};
    if (error instanceof Yup.ValidationError) {
      error.inner.forEach((err) => {
        if (err.path && err.message) {
          validationErrors[err.path] = err.message;
        }
      });
    }
    return validationErrors;
  }
};
