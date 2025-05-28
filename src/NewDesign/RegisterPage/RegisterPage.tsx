import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  createUser,
  validateForm,
  validationSchema,
} from "./RegisterPageLogic";
import GeneralWave from "../../assets/generalWave.svg";
import { RegisterFormData } from "../../interfaces/types";
import "./RegisterPage.scss";

export default function RegisterPage() {
  const initialValues: RegisterFormData = {
    username: "",
    //email: "",
    password: "",
  };
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    showPassword === false ? setShowPassword(true) : setShowPassword(false);
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
                  type={showPassword ? "text" : "password"}
                  placeholder="*******"
                  name="password"
                  className="inputField"
                />
                {showPassword ? (
                  <VisibilityOffIcon
                    className="inputIconAccent"
                    onClick={() => togglePasswordVisibility()}
                  />
                ) : (
                  <VisibilityIcon
                    className="inputIconAccent"
                    onClick={() => togglePasswordVisibility()}
                  />
                )}
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="formInput">
              <label htmlFor="confirm password">Confirm Password</label>
              <div className="inputFieldContainer">
                <LockIcon className="inputIconMain" />
                <div className="seperatorLine"></div>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="confirm password"
                  placeholder="*******"
                  className="inputField"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
                {showPassword ? (
                  <VisibilityOffIcon
                    className="inputIconAccent"
                    onClick={() => togglePasswordVisibility()}
                  />
                ) : (
                  <VisibilityIcon
                    className="inputIconAccent"
                    onClick={() => togglePasswordVisibility()}
                  />
                )}
              </div>
            </div>

            <div className="bottomPart">
              <button type="submit" disabled={loading} className="buttonBottom">
                {loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  "Create an account"
                )}
              </button>
              <p className="bottomText">
                Already have an account? <a href="/login">Log in</a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
