import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUser,
  validateForm,
  validationSchema,
} from "../../Register/RegisterPageLogic";
import { RegisterFormData } from "../../interfaces/types";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const initialValues: RegisterFormData = {
    username: "",
    email: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: RegisterFormData) => {
    setLoading(true);
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      try {
        await createUser(values);
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
    <div className="registerPage">
      <p className="registerPage__title">Register</p>
      <p className="registerPage__desc">Pleace enter details to register</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
      >
        <Form className="form">
          <div className="registerFormField">
            <label htmlFor="username" className="registerFormField__label">
              username
            </label>
            <Field
              type="text"
              name="username"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="error-message"
            />
          </div>

          <div className="registerFormField">
            <label htmlFor="email" className="registerFormField__label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </div>

          <div className="registerFormField">
            <label htmlFor="password" className="registerFormField__label">
              Password
            </label>
            <Field
              type="password"
              name="password"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <div className="registerFormField">
            <label htmlFor="password" className="registerFormField__label">
              Confirm Password
            </label>
            <Field
              type="password"
              name="password"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </div>

          <button
            type="submit"
            className="registerFormField__submit"
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
      <p>
        Already have an account? <a>Log in</a>
      </p>
    </div>
  );
}
