import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUser,
  validateForm,
  validationSchema,
} from "../../Register/RegisterPageLogic";
import GeneralWave from "../../assets/generalWave.svg";
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
    <div>
      <img src={GeneralWave}></img>
      <div className="subContainer">
        <h1>Sign up</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <div className="formInput">
              <label htmlFor="email">Email</label>
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

            <div className="formInput">
              <label htmlFor="password">Password</label>
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

            <div className="formInput">
              <label htmlFor="password">Confirm Password</label>
              <Field type="password" name="password" />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? (
                <CircularProgress size={20} color="inherit" />
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Formik>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}
