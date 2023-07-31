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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="registerFormField">
          <label htmlFor="firstName">First Name:</label>
          <Field type="text" name="firstName" />
          <ErrorMessage
            name="firstName"
            component="div"
            className="error-message"
          />
        </div>

        <div className="registerFormField">
          <label htmlFor="lastName">Last Name:</label>
          <Field type="text" name="lastName" />
          <ErrorMessage
            name="lastName"
            component="div"
            className="error-message"
          />
        </div>

        <div className="registerFormField">
          <label htmlFor="email">Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage
            name="email"
            component="div"
            className="error-message"
          />
        </div>

        <div className="registerFormField">
          <label htmlFor="password">Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage
            name="password"
            component="div"
            className="error-message"
          />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
