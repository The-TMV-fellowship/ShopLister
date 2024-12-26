import CircularProgress from "@mui/material/CircularProgress";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
/*
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
*/
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginUser,
  validateForm,
  validationSchema,
} from "../../Login/LoginPageLogic";
import GeneralWave from "../../assets/generalWave.svg";
import { LoginFormData } from "../../interfaces/types";
import "./LoginPage.scss";

export default function LoginPage() {
  const initialValues: LoginFormData = {
    username: "",
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
    <div>
      <img src={GeneralWave}></img>
      <div className="subContainer">
        <h1>Log in</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={false}
          validateOnBlur={false}
        >
          <Form>
            <div className="formInput">
              <label htmlFor="username">Username</label>
              <div className="inputFieldContainer">
                <MailOutlineIcon className="inputIconMain" />
                <div className="seperatorLine"></div>
                <Field
                  type="username"
                  placeholder="username"
                  name="username"
                  className="inputField"
                />
              </div>
              <ErrorMessage
                name="username"
                component="div"
                className="error-message"
              />
            </div>

            <div className="formInput">
              <label htmlFor="password">Password</label>
              <div className="inputFieldContainer">
                <LockIcon className="inputIconMain" />
                <div className="seperatorLine"></div>
                <Field
                  type="password"
                  placeholder="*******"
                  name="password"
                  className="inputField"
                />
                <VisibilityIcon className="inputIconAccent" />
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="belowFormText">
              <div>
                <input
                  type="checkbox"
                  id="rememberPass"
                  name="rememberPass"
                  className="checkbox"
                />
                <label htmlFor="rememberPass">Remember me</label>
              </div>
              <a href="/">Forgot password?</a>
            </div>

            <div className="bottomPart">
              <button type="submit" disabled={loading}>
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Log in"
                )}
              </button>
              <p className="textBottom">
                Don't have an account? <a href="/register">Sign up</a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
