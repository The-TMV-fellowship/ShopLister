import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../interfaces/types";
import "./LoginPage.scss";
import { loginUser, validateForm, validationSchema } from "./LoginPageLogic";

export default function LoginPage() {
  const initialValues: LoginFormData = {
    email: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: LoginFormData) => {
    setLoading(true);
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await loginUser(values);
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("Form validation errors:", validationErrors);
    }
  };

  return (
    <div className="loginPage">
      <p className="loginPage__title">Login</p>
      <p className="loginPage__desc">Pleace enter details to Login</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className="form">
          <div className="loginFormField">
            <label htmlFor="email" className="loginFormField__label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="loginFormField__field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="loginFormField">
            <label htmlFor="password" className="loginFormField__label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="loginFormField__field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button
            type="submit"
            className="loginFormField__submit"
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={20} color="inherit" />
            ) : (
              "Submit"
            )}
          </button>
        </Form>
      </Formik>
      <p className="loginPage__register">
        Don't have an account yet?{" "}
        <a className="loginPage__registerLink" href="/register">
          Register
        </a>
      </p>
    </div>
  );
}
