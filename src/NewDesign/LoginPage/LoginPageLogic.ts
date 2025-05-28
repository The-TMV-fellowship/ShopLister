import axios from "axios";
import * as Yup from "yup";
import { LoginFormData } from "../../interfaces/types";

export const validationSchema: Yup.ObjectSchema<LoginFormData> = Yup.object({
  username: Yup.string() /*.email("Invalid username")*/
    .required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const validateForm = async (values: LoginFormData) => {
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

export async function loginUser(values: LoginFormData) {
  const API_BASE_URL = import.meta.env.VITE_API_URL as string;

  await axios
    .post(`http://127.0.0.1:8000/api/login_check`, values)
    .then((response) => {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("userID", response.data.userId);
    });
}
