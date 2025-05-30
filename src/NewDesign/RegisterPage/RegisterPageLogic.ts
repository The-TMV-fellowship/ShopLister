import axios from "axios";
import * as Yup from "yup";
import { RegisterFormData } from "../../interfaces/types";

export const validationSchema: Yup.ObjectSchema<RegisterFormData> = Yup.object({
  username: Yup.string().required("Username is required"),
  //email: Yup.string().email("Invalid email").required("Email is required"),
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

export async function createUser(values: RegisterFormData) {
  const API_BASE_URL = import.meta.env.VITE_API_URL as string;

  await axios.post(`http://127.0.0.1:8000/api/register`, values);
}
