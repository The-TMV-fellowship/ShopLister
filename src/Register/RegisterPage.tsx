import { ErrorMessage, Field, Form, Formik } from "formik";
import { RegisterFormData } from "../interfaces/types";
import "./RegisterPage.scss";
import {
  createUser,
  validateForm,
  validationSchema,
} from "./RegisterPageLogic";

export default function RegisterPage() {
  const initialValues: RegisterFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: RegisterFormData) => {
    const validationErrors = await validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      await createUser(values);
      console.log("Form is valid");
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
            <label htmlFor="firstName" className="registerFormField__label">
              First Name
            </label>
            <Field
              type="text"
              name="firstName"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="error-message"
            />
          </div>

          <div className="registerFormField">
            <label htmlFor="lastName" className="registerFormField__label">
              Last Name
            </label>
            <Field
              type="text"
              name="lastName"
              className="registerFormField__field"
            />
            <ErrorMessage
              name="lastName"
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

          <button type="submit" className="registerFormField__submit">
            Submit
          </button>
        </Form>
      </Formik>
      <p className="registerPage__login">
        Already have an account?{" "}
        <a className="registerPage__loginLink" href="/login">
          Login
        </a>
      </p>
    </div>
  );
}
